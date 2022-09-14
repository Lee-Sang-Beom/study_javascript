'use strict'

// symbol형. 이름은 같아도 모두 다른존재

const a = Symbol(); // 유일한 식별자를 만들 때 사용 : new를 붙이지 않는다.
const b = Symbol();

console.log(a==b, a===b); // 즉, Symbol은 유일성을 보장

const id = Symbol('id'); 
const id2 = Symbol('id');
// 만들 때 설명을 붙인다는 의미에서, 문자열을 전달할 수 있다. 생성에 어떤 의미도 없고 디버깅용이다.

console.log(id==id2, id===id2);

const id3 = Symbol('id');
const user={
    name : 'Mike', age : 30, [id] : 'myid'
}

console.log(user);
console.log("심볼 가려짐 " + Object.keys(user)); // values, entries 출력 시, 키가 심볼형인건 출력하지 않는다.

const showName = Symbol('show name');
user[showName] = function(){
    console.log(`심볼 보임!! my name is ${this.name}`);
}
user[showName](); // 이렇게하면, 심볼을 사용한 함수를 호출한 것임. 심볼은 고유하므로, 절대 충돌할일없음

// for (let i in user)
// {
//     console.log(`${i} : ${user.i}`);
// }



// 만약 같은객체를 가리켜야할때..?
// symbol 함수는 매번 다른 심볼을 생성하나, symbol.for 메소드는 하나를 생성한 뒤, 키를 통해 같은 symbol 공유가능


const id4 = Symbol.for('id2');
const id5 = Symbol.for('id2');
console.log(id4===id5);
console.log(Symbol.keyFor(id4)); // 생성하면서 넣었던 문자열 출력
console.log(id5.description); // 뒤에 .description 붙이면 마찬가지

//숨겨진 심볼 키 보는방법은 이와같음
console.log(Object.getOwnPropertySymbols(user)); // user의 심볼출력
console.log('심볼 보임 ', Reflect.ownKeys(user)); // 심볼포함 모든것 출력