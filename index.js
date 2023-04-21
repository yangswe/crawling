import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import puppeteer from 'puppeteer'

const app = express()
const port = process.env.POST || 80
const __dirname = path.resolve();
app.listen(port)

//post-body의 값 파싱을 위해 bodyparser 사용
app.use(bodyParser.json()); 

app.post('/api/data', async (req, res)=> {
    //res.json(req.body)
    console.log(req.body.searchValue) 
    const result = await openBrowser(req.body.searchValue)
    console.log("result: "+result)
    res.json(result)
})

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'crawling/dist')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/crawling/dist/index.html'));
});


/**
 * 브라우저 오픈 함수
 * @param {string} keyword 검색 키워드
 */
async function openBrowser(keyword) {

  // 브라우저 실행 및 옵션, 현재 옵션은 headless 모드 사용 여부
  const browser = await puppeteer.launch({ headless: false });

  // 브라우저 열기
  const page = await browser.newPage();

  // 포탈로 이동
  await page.goto("https://www.daangn.com/");

  // 브라우저를 호출해 다음 버튼을 클릭
  await page.evaluate(() => {
    const searchButton = document.querySelector("#gnb-root button:not(.karrot-button)");
    if (searchButton) {
      searchButton.click();
    }
  });

  // 키워드 입력
  await page.type("input[type=search]", keyword);
  
  // 키워드 검색
  await page.type("input[type=search]", String.fromCharCode(13));

  
  //let searchAllData = [];

    // 검색하고 싶은 페이지 수 만큼 반복
  for (let i = 0; i < 5; i++) {

      console.log(i)
      try {
        // 다음 버튼이 로드될때까지 대기
        //await page.waitForSelector(".more-btn", { timeout: 10000 });

        // 해당 콘텐츠가 visible 상태가 될때까지 대기
        await page.waitForSelector('.more-text', {
          visible: true,
          timeout: 10000,
        })

        // 브라우저를 호출해 다음 버튼을 클릭
        await page.evaluate(() => {
          const moreBtn = document.querySelector(".more-btn");
          if (moreBtn) {
            moreBtn.click();
          }
        });


        // 다음 버튼이 더이상 없는 경우 지금까지 크롤링한 모든 검색결과 반환
      } catch (error) {
        //return searchAllData;
        console.log(error)
      }
    
  }


  // 크롤링해서 검색 결과들을 담음
  //searchAllData.push(...(await crawlingData()));
  console.log("!")
  try {
    return await crawlingData(page);  
  } catch (error) {
    console.log(error)
  }
  
  
}




 /**
   * 크롤링 함수
   * @return {array} 검색 결과
   */
 async function crawlingData(page) {
console.log('start')
  // await page.waitForSelector('.more-text', {
  //   visible: true,
  //   timeout: 10000,
  // })

  console.log('start2')
  // 호출된 브라우저 영역
  const searchData = await page.evaluate(() => {
    // 검색된 돔 요소를 배열에 담음
    let contentsList = Array.from(document.querySelectorAll("#flea-market-wrap .flea-market-article"));  
    
    let contentsObjList = [];

    // 검색결과 크롤링
    contentsList.forEach((item) => {
    
      const title = item.querySelector(".article-title");
      const location = item.querySelector(".article-region-name");
      const price = item.querySelector(".article-price");
      const link = item.querySelector(".flea-market-article-link");
      const img = item.querySelector(".flea-market-article-link .card-photo img");

      if (title && location && price && link) {
        contentsObjList.push({
          title: title.textContent, // 타이틀
          locationName: location.textContent, // 위치
          price: price.textContent, // 카테고리
          link: link.href, // 링크
          imageSrc: img.src
        });
      }
      
    });

    // 호출된 브라우저 영역 콘솔창에서 확인할 수 있음
    console.log(contentsList); // 검색한 엘리먼트 리스트
    console.log(contentsObjList); // 검색한 콘텐츠 오브젝트 리스트

    return contentsObjList;
  });
  console.log('start6')
  // 검색결과 반환
  return searchData;
}


console.log(`server running ${port}`)