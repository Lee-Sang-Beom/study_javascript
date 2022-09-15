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