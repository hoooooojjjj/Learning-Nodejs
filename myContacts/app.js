const express = require("express");

// app이라는 이름을 가진 서버 만들기
const app = express();

// app 서버를 통해 서버 응답
app.get("/", (req, res) => {
  res.send("hello node");
});

// 연락처 전체 목록 가져오기 / 쿼리 파라미터
app.get("/contacts", (req, res) => {
  if (req.query.q && req.query.r) {
    res.send(`Contacts Page : q = ${req.query.q}, r = ${req.query.r}`);
  } else {
    res.send("Contacts Page");
  }
});

// 새로운 연락처 추가
app.post("/contacts", (req, res) => {
  res.send("Create Contacts");
});

// 특정 연락처 가져오기(라우트 파라미터)
app.get("/contacts/:id", (req, res) => {
  res.send(`View Contact for ID : ${req.params.id}`);
});

// 특정 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
  res.send(`Update Contact for ID : ${req.params.id}`);
});

// 특정 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
  res.send(`Delete Contact for ID : ${req.params.id}`);
});

// 서버 실행
app.listen(8080, () => {
  console.log("서버 실행 중");
});
