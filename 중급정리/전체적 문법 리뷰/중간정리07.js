'use strict'

// Destructuring Assignment 구조분해할당

// let [x,y] = [1,2];

// console.log(x);
// console.log(y);

// let users = ['mike','tom','jane'];
// let [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3); 

// let str = 'Mike-Tom-Jane';
// let [user1, user2, user3] = str.split('-',3);
// console.log(user1);
// console.log(user2);
// console.log(user3);

// let [a,b,c] = [1,2]; // c : undefined

// let [a=3, b=4, c=5] = [1,2]; // 기본값을 부여
// console.log(a);


// let [user1, , user2] = ['mike','tom','jane']; // 건너뛰기 쌉가능
// console.log(user1);
// console.log(user2);



// 객체 구조 분해
// let user = {name : 'mike', age : 30};
// let {name, age} = user;
// // let name = user.name; let age = user.age; 와 같음

// console.log(name);
// console.log(age);

// let {name : userName, age : userAge} = user; // 이렇게 새로운 변수 이름으로 할당 가능
// console.log(userName);
// console.log(userAge);


let user = {name : 'mike', age : 30, gender : 'femaletttttttttttttttttttttttttt'};
let {name, age, gender = 'male'} = user; // gender 아무것도없으면 undefined, 기본값넣어줄수있음

console.log(name, age, gender);
