/*
    this는 객체를 가리키는 키워드, 즉 this는 객체.
    this는 함수를 호출하는 방법에 의해 결정된다.

    this는 호출한 놈
    호출한 놈이 없는 경우 기본값으로 window객체
    예외
     - 전역스코프에서 this는 window객체
     - 화살표 함수에서 this가 달라짐
     - strict mode는 this가 달라짐

*/


{
    let person1={
        name:'홍길동',
        age:20,
        hello: function(){
            setTimeout(function(){
                console.log(this);
                console.log(this.name);
                console.log(this.age);
    
                // settimeout 내 function의 this는 window객체. (내부적으로 그렇게 되어있다고함)
                // hello : function(){} 영역의 this는 person1
                // 따라서, settimeout의 this를 person1로 바인딩해주기위해서는 아래와 같은 방법을 사용
                // this에 특정 객체가 바인딩 된 함수가 반환 = 함수명.bind(this로 지정해줄 객체)
    
                // { name: '홍길동', age: 20, hello: [Function: hello] }
                // 홍길동
                // 20
            }.bind(this),1000);
        }
    }
    
    person1.hello();
    
}

// 이전까지 함수는 어떻게 호출되는지에 따라 자신의 this값을 정의했음
// 화살표함수는 자신을 포함하는 외부 스코프에서 this를 계승받는다.
// {
//     let person1={
//         name:'홍길동',
//         age:20,
//         hello: function(){
//             setTimeout(()=>{

//                 // 이 화살표함수를 포함하는 상위스코프 fhello:function(){ 여기 }의 this를 물려받음
//                 console.log(this);
//                 console.log(this.name);
//                 console.log(this.age); 
//             },1000);
//         }
//     }
    
//     person1.hello();
// }

// // strict 모드 (엄격모드) : 호출한 놈이 없을경우 기본값을 window로 하지않고 undefined로함
// {
//     // use strict;
//     console.log(this);
// }



// 화살표 함수를 사용하면 안되는경우
// 1. 객체 메서드를 선언할때 사용하면 안됨
// {
//     let person1 = {
//         name: 'John',
//         printThis:()=>{
//             // 화살표 함수는 상위 스코프의 this를 참조하므로, 이 경우 window가됨
//             console.log(this);
//         }
//     }

//     let person2 = {
//         name: 'John',
//         printThis:function(){
//             // 이 함수선언문은 this가 정상적으로 person2 : {name: 'John', printThis: ƒ}
//             console.log(this);
//         }
//     }

//     person1.printThis();
//     person2.printThis();
// }

// 화살표 함수를 사용하면 안되는경우
// 2. addEventListener 함수의 콜백함수에서 사용하면, this가 상위 컨텍스트를 가리ㅣㅋㅁ

// {
//     // ex)
//     let btn = document.querySelector('button');
//     button.addEventListener('click',()=>{
//         console.log(this === window); // true > 상위스코프이므로 btn에서, window로 this가 한칸 상위!
//         this.innerHTML = "CLICK"; // 불가!
//     });

//     button.addEventListener('click',function(){
//         console.log(this === window); // false > 정상적으로 해당 스코프에서 this를 가져오니 btn!
//         this.innerHTML = "CLICK"; // 가능!
//     });
// }