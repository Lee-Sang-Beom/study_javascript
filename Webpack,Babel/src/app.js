import "@babel/polyfill";

const arrow = () => {
    console.log('arrow func!!');
}
arrow();

const a = new Promise((resolve, reject)=>{
    resolve('we are babel!');
});

console.log(a);