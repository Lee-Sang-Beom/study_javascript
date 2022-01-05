'use strict';

// 1. function

function printHello(message) // js에서는 따로 타입 지정 x
{
    console.log(message);
    console.log(`type : ${typeof message}`);
    return 0;
}

printHello('message');
printHello(1234);

// 2. 함수에 전달되는 parameter 
// premitive : 메모리에 value가 저장
// object : 메모리에 reference가 전달

function changeName(obj)
{
    obj.name = 'coder'; // 가리키는 곳의 name을 변경
    // objects는 함수 안에서 오브젝트값을 변경하면 그대로 메모리에 변경사항이 적용
}

const ellie = {name : 'ellie'} ;
changeName(ellie);
console.log(ellie.name);

// 3. Default parameters

function showMessage(message, from = 'unknown') // from 미전달 시, 디폴트값을 지정할 수 있음.
{
    // if(from === undefined) 
    // {
    //     from = 'unknown';
    // }
    console.log(`${message}, ${from}`);
}

showMessage('hello'); // from 미전달 시, undefine

// 4. rest parameters

function printall(...args) // 배열형태로 전달되는 방법 (... << dot이 3개!!!)
{
    for (let i =0;i<args.length;i++)
        console.log(`names : ${args[i]}`);

    // for (const arg of args)
    //     console.log(arg);

    // args.forEach((arg) => console.log(arg));
}

printall('dream','coding','ellie');


// 5. local scope (지역변수와 전역변수)

let globalMessage = 'global';

function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'helloes';
    }

    printAnother();
    
}
printMessage();


// 6. return value

function sum(a,b){
    return a+b;
}

//아래와 동일

//const sum = (a,b) => a+b;
console.clear();

console.log(`sum : ${sum(1,2)}`);

// 7. early return, early exit

function upgrade(user){ // 10이상일 떄 업그레이드 해주는 함수
    if(user.point <= 10)
    {
        return; // 조건이 안맞으면 빠르게 리턴해라
    }
    // if(user.point >= 10)
    // {
    //     //업그레이드해주는 부분. >> 
    // }
}

// 8. function expression

// function expression은 할당 이후가 되어야만 사용가능
// 보통 function에 대해서는, js엔진은 선언된 걸 제일 위로 올려줌
const print = function() {  // 함수 선언과 동시에 print에 할당해버림
    console.log('print');   // function문 옆에 아무 이름이 없음. anonymous function임.
                            // 이는 함수를 print에 할당한 형태
                            

}

print(); 
const printAgain = print;
printAgain(); // 이렇게도 사용가능
const sumagain = sum; // 마찬가지
console.log(sum(1,3)); 


// 9. Callbac function
// 상황에 따라 전달된 함수를 사용할 수 있음. 이런것을 Callback function이라 함
function randomQuiz(answer,printYes,printNo) // 정답, 정답이면 호출할 함수, 오답이면 호출할 함수
{
    if(answer==='love you'){
        printYes();
    }

    else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes');
}
//named function : 디버깅 할 때, 재귀할 때 사용하기도 함
const printNo = function print(){
    console.log('no');
}

randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);


// 10. arrow function
const simplePrint = () => console.log('simplePrint');
// const simplePrint = function(){
//     console.log('simplePrint');
// }

const add = (a,b) => a+b; // a+b을 리턴한다는 뜻임
// const add = (a,b) =>{
//     return a+b;
// }
console.log(add(31,5));


// 11. IIFE : 선언함과 동시에 호출

// function hello()
// {
//     console.log('iife'); 
// }

// hello();

(function hello()
{
    console.log('iife'); 
})();


function calculate(command, a, b)
{
    switch(command)
    {
        case 'add':
            return a+b;
            break;

        case 'sub':
            return a-b;
            break;

        case 'mul':
            return a*b;
            break;
        case 'div':
            return a/b;
            break;
        default:
            break;
    }
}

console.log(calculate('div',2444,3));