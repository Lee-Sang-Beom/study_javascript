'use strict';


// 생성자에 대한 내용


function User(name, age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name); // this는 이 함수 앞에 .을 붙여 실행한 오브젝트 > user5
    }
}

let user5 = new User('Han', 40);
user5.sayName();