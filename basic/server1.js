const http = require("http");

// 서버 만들기
const server = http.createServer((req, res) => {
  // req.url : 요청 경로
  // req.method : 요청 방식
  res.setHeader("Content-type", "text/plain");
  const { url, method } = req;
  if (method === "GET" && url === "/home") {
    res.write("HOME");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.end("ABOUT");
  } else {
    res.end("NOT FOUND");
  }

  // res.write("hello node");
  // res.end();
});

// 서버 실행
server.listen(3000, () => {
  console.log("서버 실행 중");
});
