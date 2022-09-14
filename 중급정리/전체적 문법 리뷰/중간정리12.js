'use strict'
// Generator : 함수의 실행을 중간에 멈췄다 재개할 수 있는 기능
// 함수명 앞에 *, 내부에 yield 키워드 사용 : yield에서 함수 멈춤

// function* fn(){
//     try{
//         console.log(1);
//         yield 1;
//         console.log(2);
//         yield 2;
//         console.log(3);
//         console.log(4);
//         yield 3;
//         return "finish!";
//     } catch(error){
//         console.log(error);
//     }
    
// }

// const a = fn(); // 제네레이터 객체가 반환됨
// console.log("아직 시작안함");
// console.log(a.next()); // 가장 가까운 yield문을 만나기전까지 실행한다. 이후 데이터 객체를 반환 
// // >> 그래서 log로 찍은 1이 나옴. 
// // 반환된 값은 {value : 1, done : false} 인데, value는 yield 키워드 우측값이고,
// // done은 이름 그대로 함수가 끝났는지 확인 > 끝나면 true임
// console.log(a.next()); 

// console.log(a.throw("오류!")); // catch문에게 에러던짐. value : undefined, done : true
// console.log(a.next()); 
// console.log(a.return("중간끝냄")); // 중간에 리턴메소드 호출 시, 그 즉시 done이 true가 됨. 이후의 모든 value는 undefined

// console.log(a.next()); // 리턴문에 의해 value는 finish, done은 true(함수끝!)


            // ============================================== // 
// generator는 iterable : 반복가능하다.

// iterable
// - Symbol.iterator 메서드가 있다.
// - Symbol.iterator 는 iterator 를 반환해야 한다.

// iterator
// - next 메서드를 가진다.
// - next 메서드는 value 와 done 속성을 가진 객체를 반환한다.
// - 작업이 끝나면 done 은 true 가 된다.


// const arr = [1,2,3,4,5];
// const it = arr[Symbol.iterator]();
//   // 배열은 symbol.iterator 메소드를 가지고있고,
//   // 이 메소드가 반환하는 값이 iterator임.
//   // 즉, 배열은 반복가능한
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next()); // undefine이 되면서 true가 됨



// function* fn(){
//     yield 4;
//     yield 5;
//     yield 6;

// }

// const a = fn();
// console.log(a[Symbol.iterator]() === a); //제네레이터의 symbol.iterator을 실행한 값이 자기자신
// // 즉, 제네레이터는 iterable객체
// // Generator는 이 제너레이터 함수의 반환으로 iterable 프로토콜과 iterator 프로토콜을 따르는 객체이다.
// // 이 때, 제너레이터의 이터러블에서 반환하는 이터레이터는 자기 자신이다

// for(let i of a){
//     console.log(i); // 반환된 iterator에 next()을 반복하면서. done이 true가 될때까지 반복
// }

const str = 'hello';
const xx = str[Symbol.iterator]();
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next());
// console.log(xx.next()); // 문자열도됨

for(let i of xx){
    console.log(i);
}

// function *fn(){
//     const num1 = yield "1번째 입력";
//     console.log(num1);

//     const num2 = yield "2번째 입력";
//     console.log(num2);

//     return num1+num2;
// }

// const a = fn();
// console.log(a.next()); // yield1에서 멈춤. 입력하래
// console.log(a.next(1)); // 입력하래서 입력함. generate 는 외부로부터 숫자를 입력받을수도있다.
// // 여기서, 2번째입력의 yield만남. 담에 입력할때 값 넣어줌
// console.log(a.next(2)); // yield2 이후에는 yield가 없어서 done



// function* fn2(){ // 제네레이터는 값을 미리 만들지 x. 메모리 관리측면에서 효율적
//     let index = 0;
//     while(true){
//         yield index++;
//     }
// }

// const ab = fn2();

// console.log(ab.next());
// console.log(ab.next());
// console.log(ab.next());
// console.log(ab.next());




// yield*
// gen2()에서, yield* 하고 gen1()을 호출. 즉 다른 제네레이터 함수를 호출

function* gen1(){ 
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d"; 
}

let arr1 = ['w','o','r','l','d'];
let arr2 = arr1[Symbol.iterator]();

function* gen2(){ 
    yield "hello,";
    //yield* gen1();
    yield* arr2;
    yield "!";
}

console.log(...gen2());
// for (let i of gen2()){
//     console.log(i);
// }

// 구조분해 할당 for (i of arr) 와 마찬가지로, done이 true가 될때까지 값을 펼쳐주는 역할
// yield* [제네레이터 객체 뿐 아니라 반복가능한 객체 모두 올수있음]