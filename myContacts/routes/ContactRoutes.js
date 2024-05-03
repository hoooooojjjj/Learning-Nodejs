const express = require("express");

// 라우터 객체 만들기(라우터 미들웨어 사용)
const router = express.Router();

// Contacts Controller 가져오기
const {
  getAllContact,
  postOneContact,
  getOneContact,
  putOneContact,
  deleteOneContact,
} = require("../controllers/contactController");

router
  .route("/")
  // 연락처 전체 목록 가져오기 / 쿼리 파라미터
  // 익스프레스 라우터 미들웨어 사용
  .get(getAllContact)
  // 새로운 연락처 추가
  // 익스프레스 라우터 미들웨어 사용
  .post(postOneContact);

router
  .route("/:id")
  // 특정 연락처 가져오기(라우트 파라미터)
  // 익스프레스 라우터 미들웨어 사용
  .get(getOneContact)
  // 특정 연락처 수정하기
  // 익스프레스 라우터 미들웨어 사용
  .put(putOneContact)
  // 특정 연락처 삭제하기
  // 익스프레스 라우터 미들웨어 사용
  .delete(deleteOneContact);

module.exports = router;
