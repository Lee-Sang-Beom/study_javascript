'use strict';

// 1. array - 배열을 만드는 두가지방법
const arr1 = new Array();
const arr2 = [1,2];

// 2. 요소접근
const fruits = ['사과','배'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// 3.Looping

for (let i =0; i<fruits.length;i++)
    console.log(`배열 내용 : ${fruits[i]}`);

//배열은 i of fruits 사용 > for of
for (let i of fruits)
    console.log(`배열 내용 : ${i}`);

//forEach 

fruits.forEach(function(fruit, index, array) { //value, index, array
    console.log(fruit, index);
});

//fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));
// 배열 안의 value들마다 내가 전달한 함수를 출력

// 4. addtion, delect, copy

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);
arr.push(5);
console.log(arr);

arr.unshift(-1,0); // 맨 앞에서부터 데이터를 집어넣음
console.log(arr);
arr.shift(); // 맨 앞 데이터가 증발
arr.shift();
console.log(arr); 

//shift와 unshift는 세상 느린 동작.



arr.splice(1,2); //시작 인덱스번호부터, 몇 개의 데이터 삭제
                 // arr.splice(1) 은 1의 인덱스부터 끝까지 삭제
console.log(arr); //[1 2 3 4 5] >> [1 x x 4 5]

arr.splice(0,1, 1,2,3,'boom'); // 0인덱스부터 1개 지우고 뒤에 1,2,3은 그자리에 추가해줘
console.log(arr);


const fruits2 = ['바나나','메론'];
const fruits3 = fruits2.concat(fruits); // 과일배열2에 배열1내용 추가
console.log(fruits3);


// 5. 탐색

console.log(fruits3);
console.log(fruits3.indexOf('바나나')); // 바나나는 몇번째인덱스?
                                        // 해당하는 값 없으면 -1출력

console.log(fruits3.includes('바나나')); // 바나나는 fruits3에 존재하는가? t/f
fruits3.push('바나나');

console.log(fruits3);
console.log(fruits3.indexOf('바나나')); //제일앞에있는바나나인덱스
console.log(fruits3.lastIndexOf('바나나')); // 제일뒤에있는바나나인덱스




