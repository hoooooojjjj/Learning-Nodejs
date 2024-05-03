const asyncHandler = require("express-async-handler");

// 연락처 전체 목록 가져오기 / 쿼리 파라미터
// 컨트롤러 함수
const getAllContact = asyncHandler(async (req, res) => {
  if (req.query.q && req.query.r) {
    res.send(`Contacts Page : q = ${req.query.q}, r = ${req.query.r}`);
  } else {
    res.send("Contacts Page");
  }
});

// 새로운 연락처 추가
// 컨트롤러 함수
const postOneContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.send("필수값을 입력해주세요");
  } else {
    res.send(
      `Create Contacts : name = ${name}, email = ${email}, phone = ${phone}`
    );
  }
});

// 특정 연락처 가져오기(라우트 파라미터)
// 컨트롤러 함수
const getOneContact = asyncHandler(async (req, res) => {
  res.send(`View Contact for ID : ${req.params.id}`);
});

// 특정 연락처 수정하기
// 컨트롤러 함수
const putOneContact = asyncHandler(async (req, res) => {
  res.send(`Update Contact for ID : ${req.params.id}`);
});

// 특정 연락처 삭제하기
// 컨트롤러 함수
const deleteOneContact = asyncHandler(async (req, res) => {
  res.send(`Delete Contact for ID : ${req.params.id}`);
});

module.exports = {
  getAllContact,
  postOneContact,
  getOneContact,
  putOneContact,
  deleteOneContact,
};
