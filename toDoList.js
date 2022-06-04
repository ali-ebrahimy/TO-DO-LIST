// selector
const todoInpute = document.querySelector(".todo-input");
const todoButton = document.querySelector("form .add-btn");
const todoList = document.querySelector(".todoList");
const todoOption = document.querySelector(".filter-todo");
const trashBtn = document.querySelector(".fa-trash-can");
const clearButton = document.querySelector(".clear-btn");
let todosArray = [];

window.addEventListener("load",getLocalStorage)
todoButton.addEventListener("click",addNewTodo);
clearButton.addEventListener("click",clearTodos)
trashBtn.addEventListener("click",removeTodo);


function addNewTodo(e) {
  e.preventDefault();
  let newTodoTitle = todoInpute.value;

  let newTodoObj = {
    id: todosArray.length + 1,
    title: newTodoTitle,
    complete: false,
  };
  todosArray.push(newTodoObj);
  setLocalStorage(todosArray);
  // getLocalStorage();
  todoInpute.focus();
  todoGenerate(todosArray)
}

function setLocalStorage(todosList) {
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function todoGenerate(todosList){
  let newTodoDiv,newTodoLi,newTodoCircle,newTodoPen,newTodoTrash;
  todoList.innerHTML="";
  
  todosList.forEach((todo)=>{
    newTodoDiv=document.createElement('div');
    newTodoDiv.className='todo';

    newTodoLi=document.createElement('li');
    newTodoLi.innerHTML=todo.title;
    
    newTodoCircle=document.createElement('span');
    newTodoCircle.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    newTodoCircle.setAttribute('onclick','change(' + todo.id +')')
    
    newTodoPen=document.createElement('span');
    newTodoPen.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;

    newTodoTrash=document.createElement('span');
    newTodoTrash.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    newTodoTrash.setAttribute('onclick','removeTodo(' + todo.id +')')

    if(todo.complete){
      newTodoDiv.className='completed todo';
    }


    newTodoDiv.append(newTodoLi,newTodoCircle,newTodoPen,newTodoTrash);
    todoList.append(newTodoDiv);
    
    todoInpute.value = "";
  })
}

function change(todoId){
  let localStorageTodo=JSON.parse(localStorage.getItem("todos"));
  todosArray =localStorageTodo;

  todosArray.forEach((todo)=>{
    if(todo.id===todoId){
      todo.complete=!todo.complete;
    }
  })
  setLocalStorage(todosArray);
  todoGenerate(todosArray)
}


function removeTodo(todoId){
  let localStorageTodo=JSON.parse(localStorage.getItem("todos"));
  todosArray =localStorageTodo;
  let mainTodoIndex= todosArray.findIndex((item)=>item.id===todoId)
  todosArray.splice(mainTodoIndex,1);
  let numId=1;
  todosArray.forEach((todo)=>{
    todo.id=numId;
    numId++
  })
  localStorage.setItem("todos",JSON.stringify(todosArray));
  todoGenerate(todosArray)

}


function getLocalStorage(){
  let getStorageTodos=JSON.parse(localStorage.getItem("todos"));

  if(getStorageTodos){
    todosArray=getStorageTodos;
  }
  else todosArray=[];

  todoGenerate(todosArray);
}
function  clearTodos(){
  todosArray=[];
  todoGenerate(todosArray);
  localStorage.removeItem("todos");
}










// event listeners
/*todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
todoOption.addEventListener("click", filtersTodo);
document.addEventListener("DOMContentLoaded",getLocalTodos);
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
  saveLocalStorage(todoInpute.value);
  todoInpute.value = "";
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  // console.log(e.target)
  const item = e.target;
  // console.log(classList);
  if (classList[1] === "fa-trash-can") {
    const todo = item.parentElement.parentElement;
    removeLocalTodos(todo);
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

function saveLocalStorage(todo){
  let saveTodos=localStorage.getItem("todos")?
  JSON.parse(localStorage.getItem("todos")):
  [];
  saveTodos.push(todo);
  // console.log(localStorage.getItem("todos"));
  localStorage.setItem("todos",JSON.stringify(saveTodos));
  // console.log(localStorage.getItem("todos"));
}

function getLocalTodos(){
  let saveTodos=localStorage.getItem("todos")?
  JSON.parse(localStorage.getItem("todos")):
  [];
  saveTodos.forEach((todo)=>{
    const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `<li>${todo}</li>
          <span><i class="fa-solid fa-circle-check"></i></span>
          <span><i class="fa-solid fa-pen-to-square"></i></span>
          <span><i class="fa-solid fa-trash-can"></i></span>`;
  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  })
}

function removeLocalTodos(todos){
  // console.log(todos.children[0].innerHTML);
  let saveTodos=localStorage.getItem("todos")?
  JSON.parse(localStorage.getItem("todos")):
  [];
  let filtersTodo = saveTodos.filter((todo)=>todo!==todos.children[0].innerHTML)
  localStorage.setItem("todos",JSON.stringify(filtersTodo));
}
*/
