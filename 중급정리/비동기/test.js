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
        const result = await delayP(2);
        console.log(result);
        console.log(123);
        return 'async'; 
    }

    myAsync().then(res=>console.log(res));
    

}