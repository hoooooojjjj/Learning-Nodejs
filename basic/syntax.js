// 즉시 실행 함수
// (function (a, b) {
//   console.log(`두 수의 합 : ${a + b}`);
// })(100, 200);

// 동기 - 비동기
function displayA() {
  console.log("A");
}

function displayB() {
  setTimeout(() => {
    console.log("B");
  }, 2000);
}

function displayC() {
  console.log("C");
}
// displayA();
// displayB();
// displayC();

function displayA() {
  console.log("A");
}

function displayB(callbackC) {
  setTimeout(() => {
    console.log("B");
    callbackC();
  }, 2000);
}

function displayC() {
  console.log("C");
}
displayA();
displayB(displayC);
