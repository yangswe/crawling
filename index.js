import express from 'express'
import path from 'path'

const app = express()
const port = process.env.POST || 80
const __dirname = path.resolve();
app.listen(port)

app.use('/api/data', (req, res)=> {
    res.json({greeting: 'hello?'})
})

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'crawling/dist')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/crawling/dist/index.html'));
});

console.log(`server running ${port}`)