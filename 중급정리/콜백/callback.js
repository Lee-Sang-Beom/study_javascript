function sync(callback,delay){
    callback();
}

console.log(0);
setTimeout(function(){console.log('hello')},0);
console.log(1);