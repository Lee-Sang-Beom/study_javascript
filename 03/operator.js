'use strict';

function check()
{
    for (let i =0; i<10;i++)
    {
        console.log('oh..')
    }

    return true;
}


// 1. string concatenation
console.log('my'+' cat');
console.log('1'+2); // 숫자가 문자로
console.log(`string literals 1+2 = ${1 + 2}`); // backtic 사용. 변수값을 계산해 string로 포함해 문자열을 만듬

console.log('ellie\'s book'); // \n : 개행문자        \t : tab
console.log(`ellie's book`);

// 2. Numeric operatoers
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2**3);

// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter; // counter++;
    // ++counter : counter = counter+1; preIncrement = counter;
    // counter++ : preIncrement = counter; counter = counter+1;
console.log(`${counter},${preIncrement},${typeof counter},${typeof preIncrement}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x+=y;
console.log(x);


// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


// 6. logical operators : ||(or) &&(and) !(not)

const value1 = false;
const value2 = 4<2;
const value3 = !value1;

console.log(`or : ${value1 || value2 || check()}`);//check()와 같이 계산량이 많은건 최대한 맨 뒤에.
console.log(`and : ${value1 && value2 && check()}`); 
console.log(`not : ${value3}`);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion >> 타입을 변경해서 검사함
console.log(`lose : ${stringFive == numberFive}`); // 타입이 달라도 문자 안에있는 건 숫자니 같다고함
console.log(`lose : ${stringFive != numberFive}`);

// == strict equality, with type conversion >> 타입까지 철저히 검사
console.log(`strict : ${stringFive === numberFive}`);
console.log(`strict : ${stringFive !== numberFive}`);

// == object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // 각각 다른곳을 가리킴. false
console.log(ellie1 === ellie2); // 마찬가지 false
console.log(ellie1 == ellie3); // 같은 곳을 가리킴..!! true

// equality - puzzle

console.log(`시작!`);
console.log(0==false);
console.log(0===false); // 타입고려 시 x
console.log(''==false);
console.log(''===false);
console.log(null==undefined); //null과 undefined는 타입 미고려시 같은거로 추정..
console.log(null===undefined);

// 8. if, else if, else

const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome Ellie!');
}

else if(name === 'coder'){
    console.log('Welcome coder');
}

else {
    console.log('unknown!');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;

console.log(name === 'ellie'? 'yes' : 'no');

// 10. Switch

const browser = 'IE';
switch(browser) {
    case 'IS':
        console.log('unknown!');
        break;

    case 'IE':
        console.log('IE!');
        break;

    case 'Chrome':
    case 'Firefox':
        console.log('I love it!');
        break;

    default:
        break;
}

// 11. loop

let i = 3;
while (i>0)
{
    console.log(`while : ${i}`);
    i--;
}

do
{
    console.log(`do - while : ${i}`);
    i--;

}while(i>0)

for (let i =3; i>0; i-=2)
{
    console.log(`for : ${i}`);
}

// 12. escape

for (let i = 0 ; i<11; i++)
{
    if (i%2 === 0)
    {
        console.log(`even : ${i}`);
    }

    else{
        continue; // 이걸지워도됨
    }
    
}

for (let i = 0 ; i<11; i++)
{
    if (i === 8)
    {
        break;
    }

    console.log(`i<8: ${i}`);

    
}