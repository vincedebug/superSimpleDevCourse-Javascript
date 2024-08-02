const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'watch yt',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

// render the todo list when the page load
renderTodoList();

function renderTodoList() {
  // this is use to stack the template in html and make it work
  let todoListHTML = '';

  // loop through the todoList and add it to the  todoListHTML
  // push the items in the local storage if exist
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;

    // save the data from the array to the template 
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        saveToStorage();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  // after looping through the data and push to the todoListHTML
  // display the items
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

// adding new todo is like pushing new value to the todoList array
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });


  inputElement.value = '';
  renderTodoList();

  saveToStorage();
}

// use function to save the todoList in localStorage
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}