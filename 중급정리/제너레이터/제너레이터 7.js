
function* func1(){
    yield 'w';
    yield 'o';
    yield 'r';
    yield 'l';
    yield 'd';
}

/*
해당 함수에서, yield* 사용하고, 다른 제너레이터 함수를 호출할 수 있음
*/
function* func2(){
    yield 'hello, ';
    yield* func1();
    yield '!';

    return "finish!";
}

// 구조분해 할당 시, [for of]와 마찬가지로 done이 true가 될때까지 값을 펼쳐줌
// console.log(...func2());

const a = func2();
console.log(a.next());

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

// return 만남. value :finish, done: true
console.log(a.next());

// 종료후 value:undefined, done:true
console.log(a.next());