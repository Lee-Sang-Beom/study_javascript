import a_number from "./a.js";
import b_number from "./b.js";
import c_number from "./c.js";

console.log(a_number, b_number, c_number);

const btn_a = document.getElementById('btn_a');
const btn_b = document.getElementById('btn_b');
const btn_c = document.getElementById('btn_c');
const display = document.getElementById('display');

btn_a.addEventListener('click',function(){
    display.textContent = a_number;
})

btn_b.addEventListener('click',function(){
    display.textContent = b_number;
})

btn_c.addEventListener('click',function(){
    display.textContent = c_number;
})