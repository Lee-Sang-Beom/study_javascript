{
    function outer(){
        // a는 outer라는 함수 안에 존재
        // js는 함수단위로 스코프 생성
        
        // 스코프는 해당 함수와 함수 내 변수가 유효한 영역이라 생각.
        var a = 1;
        console.log(a);
    }
    
    outer();
}

{
    // global scope
    var d = 'x';

    function outer(){
        var a = 1;
        var b = 'b';

        function inner(){
            var a = 2;
            
            // 스코프는 함수 단위
            // a 탐색 시, inner용 스코프에서 먼저 탐색 : a가 있으니, 해당 a 출력
            console.log(a);

            // b 탐색 시, inner용 스코프에서 먼저 탐색 : 없음
            // inner를 포함하는 바깥 스코프를 탐색해 b 탐색
            // inner는 outer 스코프 안에 있기 때문에 가능
            console.log(b); // 'b'

            // global 스코프는 outer와 inner를 포함하므로, 추적 가능
            // 이렇게 원하는 값을 찾기위해 스코프의 연결을 따라 가는 것이 스코프 체인
            console.log(d); // 'x'
        }
        inner();
    }
    
    outer();
}

// 클로저
{

    function outer(){
        var a= 1;
        var b= 'c?';

        function inner(){
            var a=2;
            console.log(b);
        }
        return inner;
    }

    /*
        1. outer() 으로, inner함수가 반환됨
        2. someFun() 실행 시, inner함수 내의 console.log(b)가 찍힐까? yes
        3. 생성한 시점의 스코프 체인을 계속 들고 있는 것임
        4. outer()가 실행된 다음에도, inner()를 밖으로 꺼낸 다음에도, inner에서는 outer에 접근 가능하다. 
           왜냐면 return된 inner는 기존에 연결되어있던 outer와의 연결고리인 스코프체인, 거기서의 global과의 스코프체인을 가지고 있기 때문에 
   
        즉,

        5-1. 각 객체의 스코프는 상위 스코프의 링크(참조 값)를 가진다.
        5-2. 자신의 스코프내에서 사용하려는 변수를 찾을 수 없을 경우 상위 스코프에서 찾는다.
        (상위 스코프의 함수가 사용이 끝났는지와는 상관없이 스코프 체인은 유지된다. 스코프 체인이 유지되고 있을시 사용이 끝난 상위 스코프의 함수는 메모리에서 삭제 되지 않는다. 이로 인해 무분별한 클로저 중복은 메모리 누수로 이어진다.)
        5-3. 자신의 상위 스코프에서 해당 변수를 찾을 경우, 그 변수를 사용한다.
    */
    var someFun = outer();
    someFun();
}