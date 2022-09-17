// Todo Form
const toDoForm = document.getElementById("todo-form");
// Todo Input
const toDoInput = toDoForm.querySelector("input");
// Todo List (UL)
const toDoList = document.getElementById("todo-list");
// 중복 word 변수화
const TODOS_KEY = "todos"
// Todo List in Array
let todos = [];

function saveTodos() {
    // Todo save in localstorage
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodos(event) {
    // Todo delete in localstorage
}

function handleButtonClicked(event) {
    // del_button 클릭 이벤트
    // 클릭한 button의 부모 element
    const li = event.target.parentElement;
    // 제거
    li.remove();
}

function drawToDoList(newToDoList) {
    // Todo Draw
    // list element 추가
    const liToDo = document.createElement("li");
    // span element 추가
    const spanToDo = document.createElement("span");
    spanToDo.innerText = newToDoList;
    // del_button element 추가
    const btnToDo = document.createElement("button");
    btnToDo.innerText = "❌";
    btnToDo.addEventListener("click", handleButtonClicked);
    // list 구조 : ul (li (span, button))
    liToDo.appendChild(spanToDo);
    liToDo.appendChild(btnToDo);
    toDoList.appendChild(liToDo);
}

function handleToDoListSubmit(event) {
    // Todo 추가 이벤트
    event.preventDefault();
    // New Todo String 저장
    const newToDoList = toDoInput.value;
    // Todo 저장 후 Input 내용 삭제
    toDoInput.value = "";
    // Todo save
    todos.push(newToDoList);
    // Todo draw
    drawToDoList(newToDoList);
    // Todo save in localstorage
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoListSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos) {
    // localstorage에 Todo List가 존재하는 경우
    todos = saveTodos;
    console.log(todos);
    savedToDos.forEach(drawToDoList);
}
