const express = require("express");

// app이라는 이름을 가진 서버 만들기
const app = express();

app.get("/", (req, res) => {
  res.send("hello node");
});

app.get("/contacts", (req, res) => {
  res.send("Contacts Page");
});

// 서버 실행
app.listen(8080, () => {
  console.log("서버 실행 중");
});
