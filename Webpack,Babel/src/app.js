import "@babel/polyfill";

const arrow = () => {
    console.log('arrow func');
}
arrow();

const a = new Promise((resolve, reject)=>{
    resolve('good');
});

console.log(a);