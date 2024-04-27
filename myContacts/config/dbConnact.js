// mongoose 가져오기
const mongoose = require("mongoose");

// dotenv 사용
require("dotenv").config();

// 데이터베이스 연결
const dbConntact = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNACT);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConntact;
