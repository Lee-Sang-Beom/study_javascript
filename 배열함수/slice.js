
// slice()는 배열에서 원래 배열의 영향없이 잘라옴
const arr= [1,2,3,4,5];

// 2 <= index < 4를 뽑아옴
const result= arr.slice(2,4);

// result:3,4 | arr : 1,2,3,4,5
console.log(result, arr);