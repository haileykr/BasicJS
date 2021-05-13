const todoForm = document.querySelector('.jsTodoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.jsTodoList');

let todos =[];

function delTodo(event){
   
    const button = event.target;
    const li = button.parentNode;
    todoList.removeChild(li); 

    const updatedTodos = todos.filter((todo)=>{

        todo.id !== parseInt(li.id);
    })
    todos = updatedTodos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadToDos(){
    const loadedTodos = localStorage.getItem('todos');

    if (loadedTodos){
        const parsedTodos =JSON.parse(loadedTodos);
        parsedTodos.forEach(function (todo){
            showTodo(todo.text);
        })
    }
}

function showTodo(text){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    
    const span = document.createElement('span');
    const newId = todos.length + 1;
    
    delButton.innerText = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delButton);
    li.id = newId;
    todoList.appendChild(li);

    const todoObject = {
        text: text,
        id: newId
    };
    todos.push(todoObject);
    saveToDos();
    
    
    delButton.addEventListener('click',delTodo);
}

function handleTodoFormSubmit(event){
    event.preventDefault();
    const currentValue= todoInput.value;
    showTodo(currentValue);
    todoInput.value = '';
}

function init(){
    loadToDos();
    todoForm.addEventListener('submit', handleTodoFormSubmit);
}

init();