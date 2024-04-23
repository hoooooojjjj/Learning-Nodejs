const path = require("path");

// join -> 인자로 들어온 문자열을 경로 구분선으로 구분하여 하나의 경로로 만들어준다.
const fullPath = path.join("some", "work", "ex.txt");
// console.log(fullPath); // 출력 : some/work/ex.txt

// dirname -> 인자로 들어온 경로에서 파일 명을 제외한 경로만 추출
const dir = path.dirname(fullPath);
// console.log(dir); // 출력 : some/work

// basename -> 인자로 들어온 경로에서 파일 명만 추출(확장자 제외 가능)
const fn1 = path.basename(__filename);
const fn2 = path.basename(__filename, ".js"); // 확장자 제외
// console.log(`fn1 : ${fn1}, fn2 : ${fn2}`); // 출력 : fn1 : path.js, fn2 : path
