// /** Variable Type */
// var var1 = 0    // 초기버전 변수 타입, let과 동일하게 동작하나 사용하지 않음
// const var2 = 0  // 신규 변수 타입, 선언 후 값 변경 불가
// let var3 = 0    // 신규 변수 타입, 선언 후 값 변경 가능 


// /** Object */
// const player = {
//     name: "Jodin",
//     age: 30,
//     hp: 100,
//     mp: 100,
// };

// console.log(player);

// /** Function */
// function calc(first, oper, second){
//     if (oper == "+")
//         console.log(first + second);
//         else if (oper == "-")
//         console.log(first - second);
//         else if (oper == "*")
//         console.log(first * second);
//         else if (oper == "/")
//         console.log(first / second);
//         else if (oper == "%")
//         console.log(first % second);
//         else
//         console.log("잘못된 연산입니다.");
// };

// calc(1, "+", 3)
// calc(3, "-", 2)
// calc(5, "*", 2)
// calc(10, "/", 2)
// calc(8, "%", 3)
// calc(1203, "49", 301)

// const calculator = {
//     add: function (a, b) {
//         console.log(a+b);
//     },
//     sub: function (a, b) {
//         console.log(a-b);
//     },
//     mul: function (a, b) {
//         console.log(a*b);
//     },
//     div: function (a, b) {
//         console.log(a/b);
//     },
//     pow: function (a, b) {
//         console.log(a**b);
//     }
// };

// calculator.add(2, 4)
// calculator.sub(2, 4)
// calculator.mul(2, 4)
// calculator.div(2, 4)
// calculator.pow(2, 4)

// /** getElementById 를 통한 접근 */
// const title = document.getElementById("title");

// title.innerText = "hello";

// console.dir(title);

// /** querySelector 를 통한 접근 */
// /** CSS Selector 문법을 통해 HTML document 접근이 가능 */

// const title = document.querySelector(".Hello:first-child h1");

// console.log(title);

/** Event 실습 */

// const title = document.querySelector("div.Hello:first-child h1");   // div 태그 Hello 클래스 첫번째 child h1 태그 호출
// let titleColorState = 0;                                            // 타이틀 색 스위치를 위한 상태값 변수 생성/초기화

// function handleTitleClick(){                                        // Click 이벤트 발생 시 실행할 함수 생성
//     //console.log("Title was clicked!");
//     if(titleColorState === 0){                                      // titleColorState = 0 이면 파랑, 1이면 빨강으로 title 출력
//         titleColorState = 1;
//         title.style.color = "blue";
//     }else{
//         titleColorState = 0;
//         title.style.color = "red";
//     }
// }

// title.addEventListener("click", handleTitleClick);                  // EventListener 실행 구문
// title.onClick(handleTitleClick);                                    // EventListener 실행 구문 2

// /** Event 실습 2 */
// // Window도 Document와 같이 기본으로 제공되는 요소

// const h1 = document.querySelector("div.Hello h1");

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("You Copier!");
// }

// function handleWindowOffline(){
//     alert("SOS! Wifi Offline!");
// }

// function handleWindowOnline(){
//     alert("Wifi Good!!");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// /** 실습 3 */

// const h1 = document.querySelector("div.Hello:first-child h1");

// function handleTitleClick(){
//     const curColor = h1.style.color;
//     let newColor;
//     if(curColor === "blue")
//         newColor = "tomato";
//     else
//         newColor = "blue";
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector("div.Hello:first-child h1");

function handleTitleClick(){
    let curClass = h1.className;
    
    if(curClass === "active"){
        curClass = "";
    }else{
        curClass = "active";
    }

    h1.className = curClass;
}

h1.addEventListener("click", handleTitleClick);