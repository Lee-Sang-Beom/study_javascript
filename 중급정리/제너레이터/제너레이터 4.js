/*
 제너레이터는 iterable하고, iterator이다.
 
 1) iterable : 반복이 가능하다는 의미
 - symbol.iterator 메소드가 구현되어 있다.
 - symbol.iterator는 메소드를 호출한 결과로서 iterator를 반환해야 한다.

 2) iterator : symbol.iterator가 반환한 값
 - next 메소드를 가진다.
 - next 메소드는 value와 done 속성을 가진 객체를 반환한다
 - 작업이 끝나면 done은 true가 된다.

 따라서, 제너레이터는 이 두개를 가진다.
*/

function* fn(){
    yield 4;
    yield 5;

}

const a = fn();

/* 
 제너레이터 객체 a 내에 
 symbol.iterator를 메소드를 실행한 것이 자기자신이므로, 
 제너레이터는 iterable 객체라는 것 
*/
console.log(a[Symbol.iterator]());
console.log(a[Symbol.iterator]()===a);

// for of 문이 실행되면, 이렇게 symbol.iterator를 호출하고,
// 반환된 iterator에 꼐속 next()를 실행하며 done이 true가 될때까지 반복
for (let i of a){
    console.log(i);
}


//문자열도 iterator
const str="hello";

console.log(str[Symbol.iterator]());

// symbol.iteratro가 반환한 값은 iterator고 이건 for of를 돌면서 next() 호출
const xx = str[Symbol.iterator]();

for (let i of xx){
    console.log(i);
}

//배열도 iterator
const arr=[1,2,3,4,5];

console.log(arr[Symbol.iterator]());
const arr2 = arr[Symbol.iterator]();

for (let i of arr2){
    console.log(i);
}
