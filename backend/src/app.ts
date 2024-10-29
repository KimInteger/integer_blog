import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const server = http.createServer((req, res) => {
  // favicon.ico 요청 무시
  if (req.url === '/favicon.ico') {
    return;
  }

  if (req.method === 'GET') {
    if (req.url === '/') {
      const filePath = path.join(__dirname,'index.html');
      console.log(path.join(__dirname))
      // index.html 파일을 읽습니다.
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 Internal Server Error");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if(req.url === '/bundle.js'){
      const filePath = path.join(__dirname,'bundle.js');
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 Internal Server Error");
          return;
        }
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(data);
      })
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("405 Method Not Allowed");
  }
});

// 환경변수에서 PORT를 가져오고, 기본값으로 3000을 설정합니다.
const PORT = process.env.PORT || 3000;

// 서버를 지정된 포트에서 실행합니다.
server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
