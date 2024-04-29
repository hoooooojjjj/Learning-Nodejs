const mongoose = require("mongoose");

// 스키마 구성하기
// new mongoose.Schema(자료 정보 정의[, 옵션])
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "전화번호를 입력해주세요"],
    },
  },
  { timestamps: true }
);

// 스키마를 모델로 변환
// mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
