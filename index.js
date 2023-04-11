import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.POST || 80
const __dirname = path.resolve();
app.listen(port)

//post-body의 값 파싱을 위해 bodyparser 사용
app.use(bodyParser.json()); 

app.post('/api/data', (req, res)=> {
    res.json(req.body)
})

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'crawling/dist')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/crawling/dist/index.html'));
});

console.log(`server running ${port}`)