const express = require("express");

// 라우터 객체 만들기(라우터 미들웨어 사용)
const router = express.Router();

router
  .route("/")
  // 연락처 전체 목록 가져오기 / 쿼리 파라미터
  // 익스프레스 라우터 미들웨어 사용
  .get((req, res) => {
    if (req.query.q && req.query.r) {
      res.send(`Contacts Page : q = ${req.query.q}, r = ${req.query.r}`);
    } else {
      res.send("Contacts Page");
    }
  })
  // 새로운 연락처 추가
  // 익스프레스 라우터 미들웨어 사용
  .post((req, res) => {
    res.send("Create Contacts");
  });

router
  .route("/:id")
  // 특정 연락처 가져오기(라우트 파라미터)
  // 익스프레스 라우터 미들웨어 사용
  .get((req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
  })
  // 특정 연락처 수정하기
  // 익스프레스 라우터 미들웨어 사용
  .put((req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
  })
  // 특정 연락처 삭제하기
  // 익스프레스 라우터 미들웨어 사용
  .delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
  });

module.exports = router;
