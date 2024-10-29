let mySet = new Set(); // 집합객체 생성

//여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

//원소 5제거
mySet.delete(5);

//원소를 하나씩 출력
for (let item of mySet) console.log(item);

// 소수점 아래 둘재짜리까지 출력
let x = 123.456;
console.log(x.toFixed(2));
