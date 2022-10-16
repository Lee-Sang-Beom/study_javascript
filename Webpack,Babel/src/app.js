import "@babel/polyfill";

const a = new Promise((resolve, reject)=>{
    resolve('wow!');
});

console.log(a);