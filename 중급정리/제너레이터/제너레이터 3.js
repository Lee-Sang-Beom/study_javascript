function* fn() {
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        console.log(5);
    
        return "finish!!";
    } catch(e){
        console.log(e);
    } finally{
        console.log('종료');
    }
    
}


const a = fn(); 


console.log(a.next());
console.log(a.next());

// a.throw()로 오류전달 시, 예외처리구문의 catch로 이동하면서 { value: undefined, done: true } 을 가진 객체 반환
console.log(a.throw(new Error('err발생')));

// 이후에 next()메소드를 써도 { value: undefined, done: true }
console.log(a.next());
