'use strict';
{
    let name = "ellie";
    console.log(name);
    
    name = "hello";
    console.log(name);
}

// number
const count = 17; // Inmutable (변경 불가능한 -> 보안, 실수방지)
const size = 17.1
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// bigint
const big = 1231412412412561214152641365121335n; // 마지막에 n붙이면 bigint
console.log(`value : ${big}, type : ${typeof big}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

console.log(`value : ${brendan}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; 
// template literals : backtic 기호를 쓰고 달러사인과 기호를 이용하면, 변수의 값이 붙여져나옴
console.log(`value : ${helloBob}, type : ${typeof helloBob}`); 
// backtic을 이용하면 안에서 쓰여진 스페이싱과 문자열이 그대로 나오므로 간편
console.log('value : ' + helloBob + ', type : ' + typeof helloBob);

//boolean
// false : 0, null, undefined, NaN, ''은 false로 간주 
// true : 다른 모든 것

const canRead = true;
const test = 3<1;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null : 내가 너에게 텅텅비었다고 확실히 할당하여 지정
let nothing = null;
console.log(`value : ${null}, type : ${typeof null}`);

// undefine : 선언했지만 아직 아무것도 정해지지 x
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol : 고유 식별자가 필요하거나,
         // 동시다발적으로 일어날 수 있는 상황에서 우선순위를 줄 때 고유한 식별자가 필요할 때 사용
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2);

const sym3 = Symbol.for('id');
const sym4 = Symbol.for('id');
console.log(sym3 === sym4);

console.log(`value : ${sym1.description}, type : ${typeof sym1.description}`);
// 위는 출력 시, 문자열로 변환하여 출력해야함.


// Dynamic typing : 동적타입의 언어(어떤 타입인지 같이 선언하지 않아도, 프로그램 실행 중 결정)
let text = 'hello';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);

text = 1;
console.log(`value : ${text}, type : ${typeof text}`);

text = '7'+5; // string으로 변화
console.log(`value : ${text}, type : ${typeof text}`);

text = '8'/'2'; // 숫자들을 나누는 구나 라고 해석
console.log(`value : ${text}, type : ${typeof text}`);


// Object : 물건과 물체를 대표할 수 있는 박스형태
// 아래는 const로 지정되어있어, 한 번 할당된 오브젝트 자체는 다른 걸로 변경 불가
// ellie가 가리키는 박스(포인터)는 잠겨있지만, 오브젝트 안의 name, age가 가리키는 건 변경가능
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;
console.log(`name : ${ellie.name}, age : ${ellie.age}`);

