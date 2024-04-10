let todoList = [];

renderTodo();

function renderTodo() {
    let todoListHTML = '';

    // generate html 
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p> ${todo}</p>`; 
        todoListHTML += html;
        }
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;

        console.log(todoListHTML);
}

function addTodo(){ 
    const inputElement = document. querySelector('.js-name-input'); // get element 
    const name = inputElement.value; // get the value of element 
    todoList.push(name); // push the element in array
    inputElement.value = ''; // clear the current placeholder


    renderTodo();

}