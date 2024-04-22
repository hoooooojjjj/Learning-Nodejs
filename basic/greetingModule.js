const user1 = "sono";
const user2 = "sono~";

function hello(name) {
  console.log(`${name}님, 안녕하세요?`);
}

module.exports = {
  user1,
  user2,
  hello: hello,
};
