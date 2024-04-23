const fsCallbackSync = require("node:fs"); // 콜백 or 동기
const fsPromoises = require("node:fs/promises"); // 프로미스

// readdir() -> 현재 폴더(디렉토리)에 있는 파일들을 읽어옴

// 동기로 가져오기
const readdirSync = fsCallbackSync.readdirSync(__dirname);
console.log(readdirSync);

// 콜백함수로 가져오기
fsCallbackSync.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
  } else console.log(files);
});

// promises로 가져오기
(async function () {
  try {
    const files = await fsPromoises.readdir(__dirname);
    console.log(files);
  } catch (err) {
    console.error(err);
  }
})();

// readFile -> 파일 읽어오기 / 인코딩 필요! && writeFile() -> 파일 기록하기
// 동기
const readFileSync = fsCallbackSync.readFileSync(
  "/Users/ryuhojun/Documents/Learning-Nodejs/basic/example.txt",
  { encoding: "utf8" }
);
console.log(readFileSync);

fsCallbackSync.writeFileSync(
  "/Users/ryuhojun/Documents/Learning-Nodejs/basic/write.txt",
  readFileSync,
  { encoding: "utf8" }
);

// 콜백함수
fsCallbackSync.readFile(
  "/Users/ryuhojun/Documents/Learning-Nodejs/basic/example.txt",
  { encoding: "utf8" },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data);
      fsCallbackSync.writeFile(
        "/Users/ryuhojun/Documents/Learning-Nodejs/basic/write.txt",
        data,
        { encoding: "utf8" },
        (err) => {
          if (err) {
            console.log(err);
          }
          console.log("write.txt is writed");
        }
      );
    }
  }
);

// promises
(async function () {
  try {
    const data = await fsPromoises.readFile(
      "/Users/ryuhojun/Documents/Learning-Nodejs/basic/example.txt",
      { encoding: "utf8" }
    );
    // console.log(data);
    await fsPromoises.writeFile(
      "/Users/ryuhojun/Documents/Learning-Nodejs/basic/write.txt",
      data,
      { encoding: "utf8" }
    );
    console.log("write.txt is writed");
  } catch (error) {
    console.log(error);
  }
})();
