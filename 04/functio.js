function fun1(){
    console.log('hello');
}

let fun2 = function(a,b){
    console.log(a,b);
}

const fun3 = (a,b) =>  a+b;

fun1();
fun2(1,2);
console.log(fun3(2,3));
console.log(Boolean(''));