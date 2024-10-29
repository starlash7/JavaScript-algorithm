// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

console.log(input);

/*
input.txt
123
456
789 1000

출력예시
'123', '456', '789 1000;
*/
