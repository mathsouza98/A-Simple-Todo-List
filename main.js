const inputElement = document.querySelector('.container input');
const btnElement = document.querySelector('.container button');
const listElement = document.querySelector('.container ul');

// If localStorage is not empty, returns todo_list. Else, returns []
var todos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderTodos() {
    // Delete previous li elements
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var todoLink = document.createElement('a');
        var todoLinkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);

        todoLink.appendChild(todoLinkText);
        todoLink.setAttribute('href','#');
        todoLink.setAttribute('onclick','deleteTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(todoLink);

        listElement.appendChild(todoElement);
    }
}

function addTodo() {
    todos.push(inputElement.value);

    renderTodos();

    inputElement.value = '';

    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos,1);

    renderTodos();

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todo_list',JSON.stringify(todos));
}

btnElement.addEventListener('click',addTodo);

renderTodos();