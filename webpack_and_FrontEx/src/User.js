import photo from "./images/forestLogo.png";

import "./user.css";
export default function User({name}){
    const li = document.createElement('li');
    li.classList.add("user");
    li.addEventListener('click', ()=>{alert(`${name}`)});
    // element 안에 있는 HTML 전체 내용을 가져오고 설정? innerHTML
    li.innerHTML = `
    <div>
        <img src="${photo}" alt="${name}"/> ${name}
    </div>`;
    return li;
}