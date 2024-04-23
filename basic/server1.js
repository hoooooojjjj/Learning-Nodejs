const http = require("http");

// 서버 만들기
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.write("hello node");
  res.end();
});

// 서버 실행
server.listen(3000, () => {
  console.log("서버 실행 중");
});
