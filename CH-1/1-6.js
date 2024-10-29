/*
초기문이 존재한다면 초기문이 먼저 실행
조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료
블록 내부 코드가 실행된 뒤에 증감문이 실행
*/

for (초기문; 조건문; 증감문) {
  //statements
}

// 1부터 100까지의 합 계산
let summary = 0;
for (let i = 1; i <= 100; i++) {
  summary += i;
}
console.log(summary);