// 한줄씩 입력을 받아서, 처리하여 정답을 출력할때는 readline 모듈을 사용한다
const rl = require("readline").createInterface({
  input: process.stdin,
  output: proccess.stdout,
});

let input = [];
rl.on("line", function (line) {
  // 콘솔 입력창에서 줄바꿈을 입력할때마다 호출
  input.push(line);
}).on("close", function () {
  // 콘솔 입력 창에서 Ctrl+ C or Ctrl + D를 입력하면 호출
  console.log(input);
  process.exit();
});
