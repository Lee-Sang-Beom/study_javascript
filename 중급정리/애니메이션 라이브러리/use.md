## 1. TypeIt
 - [**TypeIt**](https://www.typeitjs.com/) : Typing Animation 제공

 - 예시
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
        <title>Document</title>
        <style>
            /* cursor option 변경 */
            :root {
                --ti-cursor-margin-left : 1rem;
                --ti-cursor-color: dodgerblue;
            }
        </style>

    </head>
    <body>
        <h1 id="title">Lee-Sang-Beom Animate..?</h1>
        <script>
            // html 페이지가 로드가 되 끝나면 발생하는 event listener
            document.addEventListener('DOMContentLoaded', () => {
                new TypeIt('#title',{
                    speed:110
                })
                .pause(1000)
                .delete(4)
                .type('ion')
                .go();
            })
        </script>
    </body>
    </html>
    ```


## 2. scroll out
 - [**scroll out**](https://scroll-out.github.io/guide.html/) : scroll Animation 제공

 - 예시
    ```
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- script 추가 -->
        <script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script>
        <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>

    <body>
        <div class="site-wrap">
            <!-- animation을 주고자하는 요소에 data-scroll 요소 추가 -->
            <section data-scroll>
                <div class="box">
                    <div class="left_box">
                        <img src="./1.jpg" alt="img1">
                    </div>
                    <div class="right_box">
                        <h1 class='title_1'>Scroll in down</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor nisl. Nunc hendrerit
                            tempus tortor in imperdiet. Sed maximus neque non euismod lobortis. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna a ex vestibulum
                            cursus eget vel libero. Aliquam mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                            ornare, faucibus orci mattis, condimentum enim. Fusce porta est eget finibus placerat. Proin in
                            sapien quis eros posuere volutpat ac id lacus. Pellentesque fringilla viverra mi, sed ultricies
                            neque scelerisque id. Aenean lobortis pulvinar ultrices. Nunc tincidunt, tellus non iaculis
                            varius, velit sapien mattis ex, quis rhoncus lacus urna vehicula quam.</p>
                    </div>
                </div>
            </section>
        </div>
        <div class="site-wrap">
            <section data-scroll>
                <div class="box">
                    <div class="right_box">
                        <h1 class='title_2'>Scroll in down</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor nisl. Nunc hendrerit
                            tempus tortor in imperdiet. Sed maximus neque non euismod lobortis. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna a ex vestibulum
                            cursus eget vel libero. Aliquam mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                            ornare, faucibus orci mattis, condimentum enim. Fusce porta est eget finibus placerat. Proin in
                            sapien quis eros posuere volutpat ac id lacus. Pellentesque fringilla viverra mi, sed ultricies
                            neque scelerisque id. Aenean lobortis pulvinar ultrices. Nunc tincidunt, tellus non iaculis
                            varius, velit sapien mattis ex, quis rhoncus lacus urna vehicula quam.</p>
                    </div>
                    <div class="left_box">
                        <img src="./2.jpg" alt="img1">
                    </div>
                </div>
            </section>
        </div>
        <div class="site-wrap">
            <section data-scroll>
                <div class="box">
                    <div class="left_box">
                        <img src="./3.jpg" alt="img1">
                    </div>
                    <div class="right_box">
                        <h1 class='title_3'>Scroll in down</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor nisl. Nunc hendrerit
                            tempus tortor in imperdiet. Sed maximus neque non euismod lobortis. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna a ex vestibulum
                            cursus eget vel libero. Aliquam mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                            ornare, faucibus orci mattis, condimentum enim. Fusce porta est eget finibus placerat. Proin in
                            sapien quis eros posuere volutpat ac id lacus. Pellentesque fringilla viverra mi, sed ultricies
                            neque scelerisque id. Aenean lobortis pulvinar ultrices. Nunc tincidunt, tellus non iaculis
                            varius, velit sapien mattis ex, quis rhoncus lacus urna vehicula quam.</p>
                    </div>
                </div>
            </section>
        </div>
        <div class="site-wrap">
            <section data-scroll>
                <div class="box">
                    <div class="right_box">
                        <h1 class='title_4'>Scroll in down</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor nisl. Nunc hendrerit
                            tempus tortor in imperdiet. Sed maximus neque non euismod lobortis. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna a ex vestibulum
                            cursus eget vel libero. Aliquam mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                            ornare, faucibus orci mattis, condimentum enim. Fusce porta est eget finibus placerat. Proin in
                            sapien quis eros posuere volutpat ac id lacus. Pellentesque fringilla viverra mi, sed ultricies
                            neque scelerisque id. Aenean lobortis pulvinar ultrices. Nunc tincidunt, tellus non iaculis
                            varius, velit sapien mattis ex, quis rhoncus lacus urna vehicula quam.</p>
                    </div>
                    <div class="left_box">
                        <img src="./4.jpg" alt="img1">
                    </div>
                </div>
            </section>
        </div>
        <div class="site-wrap">
            <section data-scroll>
                <div class="box">
                    <div class="left_box">
                        <img src="./5.jpg" alt="img1">
                    </div>
                    <div class="right_box">
                        <h1 class="title_5">Scroll in down</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dolor nisl. Nunc hendrerit
                            tempus tortor in imperdiet. Sed maximus neque non euismod lobortis. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a magna a ex vestibulum
                            cursus eget vel libero. Aliquam mollis magna diam, et tempor ipsum finibus vitae. Aenean ac urna
                            ornare, faucibus orci mattis, condimentum enim. Fusce porta est eget finibus placerat. Proin in
                            sapien quis eros posuere volutpat ac id lacus. Pellentesque fringilla viverra mi, sed ultricies
                            neque scelerisque id. Aenean lobortis pulvinar ultrices. Nunc tincidunt, tellus non iaculis
                            varius, velit sapien mattis ex, quis rhoncus lacus urna vehicula quam.</p>
                    </div>
                </div>
            </section>
        </div>

        <!-- 마지막에 ScrollOut({}) 함수 추가 -->
        <script>

            let title1 =document.querySelector('.title_1');
            let title2 =document.querySelector('.title_2');
            let title3 =document.querySelector('.title_3');
            let title4 =document.querySelector('.title_4');
            let title5 =document.querySelector('.title_5');

            ScrollOut({
                // scroll이벤트가 딱 1번만 애니메이션
                // once:true 

                // 요소가 보여질 때 어떻게?
                // onshown: function(element) {
                
                // }
            })

            document.addEventListener('DOMContentLoaded', () => {
                new TypeIt(title1,{
                    speed:110,
                    loop: true, // 반복함
                })
                .go();

                new TypeIt(title2,{
                    speed:110,
                    loop: true, // 반복함
                })
                .go();

                new TypeIt(title3,{
                    speed:110,
                    loop: true, // 반복함
                })
                .go();

                new TypeIt(title4,{
                    speed:110,
                    loop: true, // 반복함
                })
                .go();

                new TypeIt(title5,{
                    speed:110,
                    loop: true, // 반복함
                })
                .go();
            })


        </script>
    </body>

    </html>

    ```


## 3. Anime
 - [**Anime**](https://yamoo9.github.io/anime/documentation/#specificPropParameters/) : JS Animation 제공

 - install : 해당 URL 참조
    ```
    https://github.com/juliangarnier/anime/blob/master/lib/anime.es.js
    ```
 
 - react 환경 설치는 아래 URL 참조
    ```
    https://www.npmjs.com/package/react-animejs
    ```
    
 - 예시 1 : index.html
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="src/style.css">

        <title>Document</title>
    </head>
    <body>
        <div class="box"></div>
        
        <!-- script 추가 -->
        <script src="src/anime.min.js"></script>
        <script src="src/script.js"></script>

    </body>
    </html>

    ```

 - 예시 2 : script.js
    ```
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

    ```