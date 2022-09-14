// const car  = {
//     wheels : 4,
//     drive() {
//         console.log("drive ...");
//     }
// }

// const bmw = {
//     color : 'red',
//     navi : 1,
// }

// const benz = {
//     color : 'black',
// }

// const audi = {
//     color : 'blue',
// }

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;


// console.log(bmw, bmw.hasOwnProperty('color')); // 색과 navi만 나옴 
// console.log(bmw.__proto__); // 프로토타입도 출력


// const k5 = {
//     color : 'white', name : 'x5'
// };

// k5.__proto__ = bmw;
// console.log(k5.drive()); //  상속받았다고 생각

// console.clear();
// for (p in k5){
//     console.log(p); //  모든  prototype 나옴

//     if(k5.hasOwnProperty(p)) // hasownproperty 는 객체가 직접 가지고 있는 프로퍼티만 반환
// //                               // 부모것도 다른거로 인식함..!
// //         console.log('o', p);
// // }

// const car  ={
//     wheels : 4,
//     drive() {
//         console.log("drive ...");
//     }
// }

// const bmw = function(color){
//     const c = color;

//     this.getcolor = function() {
//         console.log(c)
//     };

//     this.wheels = 4;
//     this.drive = function(){
//         console.log('drive... ');
//     }
// }


// const b = new bmw();

// bmw.prototype.drive = () => console.log('drive');
// bmw.prototype.stop = () => console.log('stop drive');

// bmw.prototype = {
//     constructor : bmw,
//     wheels : 4,
//     drive(){
//          console.log('drive');
//     },
//     stop() {
//         console.log('stop drive');
//     }
// }
// const x5 = new bmw('red');
// const z4 = new bmw('blue'); // 이렇게 생성자로 만들어진 인스턴스 객체에는 constructor property가 존재. (constructor)
// // x5.__proto__ = car;
// // z4.__proto__ = car;

// // console.log(x5);
// // console.log(x5.__proto__);
// // x5.stop();


// // console.log(x5 instanceof bmw, x5.constructor === bmw);
// // //  bmw로 x5를 만들었나?, x5의 constructor는 bmw를 가리키는가?


// x5.getcolor();

const bmw = function(color){
    const c = color;
    this.getColor = function(){
        console.log(c);
    }
}

const x5 = new bmw('yellow');
x5.getColor();