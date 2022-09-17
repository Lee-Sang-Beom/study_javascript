
/* 
[불변성 : Immutable type]
- 불변성은 말 그대로 변하지 않는 것을 의미.
- 불변 데이터는 한번 생성되고나면 그 뒤에는 변할수 없다.

- 자바스크립트에는 원시 타입(primitive type)으로는
   Boolean, String, Number, Null, undefined, Symbol 이 있으며 이 원시 타입은 불변한다. 
   
- 이 값은 메모리영역 안에서 변경이 불가능하며 변수에 할당할 때 완전히 새로운 값이 만들어져 재 할당된다.
*/

{
    let name = 'str'; // 'str'라는 string 타입의 값이 메모리에 생성되고, name은 메모리에 생성된 'str'를 가리킴
    name = 'ing'; //  'ing'라는 새로운 string 타입의 값이 새로 생성되고, name은 'ing'를 가리킴
}

{
    let name = 'str'; // 'str'라는 string 타입의 값이 메모리에 생성되고, name은 메모리에 생성된 'str'를 가리킴
    let name2 = name; // name2는 name이 가리키는 주소의 값인 'str'를 가리킴
    name = 'ing';  // 'ing'라는 string 타입의 값이 메모리에 생성되고, name은 'ing'를 가리킴
}

/*
[변경성 : Mutable type]
- 위의 immutable type을 제외한 객체타입은 변할 수 있는 값
- 객체는 새로운 값이 메모리에 생성되는 게 아니고, 직접적으로 그 값을 변경시키는 것임.
*/

{
    let obj1 = { // obj1에 새로 만든 객체 할당
        name: 'Lee'
    }

    let obj2 = obj1; // obj1이 가리키는 객체 주소를 obj2도 가리킴
    obj1.name = 'Sang'; // obj1이 가리키는 객체의 name 프로퍼티에 'Sang'이라는 string 데이터를 할당

}

{
    let arr1 = ['str']; // 배열 생성 후, arr1에 할당
    let arr2 = arr1; // arr2도 arr1이 참조하는 배열을 가리킴
    arr1.push('ing');

    console.log(arr2); // x와 y는 동일한 데이터를 가리키고있음
    console.log(arr1 === arr2) // true
}

// const
// const는 값에 대한 '참조'가 한번 변수에 할당되고 나면 변할 수 없음을 의미
// const 변수가 참조하고 있는 '값'이 불변한다는 것을 의미하지 않는다.
{
    const con ={
        age:1,
        name:'lee',
    }

    con.age = 3;
    console.log(con);

//     con = { // error: 객체를 새로 생성하여 const 키워드가 참조하도록 하는 것
//         age:2,
//         name:'lee',
//     }

}

/*
    우리는 개발자로서 유지보수가 가능하고 가독성이 좋은 코드를 작성해야한다.

    불변성을 지키지 않는다면 위의 예시처럼 사용할 데이터가 어디서 어떻게 바뀌어가는지 흐름을 쫓아가기 어렵고, 이는 곧 예기치 못한 side effects나 버그로 이어지게 만든다.

    불변성을 지켜 명시적으로 작성된 코드는 다른 개발자가 코드를 보았을 때도 내가 모르는 어딘가에서 데이터가 변화했을거야! 라는 불필요한 의심없이 코드를 읽는 그대로 흐름을 따라가면서 이해할 수 있도록 돕는다.

    따라서 불변성을 지키면서 데이터를 변화시킨다면, 예상가능하고 신뢰할 수 있는 코드가 될 수 있다.

    애초에 불변성을 지켜야 한다는 것은 리액트가 만들어낸 새로운 컨셉이 아니라 불변성이라는 개념을 지켜가면서 state와 props를 이용할 수 있도록 하는 아이디어를 리액트에 녹여낸 것이다.

    immutable한 값을 state나 props로 사용한다면 어떠한 일련의 이벤트를 통해 새롭게 만들어진 object가 변수에 할당 되는 것을 볼 수 있다. 이러한 새로운 값에 대한 참조는 기존의 값에서 값이 어떻게 변화하는지 추적하기가 쉽게 만들어준다.
*/