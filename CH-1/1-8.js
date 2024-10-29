//Array.prototype.reduce()
//배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 떄 reduce()를 사용

let data = [5, 2, 9, 8, 4];

// minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); //2

// 원소의 합계 구하기 예제
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28
