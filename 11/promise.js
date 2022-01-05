'use strict';

// promise란?
// 내가 언제 유저의 데이터를 받을 진 모르겠지만 약속한다.
// 이 promise라는 오브젝트를 가지고 있으면, 여기 콜백함수만 등록하면, 유저 데이터가 준비되는대로
// 네가 파라미터로 넣어준 함수(콜백함수)를 내가 불러줄게! 



// promise : js에서 제공하는, 비동기를 간단히 처리할 수 있도록 도와주는 오브젝트
// 정해진 장시간 기능 수행 후, 정상 수행 시 성공메시지와 처리된 결과값 전달
// 기능 수행 중 문제 발생 시, 에러전달
// promise는 비동기적 수행을 할 때 콜백함수 대신 유용하게 쓰임
// 두가지만 포인트를 잡자
// 1) state(상태 : 기능수행 중인지, 기능수행이 끝난 상태인지, 에러인지 확인)
// 2) producer(데이터를 제공하는 사람)와 consumer(데이터를 소비하는 사람) 이해

// promise 재정리
// 1) state : 프로미스가 만들어져 지정한 상태가 수행중일 때는 pending 상태. 
    // -> operaton 상태를 성공완료 시, fulfilled : 성공
    // -> 실패 시 rejected : 실패

// 2) producer : 원하는 기능을 수행해서, 해당하는 데이터를 만들어내는 producer (promise object)
   // consumer : 원하는 데이터를 소비한다.

//==================================================================//



// 콜백함수 : 함수는 오브젝트로, 다른함수의 인자로 쓰일 수 있다. 인자로 넘겨지는 함수가 콜백함수
// 간단히 말해서, 콜백은 다른함수가 실행을 끝난 뒤 실행되는 call back 되는 함수
// 매개변수로 넘겨받은 함수는 일단 넘겨받고, 때가 되면 나중에 호출(called back)한다는 것이 콜백함수의 개념이다.





// 1. 원하는 기능을 비동기적으로 수행하는 promise 오브젝트 만들기
const promise = new Promise((resolve, reject) => {
   // 생성자에 resolve, reject있음.
   // 기능을 정상수행해서, 마지막에 최종데이터를 전달하는 resolve 콜백함수
   // 기능 수행 중 문제가 생기면 호출할 함수인 reject

   // 동기적수행시, 시간이오래걸리는 작업이 있다면 다음라인은 실행x
   // 그렇기에 heavy한 코드는 비동기적으로(promise)

   console.log('doing something');
   // promise를 만드는순 바로위의 excu 콜백함수가 바로 실행됨
   // 만약, promise 안에 네트워크 통신하는 코드가 있다면, promise가 만들어지는 순간 네트워크 통신 수행

   // 만약, 네트워크 요청을 사용자가 요구(버튼누르면)했을 때만 해야하는 경우면 이런식으로 작성하면,
   // 사용자가 요구하지도 않았는데 불필요한 통신이 시작되므로 x
   // 즉, 새로운 promise object 가 만들어 질 때, 우리가 전달한 executor 콜백 함수가 자동으로 실행됨

   setTimeout(()=>{
       resolve('ellie'); // 우리가 기능을 잘 수행했을 때, 2초 있다가 resolve 콜백함수를 부른다.

       //reject(new Error('no network')); //uncaught error : 잡히지 않은 에러
       // 2초있다가 reject 콜백함수 실행.
       // 2초동안기다렸는데도 문제가있었다면 실패했다는 케이스로 예시를 인지


   },2000);  // 데이터를 받아왔는데, 사용자명이 ellie였다. 성공적으로 네트워크에서 받아온, 또는 파일에서 읽어온, 그를 가공한 데이터를 resolve라는 콜백함수를 통해 전달

   // 여기서는 어떤일을 2초정도 수행하다가, 결국 일을 잘 마무리해서 resolve라는 콜백함수를 수행하여, ellie라는 값을 전달해준다.
   // 이것을 producer라고 할 수 있음.
});





