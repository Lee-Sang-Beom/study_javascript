let arr = [1,2,3,4,5];

//arr.splice(1,2); // 1번째 인덱스에서 2개지워라
console.log(arr); // [1,4,5]

//arr.splice(1,3,100,200,300,400); // 1번째 인덱스에서 3개 지우고, 지운 자리에 100, 200 추가
//console.log(arr); //[1 100 200 300 400 5]

//let result = arr.splice(1,2);
//console.log(arr, result); // 위에서 삭제한 2,3으로 별도의 배열 만듦 [1,4,5][2,3]

//result = arr.slice(1,4);
//console.log(arr,result); // arr은 그대로하고, result는 자른걸로 새로 생성

//let arr2 = [6,7];
//let arr3 = arr.concat(arr2); // 합친 새 배열 반환
//console.log(arr3); // [1~7]

// arr.forEach((value, index, arr) => console.log(`value : ${value}, index : ${index}`));
// 첫 파라미터는 값, 2번째는 인덱스, 3번째는 해당 배열

// arr2 = [1,2,3,2,1]
// console.log(arr2.indexOf(1)); // 앞에서부터 1이 있는 위치 확인하고 인덱스 반환
// console.log(arr2.lastIndexOf(1)); // 뒤에서부터 ...

// console.log(arr.includes(2)); // 포함되나?
// console.log(arr.includes(8));


// const result = arr.find((item)=>{
//     return item % 2===0; // 짝수만 찾는다.
//     // 리턴값이 true일 때 멈추고. 바로 해당 요소를 알려준다
// })
// console.log(result);

// let userList=[{name : 'mike', age : 30}, {name : 'jane', age : 20}];

// const result = userList.find((user) => {
//     if(user.age < 21){
//         return true;
//     }
//     else{
//         return false;
//     }
// }) // 마찬가지로 첫번째 true값만 찾고 반환한다. 없으면 undefined반환

// console.log(result);



// filter : 만족하는 모든요소를 배열로 반환
// const result = arr.filter((value) => {
//     return (value %2 ===0);
// })
// console.log('flliter : ', result);


// console.log(arr.reverse(), arr); // 역순재정렬. 둘다변했넹..


// map : 특정기능 수행한, 배열 반환
// let newarr = arr.map((value) => {
//     return value*2;
// })
// console.log('newarr. map하여 value x 2 : ', newarr);


// const str1 = arr.join(', '); // 인자로 전달한 문자를 기준으로 하여 문자열 생성
// const str2 = str1.split(', ',4); // 배열을 만들거임, 첫번째 인자는 구분자 ','를 기준으로 배열요소를 반환받고, 다음인자는 몇개를 가져올건지

// console.log('str1 : ', str1);
// console.log('str2 : ', str2);
// console.log(Array.isArray(str1), Array.isArray(str2)); // 뭐가 배열이니?