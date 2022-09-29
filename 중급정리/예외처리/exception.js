// 예외처리: 언어가 정해놓은 규칙을 벗어났을 때의 행동을 정의하는 것


{
    function f2(){
        console.log('f2 start');

        // f2()에서 예외 발생 시, 콜스택에서 f2관련 정보가 파괴됨 
        // 결과적으로 해당뒷부분이 실행되지 않음
        throw 'error'; // 이후 모든코드 실행x
        console.log('f2 end');
    }

    function f1(){
        console.log('f1 start');
        f2();
        console.log('f1 end');
    }

    // console.log('will : f1');
    // f1();
    // console.log('did : f1');
}

{
    function f2(){
        console.log('f2 start');

        // throw할 때, 에러를 스트링으로 전달하는 것 보단
        // error객체에는 해당 콜스택정보가 담겨있어,
        // 어느파일 몇번째줄에 에러가 발생했는지 알수있도록 정보제공
        throw new Error('error'); 
        console.log('f2 end');
    }

    function f1(){
        console.log('f1 start');
        try{
            //try: 예외가 발생할수도 있는 구문
            f2();

        }catch (e){
            // 예외 확인 시, 해줄 내용
            console.log(e);
        }finally{
            // finally는 성공이든 실패든 항상 실행되고 넘어감
            console.log('무조건 실행');
        }
        
        // catch로 예외 처리 시, 이후 내용이 진행가능
        console.log('f1 end');
    }

    console.log('will : f1');
    f1();
    console.log('did : f1');
}