'use strict'

// callback : 어떤 일이 완료된 이후 실행되는 함수를 콜백 함수라 함.

// new promise생성자가 반환하는 promise 객체는 state와 result를 프로퍼티로 받는다.

//초기 state는 pending(대기), result는 undefined

// 성공 시 :  resolve가 호출되면 (성공하면) state : fulfilled 가 되며, result :  resolve로 전달한 값이 부여
// 실패 시 : state : rejected 거부됨,  result : error


const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve('ok'); //3초후에 state : fulfilled, result : ok
        reject(new Error('error')); // 3초 이후, rejected, result : error
    },2000)
})

pr.then(function(result){
  console.log(result);
}).catch((error) => console.log(error)).finally(()=>console.log("끝"));

// Promise.all([f1(),f2(),f3()]).then((res)=>console.log(res));
// 위의 내용은 then이 3개의 배열 내 전달된 함수가 다 끝나여, res를 출력함
// 즉, promise.all 은 한번에 동시에 시작하고, 모두 이행되면 then을 통해 값을 사용할 수 있음. 

// Promise.race([f1(),f2(),f3()]).then((res)=>console.log(res));
// 하나라도 1등으로 완료되면 끝나버림. (resolve든 reject가 뒤에 있든말든 무시됨)

// console.time('x');  ~~~ console.timeEnd('x');
// x파라미터로 전달한 일련의 과정이 time~end가 도니 사이 시간을 게산함tttttttttttttttttttt