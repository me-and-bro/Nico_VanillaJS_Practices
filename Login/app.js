const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";                      
const USERNAME_KEY = "username";

function handleInputSubmit(event) {
    // "submit" EventListener
    event.preventDefault();                                     // 브라우저 기본 동작 제어
    localStorage.setItem(USERNAME_KEY, loginInput.value);       // localStorage User 키/값 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);                  // Form 숨기기
    paintGreetings();                                           // Greeting 표시
}

function paintGreetings(){
    // Greeting 표시 함수
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;                   // innerText 저장
    greeting.classList.remove(HIDDEN_CLASSNAME);                // Greeting 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY);       // localStorage username 값 저장

if (savedUsername === null) {
    // form 표시
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleInputSubmit);
} else {
    // greeting 표시
    paintGreetings();
}