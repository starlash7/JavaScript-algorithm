/*
입력: A시 B분
걸리는시간: C분
-> 입력으로 주어진 시각을 "분"의 형태로 바꾸기
"분"이 주어졌을때, 시각을 알려주는 기능을 작성하기
*/

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c; //분의 형태로 바꾸기
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
