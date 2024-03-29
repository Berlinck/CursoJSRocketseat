var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Tomar Café',
    'Estudar Banco de Dados',
    'Acessar Udemy'
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemet = document.createElement('a');

        linkElemet.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElemet.setAttribute('onclick' ,'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElemet.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemet);

        listElement.appendChild(todoElement);
    }
};

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}