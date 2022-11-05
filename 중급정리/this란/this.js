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

{
    /*
  call과 apply는 함수를 호출하는 함수이다. 
  그러나 그냥 실행하는 것이 아니라 첫 번째 인자에 this로 setting하고 싶은 객체를 넘겨주어 this를 바꾸고나서 실행한다.
  
  첫 번째 실행인 say("soeul")의 경우는 say가 실행 될 때 this에 아무런 setting이 되어있지 않으므로 this는 window객체이다.
  
  두 번째 실행인 say.call(obj, "seoul");의 경우와 세 번째 실행인 say.apply(obj, "seoul")은
  this를 obj로 변경시켰으므로 원하는 값이 나온다.
  
  call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 say에 필요한 parameter를 입력하는 방식이다.
  call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.
  */
  
    const obj = { name: "tom" };
    const say = function (city) {
      console.log(`hello ${this.name}, this is ${city}`);
    };
  
    // say("seoul");
    // say.call(obj, "seoul");
    // say.apply(obj, ["seoul"]);
  
    /*
   bind함수는 call, apply와 다른 점은 함수를 실행하지 않는다. 대신 bound함수를 리턴한다. 
   이 bound함수(boundSay)는 이제부터 this를 obj로 갖고 있기 때문에 나중에 사용해도 된다. 
   bind에 사용하는 나머지 rest 파라미터는 call과 apply와 동일하다. 
   */
    const boundSay = say.bind(obj);
    boundSay("busan");
  }
  
  // {
  //   const obj = { name: "tom" };
  
  //   function foo(a, b, c) {
  //     console.log(a + b + c);
  //     console.log(this);
  //   };
    
  //   foo(1, 2, 3); // 6
  //   foo.call(obj, 1, 2, 3); // 6
  //   foo.apply(obj, [1, 2, 3]); // 6
  // }
  