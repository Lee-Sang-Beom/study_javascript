// reverse()는 배열 자체를 역순으로!
const arr = [1,2,3,4,5,10,11];
const result = arr.reverse();

// 얕은 복사처럼 작동된다.
/*

[
    11, 10, 5, 4,
     3,  2, 1
  ] [
    11, 10, 5, 4,
     3,  2, 1
  ]
  
*/
console.log(result, arr);