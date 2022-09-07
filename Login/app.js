/** 선언 방식 1 */
// const loginForm = document.querySelector("login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

/** 선언 방식 2 */
/** Login 버튼 예제 */
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name");
//     } else if(username.length > 15){
//         alert("Your name is too long.");
//     }
    
// }
// loginButton.addEventListener("click", onLoginBtnClick);

/** Form 기반의 eventListener 예제 */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){      // JS는 모든 Listener로 호출되는 함수의 첫번째 argument를 통해 방금 실행된 동작에 대한 요약을 자동으로 제공. (event object)
                                    // argument의 이름은 아무렇게 지어도 상관없지만 관행적으로 'event'를 사용
    event.preventDefault();         // 브라우저에서 자동으로 실행하는 기본 동작을 막음 (ex) page refresh
    console.log(event);

    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onLoginSubmit);