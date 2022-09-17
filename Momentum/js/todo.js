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
    // Todo save in localStorage
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodos(event) {
    // del_button 클릭 이벤트
    // 클릭한 button의 부모 element
    const li = event.target.parentElement;
    // 제거 (String.filter 사용)
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // Todo delete in localStorage (update)
    saveTodos();
    // drawn list delete
    li.remove();
}

function drawToDoList(newToDoList) {
    // Todo Draw
    // list element 추가
    const liToDo = document.createElement("li");
    liToDo.id = newToDoList.id;
    // span element 추가
    const spanToDo = document.createElement("span");
    spanToDo.innerText = newToDoList.text;
    // del_button element 추가
    const btnToDo = document.createElement("button");
    btnToDo.innerText = "❌";
    btnToDo.addEventListener("click", deleteTodos);
    // list 구조 : ul (li (span, button))
    liToDo.appendChild(spanToDo);
    liToDo.appendChild(btnToDo);
    toDoList.appendChild(liToDo);
}

function handleToDoListSubmit(event) {
    // Todo 추가 이벤트
    event.preventDefault();
    // New Todo Object 저장
    const newToDoListObj = {
        id : Date.now(),
        text : toDoInput.value,
    };
    // Todo 저장 후 Input 내용 삭제
    toDoInput.value = "";
    // Todo save
    todos.push(newToDoListObj);
    // Todo draw
    drawToDoList(newToDoListObj);
    // Todo save in localStorage
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoListSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedToDos) {
    // localStorage에 Todo List가 존재하는 경우
    todos = savedToDos;
    savedToDos.forEach(drawToDoList);
}
