// const num = [1,2,3,4,5];

// const min = Math.min.apply(null, num);
// console.log(min);

// const max = Math.max.call(null, ...num);
// console.log(max);

// const mike = {name : 'mike'};


// function update(birth, occup){
//     this.birth = birth;
//     this.occup = occup;
// }

// update.call(mike, 2017,"singer");
// console.log(mike);

console.clear();


let num = 0;
function show(){
    console.log(`접속한 지 ${num++} s 지남`);
    if(num>5){
        clearInterval(tid);
    }
}

const tid = setInterval(show, 1000);