/* 알람시간 설정하기
    현재시각이 주어졌을때, 45분을 감소시킨다
    0분보다 작아지면, 1시간 감소한다.
    0시보다 작아지면, 23시로 초기화한다.
*/

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

if (minute < 45) {
  //분이 45분 미만이라면
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;

console.log(hour + " " + minute);
