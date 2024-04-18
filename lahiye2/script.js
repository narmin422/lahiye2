const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const sortButton = document.getElementById('sort-button');
const image = document.querySelector('#image-container img');

function toggleTodoListVisibility() {
    const uldiv = document.querySelector('.uldiv');
    uldiv.style.display = todoList.children.length === 0 ? 'none' : 'block';
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        addDeleteButtonToListItem(li);
        todoList.appendChild(li);
        todoInput.value = '';
        toggleTodoListVisibility();
    }
}

function deleteTodo() {
    this.parentNode.remove();
    toggleTodoListVisibility();
}

function changeColor() {
    this.classList.add('clicked');
}

function addDeleteButtonToListItem(li) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', deleteTodo);
    deleteButton.addEventListener('click', changeColor);
    li.appendChild(deleteButton);
}

window.onload = function () {
    toggleTodoListVisibility();
}

let reverseSort = false;

function sortTodoList() {
    reverseSort = !reverseSort;
    const todos = Array.from(todoList.children);

    const sortedTodos = todos.sort((a, b) => {
        if (reverseSort) {
            return a.textContent.localeCompare(b.textContent);
        } else {
            return b.textContent.localeCompare(a.textContent);
        }
    });

    todoList.innerHTML = '';

    sortedTodos.forEach(todo => {
        todoList.appendChild(todo);
    });

    const newPhoto = reverseSort ? 'photo/Group 90.png' : 'photo/Group 38.png';
    image.src = newPhoto;
}

function changeImageOnHover() {
    image.src = reverseSort ? 'photo/Group 91.png' : 'photo/Group 73.png';
}

function restoreImageOnMouseOut() {
    image.src = reverseSort ? 'photo/Group 90.png' : 'photo/Group 38.png';
}

image.addEventListener('mouseover', changeImageOnHover);
image.addEventListener('mouseout', restoreImageOnMouseOut);
addButton.addEventListener('click', addTodo);
sortButton.addEventListener('click', sortTodoList);

















