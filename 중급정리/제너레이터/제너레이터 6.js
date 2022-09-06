/*
    제너레이터는 값을 미리 만들어두지 않는다. 메모리 관리 효율적
    필요한 순간에 값을 주기때문에 무한 반복문을 사용해도, 브라우저가 뻗지않는다 
    a.next()를 사용할 때마다 yield까지 도달하는 과정을 반복하기 때문

    제너레이터는 필요한 값만 그때그때 생성하는 특징을 가진다.
    
    일반함수로 어떤 값을 구할때는 모든값을 미리 계산해놔야하고, 
    쓸지안쓸지 정해지지않았는데도 그값을 유지해야함

    제너레이터를 사용하면 필요한순간까지 계산을 미룰수있음

*/

function* func(){
    let index = 0;

    while (true){
        yield index++;
    }
}

const a = func();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());