// splice()는 index a부터 b개의 원소를 삭제하고 반환한다.
const arr = [1,2,3,4,5,6];

// 실제 arr은 요소가 빠짐
const result = arr.splice(2,3);

// result: 3,4,5 | arr : 1,2,6
console.log(result, arr);