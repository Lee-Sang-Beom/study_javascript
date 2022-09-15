var elements = document.querySelector('.box');

anime({
    targets: elements,
    translateX: {
        value: 250,
        duration: 800
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    delay: 250 // 'scale'을 제외한 모든 속성은 250ms 지연시간(delay) 속성을 상속합니다.
});