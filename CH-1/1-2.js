let answer = "";

/*
여러 출력 결과를 한 줄에 하나씩 출력할때 매번 console.log를 실행하지 않고,
하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행됨
*/

for (let i = 1; i <= 100; i++) {
  answer += i + "\n";
}

console.log(answer);
