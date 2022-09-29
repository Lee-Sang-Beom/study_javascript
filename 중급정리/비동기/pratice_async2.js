// promise
{
    
    // promise는 비동기연산할때, 비동기연산이 정상 끝나면
    // resolve함수를 실행하고, 실패하면 reject함수 실행함!
    function delayP(sec){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                // 비동기처리성공 시, resolve호출
                // then에서 newDate().toIsostring() 값을 받아사용
                resolve(new Date().toISOString());
            }, sec*1000);
        })
    }
    
    // then 후속처리메소드로, promise 비동기처리함수의 resolve() 내에
    // 전달된 값을 출력할거임
    delayP(1).then((res)=>console.log(res));
}

// async : 어떤 함수를 promise를 리턴하는 함수로 만들어준다!
{
    function myFunc(){
        return 'func'; // func 반환
    }

    async function myAsync(){
        return 'async'; 
        // promise 반환 (프로미스객체가 반환: resolve 전달값을 갖는 프로미스객체가 반환)
        // 여기서 resolve전달값이 return 값임
        // 프로미스의 resolve('async'); 와 동일
    }

    // async는 promise를 반환. 따라서 then 사용가능
    // 즉, async 함수는 어떤 함수를 promise를 리턴하는 함수로 만들어준다!
    myAsync().then((res) =>{
        console.log(res); // string인 async 출력
    })

    // 이건 Promise 객체임 : Promise { 'async' }
    console.log(myAsync());
}

// await : 뭔가를 기다린다. promise가 resolve되어 결과값이 넘어오는 것을!
{
    function delayP(sec){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(new Date().toISOString());
            }, sec*1000);
        })
    }

    // async가 먼저 반환되고, 3초후 myAsync 내 time출력
    // async function myAsync(){
    //     delayP(3).then((time)=>console.log(time));
    //     return 'async'; 
    // }

    function normalFun(){
        // return 'wow';
    }
    async function myAsync(){
        // await: promise가 resolve될때까지 다음줄로 이동하지 않는다.
        // await 사용 시, promise가 resolve되고, 
        // then으로 처리하는 것을 일반함수의 리턴값을 받는것처럼 사용가능 
        
        // 아래 두 코드는 동일
        // await delayP(3).then((resolve)=>console.log(resolve)); 
        // const time = await delayP(3);
        
        // 혹은 then처리의 return값을 받을수도 있음
        // const time = await delayP(3).then((resolve)=> 'x');
        // console.log(time); // 'x'

        // await 뒤에 promise를 리턴하는 함수가 아니어도 그냥 사용가능함
        // 이때는 await가 있더라도, 없더라도 같은결과임
        const result = await normalFun();
        console.log(result);

        return 'async'; 
    }

    myAsync().then(res=>console.log(res));
    

}