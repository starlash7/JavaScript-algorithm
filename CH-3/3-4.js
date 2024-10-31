/*
주사위 3개를 던진다
눈금 세개가 모두 같으면 -> 10000 +(같은눈금) x 1000원
눈금 두개가 같으면 -> 1000+(같은눈금) x 100원
눈금이 모두 다르면 -> (가장큰눈금) x 100원
*/
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[0].split(" ")[2]);

// 세 개의 수가 모두 같은경우
if (a == b && b == c) console.log(10000 + a * 1000);
// 세 개의 수가 전부 같지는 않지만, 두 개의 수가 같은 경우
else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + a * 100);
// 세 개의 수가 전부 다른 경우
else console.log(Math.max(a, b, c) * 100);
