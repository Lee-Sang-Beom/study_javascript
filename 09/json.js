'use strict';

// 1. Object를 Json으로 직렬화해서 변환할지
// stringify(obj) object를 스트링으로 
// 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다

let json = JSON.stringify(true); // 오브젝트를 json으로 변환
console.log(json);

json = JSON.stringify(['apple','banana']); // 배열 타입으로 보이면서, '' 가 json의 규격사항인 ""fh qusghksehla
console.log(json);


const rabbit = { //토끼라는 오브젝트 생성
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    //symbol : Symbol('id'), // 자바스크립트만의 자체에 있는 특별한 데이터인 심볼도 미포함..
    jump : () => console.log(`${this.name} can jump!`) // 키와 value의 쌍이 아니라 전달되지않음

};

json = JSON.stringify(rabbit);
console.log(json); // 함수는 오브젝트에 있는 데이터가 아니기때문에, 함수는 제외됨

json = JSON.stringify(rabbit, ["name", "color"]); //내가 토끼오브젝트에서 이름과 색깔만 전달하고싶으면 이렇게.
console.log(json);


json = JSON.stringify(rabbit, (key, value) => { // 전달할때 세밀하게 설정하는 방법이야

    console.log(`key : ${key}, value : ${value}`); // 내가 전달하려는 키와 value 출력
    // 함수도 출력됨. 내가 전달하려는 거니까 출력은하는데, 실상 출력되지는 않지..

                                                   
    //return value; // 모든 키와 value가 콜백함수에 전달됨.
    return key === 'name' ? 'ellie' : value; 
    // 만약 키가 name인 사이클이면, 반환을 ellie이라는 value로 설정해주어서 전달해줄래,
    // 아니면 원래 value 사용 >>> 세밀한 통제임    

}); //콜백함수사용. 제일 처음으로 전달되는 것은 토끼라는 오브젝트를 싸고있는 최상위 요소

console.log(json);





// 
// 2. Json을 Object로 직렬화 해제해서 string을 다시 오브젝트로 변환

json = JSON.stringify(rabbit); //rabbit 오브젝트를 json으로 변환
console.log(json);
const obj =JSON.parse(json); // json으로부터 오브젝트를 만듬
console.log(obj);

rabbit.jump(); //오브젝트에서 정의한 함수
//obj.jump(); // 다시 json으로부터 오브젝트를 만든것은 함수가 없음
              // object 인 rabbit을 json으로 변환할때는 데이터는 포함되나, 함수가 전혀포함되지 않았기때문

console.log(rabbit.birthDate.getDate()); // date안에 존재하는 api인 getDate()
// console.log(obj.birthDate.getDate()); 
// json으로받은 obj의 getDate() 사용 시, 안 됨
// 문자열로 받아오므로. date가 아닌 string.getDate()을 하려했어서 오류
// 위와같은 문자열문제때문에 콜백함수를 사용가능

const obj2 = JSON.parse(json, (key,value) => {
    return key === 'birthDate' ? new Date(value): value;
});

console.log('와우!' + obj2.birthDate.getDate()); 

        