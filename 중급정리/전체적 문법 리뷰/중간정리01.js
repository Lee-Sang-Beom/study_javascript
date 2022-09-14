'use strict';

// 변수와 호이스팅과 TDZ 


let a = 'age';

const user ={
    name : 'mike',
    [a] : 30, // 계산된 프로퍼티 age : 30; 
    // 즉, a에 해당한 값인 age라는 변수에 30이 들어간거라고 간단히 이해
    [1+4] : 5, // 키 5: 값 5
    ["안녕"+"하세요"] : "hello" // 안녕하세요 : 'hello'
}
console.log(user); // name은 mike이고, age는 30


//실용적 예제
// function make(key,value)
// {
//     return {
//         [key] : value
//     };
// }

// const obj = make("나이",33);



// object method
const cloneUser01 = {}
Object.assign(cloneUser01, user); // 오브젝트의 복사방법 1

const cloneUser02 = Object.assign({}, user); // 오브젝트의 복사방법 2 

console.log(cloneUser01);
console.log(cloneUser02);

console.log(Object.keys(user)); // 키를 배열로 반환
console.log(Object.values(user)); // 값을 배열로 반환
console.log(Object.entries(user)); // 키, 값 둘 다를 배열로 반환


let arr = [
    ['mon', '월'],
    ['tue','화']
]

const result = Object.fromEntries(arr); // 배열을 새로운 객체로
console.log(result); 

