// function showName(name){
//     console.log(arguments.length); // 함수로 넘어온 모든 인수에 접근 가능한 argument 키워드
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }

// function showName(...names){ // 넘어온 인수는 여기서 배열이 된다.
//     console.log(names.length); 
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]);
// }

// function add(...numbers){
    
//     //numbers.forEach((num) => result += num);
//     result = numbers.reduce((prev,curr) => {
//         return prev+curr;
//     },0)
//     console.log(result);
// }


// showName('Mike', 'Tom', 'Jane');
// add(1,2,3,4,5,6,7,8,9);


// function User(name, age, ...skills){
//     this.name = name;
//     this.age = age;
//     this.skills = skills; // 뒤에 스킬은 사람마다 다양하게 가지므로, 배열로
// }

// const user1 = new User('Mike',30,'html','css');
// const user2 = new User('Tom',20,'JS','React');
// const user3 = new User('Jane',10,'English');

// console.log(user1);
// console.log(user2);
// console.log(user3);

/// == 전개구문


let arr1 = [1,2,3];
let arr2 = [4,5,6];


// arr2.reverse().forEach((num) => {
//     arr1.unshift(num);
// })

// arr1 = [...arr2, ...arr1]; 위와 동일코드 

// let result = [0,...arr1, ...arr2,7]; // 배열 속 배열이 아닌, 배열 속 123 456이 들어감
// console.log(result);


// let user = {name:'mike',age:30};
// let user2 = {...user}
// user2.name = 'hello';

// console.log(user, user2); // 본래 오브젝트인 user에 영향 x



let user= {name:'mike'};
let info = {age:30};
let fe = ['js','react'];
let lang = ['korean','english'];

user = {
    ...user,
    ...info,
    skills : [
        ...fe,
        ...lang
    ]
};

console.log(user);