// 2. promise라는 producer를 이용한 consumer 만들기
// then, catch, finally를 이용해 값을 받아올 수 있다.
// 값이 정상수행 된다면(then) 값을 받아온다(value라는 값을). 
// 그 value를 받아와서, 원하는 기능을 수행하는 콜백함수를 전달해주면 됨

// 여기서 value라는 파라미터는 promise가 잘 작동해서 resolve 콜백함수에서 전달된 ellie라는 값이 들어옴
promise.then((value) => {
    console.log(value) 
}).catch(error => {
    console.log(error)
}).finally(() =>{console.log("성공하든 말든 무조건 실행하는 애임. finally!! ")});






// 3. promise chaining : promise 연결하기
// 예제 : 서버에서 숫자를 받아오는 새로운 promise를 만듦
// 2초 있다가 숫자 1전달
// then의 결과로, 다시 promise 객체가 반환된다!!!! 와!!를 이용

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },1000)
})

fetchNumber.then((num) => num*2).then((num) => num*3).then((num)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000)// 또, resolve를 이용해 num-1이라는 값을 전달
        //then에서 값을 바로 then()으로 연결해도 되고, 이렇게 새 promise를 리턴해도됨
    })
}).then(num => console.log(num));





// 4. Error Handling
// 총 3가지의 Promise를 리턴하는 함수 
const getHen = () => {return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('A'),1000);
})}; //getHen이라는 함수는 받는 파라미터는 없고, 새로운 promise 오브젝트를 반환하는데,
    //여기서, exec 함수가 바로실행되어 1초 후 정상수행 시 resolve콜백함수를 실행해서 A전달
    

const getEgg = (hen) => new Promise((resolve, reject) =>
{
    //setTimeout(()=>resolve(`${hen} => B`),1000);
    //서버에서 HEN이라는 걸 받아오는 것. 글구 받아온 걸 또 정상수행시 publish가 되어 gethen=>b를 전달하는 것으로 생각!
    
    setTimeout(()=>reject(new Error(`${hen} => B`)),1000); // 만약 에러발생 시, 핸들링하지않으면 x
    
});

const cook = (egg) => new Promise((resolve, reject) =>
{
    setTimeout(()=>resolve(`${egg} => C`),1000);
});


//getHen().then((hen) => getEgg(hen)).then((egg)=>cook(egg)).then((final)=>console.log(final));
// 만약 2번째에서 에러발생시 (reject) : 위에서는 에러 핸들링을 하지않았으니 정상적으로 출력x


// 1. 함수 getHen을 실행 시 리턴값으로 promise 받음
// 2. 이 받은것을 사용하기 위해 then 사용. then으로 받은걸 hen이라 함 (A).
// 3. 파라미터로 hen을 넣으면 또, promise 반환, 이번엔 a=>b를 전달
// 4. 또 promise 오브젝트를 then으로 받는데, 이 받는 오브젝트를 egg라고 한 cook이라는 함수가 있음
// 5. (egg)를 받아와서 cook 함수의 파라미터로 넣어주고 또 반복
// 6. 마지막으로 얘도 기능을 잘 수행했다면, resolve를 통해 1초 후, string {egg}->c를 보냄
   // 여기서 a-b-c 가 string 내용이됨
// 7. 전달된 value값인 final을 출력

// 이렇게도 가능 getHen().then(getEgg).then(cook).then((value) => console.log(value));




// 에러대처 방법들
// getHen().then(getEgg).then(cook).then(console.log).catch(console.log); // 맨 뒤에 catch를 할 수도 있음

getHen().then(getEgg).catch(error=>{return '비었음!'}).then(cook).then(console.log);

// 만약 앞에서 B를 받는 중 문제발생 시, hen->b를 전달해줄건데 error object로 전달될건데, 
// 여기서는 그걸 전달하지 않고, 다른 걸 전달('비었음' 이라는 STRING). 
// 이렇게하면, '비었음!' => C 가 출력됨
// 이 방법은 앞에서 문제가 생겨도 전체적인 Promise chain에 문제가 되지 않게함
// 그래서, 바로 앞에서 문제가 발생하여, 그부분의 에러를 처리하려면 바로 그다음에 catch를 적으면 됨


