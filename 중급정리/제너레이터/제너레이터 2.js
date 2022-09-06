

function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    console.log(5);

    return "finish!!";
}


const a = fn(); 


console.log(a.next());
console.log(a.next());

// return문 사용 시, 그즉시 done! { value: 'END', done: true }
// 파라미터로 뭐 전달 안하면 { value: undefined, done: true }
console.log(a.return());

// 이후에 계속 이어 실행해도 value를 얻을 수 없고(undefined) done은 계속 true
console.log(a.next());