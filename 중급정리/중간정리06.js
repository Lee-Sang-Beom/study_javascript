const arr = [1,5,3,4,2];

// arr.sort();
// console.log(arr); // 배열자체가 변경됨

// arr.sort((a,b)=>{ // 내부로직에서 a-b를 b-a라 하면, 역방향 reverse가 됨
//     return b-a;
// })
// console.log(arr);

// let num = 0;
// arr.forEach((value)=>{
//     num += value;
// })
// console.log(num);

// const result = arr.reduce((prev,curr) => {
//     return prev + curr;
// },0)

// console.log(result);

let userList = [
    {name : 'mike', age : 30},
    {name : 'tom', age : 10},
    {name : 'jane', age : 27},
    {name : 'harry', age : 42},
    {name : 'steve', age : 60},
]

// let result = userList.reduce((prev, cur)=>{
//     if(cur.age > 28)
//     {
//         prev.push(cur.name); // 맨처음 []부터 시작해서 age가 28이상이면 계속 cur의 이름을 집어넣음
//     }

//     return prev;

// },[])

// let result = userList.reduce((prev, cur)=>{
    
//     return prev+cur.age; // 나이 다 더함

// },0)

let result = userList.reduce((prev, cur)=>{
    
    if(cur.name.length === 3)
        prev.push(cur.name); // 이름이 3자리이면 이름만 넣어준다. 이전배열에

    return prev
},[])

console.log(result);