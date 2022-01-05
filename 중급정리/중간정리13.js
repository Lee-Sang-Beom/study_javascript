// function func() {}
// class func2{
//     constructor(){

//     }
// }
// func2.prototype.name = 'egoing';
// let o = new func2();
// console.log(o.name);


// function Ultra(){}
// Ultra.prototype.ultraProp=true;

// function Super(){}
// Super.prototype=new Ultra();
// Super.prototype.ultraProp = 3;

// function Sub(){}
// Sub.prototype = new Super();

// let on = new Sub();
// console.log(on.ultraProp); 

const user = {
    name : 'Mike',
    hasOwnProperty : function() { console.log('fuck you')}
}

console.log(user.hasOwnProperty());