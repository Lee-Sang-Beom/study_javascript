'use strict';

// 1. object란? Literals and property

// primitive type에는 값을 하나만 넣을 수 있음
// 인자가 많아지면 추가해야 할 것들이 많아짐
const name = 'ellie';
const age = 4;
// print(name, age); << 함수 전달 시, 인자가 많아지면 불편해지겠지?
// function print(name, age)
// {
//     console.log(name, age);
// } 

const ellie = {name : 'ellie', age : 4}; // 오브젝트
function print(person)
{
    console.log(person.name, person.age);
}

print(ellie); //오브젝트 사용 시, ellie만 전달하면 됨.

const obj1 = {}; //오브젝트 만드는 방법 1 : object literal
const obj2 = new Object(); // 오브젝트를 만드는 방법 2 : object constructor

ellie.hasJob = true; // 미친;;; 동적으로 추가가 이렇게 가능?
console.log(ellie.hasJob); 

delete ellie.hasJob; // 삭제도 되네 ㅋㅋ
console.log(ellie.hasJob);  

// 정리 : object는 {key : value} 의 집합이다.



// 2. computed properties (계산된 프로퍼티)
console.log(ellie.name);
console.log(ellie['name']); // 배열 형태로 접근가능
// 프로퍼티는 string 타입으로 해야함. ['name'] : o [name] : x

ellie['hasjob'] = true;
console.log(ellie.hasjob);

function printname(name, key){
    console.log(name.key); // 오브젝트의 키에 상응하는 value를 출력
                           // 이건 undefined

    console.log(name[key]); // 이건 정상출력
}
printname(ellie, 'name');

// 정리 object.key (우리가 정확하게 뭘 출력할 지 알때사용)
//     object[key] (우리가 정확하게 뭘 출력할 지 모를때, 런 타임에서 결정될 때 사용)



// 3. property value shorthand

const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};
const person4 = makePerson('ellie',30);
console.log(person4);
function makePerson(name, age)
{
    //return { name : name, age : age };
    return {name, age}; // 위와 동일
}


// 4. constructor function
const person5 = new MakePerson('상범',24);
function MakePerson(name, age)
{
    // 이런식으로도 작성가능
    // 여기서 생략된건 return {} 에서의 {}이며,
    // 여기서 이 {}을 대체해준건 this이다.
    // 따라서 {} = this
    this.name = name;
    this.age = age;
    //return this가 자동생략됨
}
console.log(person5);


// 5. operator
console.log('name' in person5); // name이라는 키가 ellie 오브젝트 안에 있는가?
console.log('job' in person5);
console.log(person5.job); // 정의하지 않은 키를 출력하려 하면 undefined


//6 for..in vs for..of

console.clear();
for (let i in ellie) { // 오브젝트인 ellie가 가지는 키들이 블럭을 돌때마다 i라는 지역변수에 할당
    console.log(i);
}

const array = [1,2,3,4,5];
for (let i of array) // 배열인 array가 가지는 키들이 블럭을 돌때마다 i라는 지역변수에 할당
{
    console.log(i);
}


// 7. cloning

const user = {name : 'ellie', age : '20'};
const user2 = user;

user2.name = 'hello'; //user2는 user가 가리키는 곳을 똑같이 가리킴.
                      //같이 가리키는 걸 바꾸면.. user값도 바뀌겠지???
console.log(user2, user);

// 값의 순수한 복사에는 2개의 방법이 있음

// 방법1
const user3 = {};
for (let key in user)
{
    user3[key] = user[key]; // 오브젝트의 키의 값이 user3가 가리키는 곳으로 복사된거임
}

// 방법2

const user4 = {}
Object.assign(user4, user);
      //assign<T,U> {타겟(값을 새로만들 오브젝트) : t, 근원소스 : u}


// 혹은
const user5 = Object.assign({},user);
console.log(user3, user4, user5); 


// another ex)

const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};

//const mixed = Object.assign({},fruit1,fruit2);
const mixed = {};
Object.assign(mixed,fruit1,fruit2);

console.log(mixed.color); // blue (뒤에 나오는 애일수록 값을 계속 덮어씌움!!!)
console.log(mixed.size); // big