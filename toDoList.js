// selector
const todoInpute = document.querySelector(".todo-input");
const todoButton = document.querySelector("form .add-btn");
const todoList = document.querySelector(".todoList");
const todoOption = document.querySelector(".filter-todo");
// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
todoOption.addEventListener("click", filtersTodo);
// function
function addTodo(e) {
  e.preventDefault();
  // get todo value
  // creat new todo
  // add to DOM
  // reset input
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `<li>${todoInpute.value}</li>
          <span><i class="fa-solid fa-circle-check"></i></span>
          <span><i class="fa-solid fa-pen-to-square"></i></span>
          <span><i class="fa-solid fa-trash-can"></i></span>`;
  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  todoInpute.value = "";
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(e.target)
  const item = e.target;
  // console.log(classList);
  if (classList[1] === "fa-trash-can") {
    const todo = item.parentElement.parentElement;
    todo.remove();
  } else if (classList[1] === "fa-circle-check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  }
}

function filtersTodo(e) {
  const todos = [... todoList.childNodes];//todolist.children
  // console.log(todos);
  todos.forEach((todo) => {
    if (e.target.value === "all") {
      todo.style.display = "flex";
    }
    else if(e.target.value === "completed"){
        if(todo.classList.contains("completed")) todo.style.display='flex';
        else todo.style.display='none';
    }
    else{
        if(todo.classList.contains("completed")) todo.style.display='none';
        else todo.style.display='flex';
    }
  });
}
