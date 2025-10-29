import { todos, Todo, savetoStorage } from './backend.js';


// RENDERING THE MAIN TODO PAGE 
export function renderAllTodoPage() {
  console.log(todos);
  let allTodoHTML = `
  <div class="main-create-todo-inp">
    <div class="main-todo-input">
      <input id="todo-input" placeholder="Please enter your todos here" type="text">
    </div>
    <div class="main-todo-date-input">
      <input id="todo-date-input" type="datetime-local">
      <button>Add Todo</button>
    </div>
  </div>
  `;
  todos.forEach((todo, index) => {
    const renderAllTodoHTML = `
    <div  class="main-todos-div">
      <div class="main-todo">
        <video class="main-video" src="images/list check.mp4" autoplay loop muted>
        </video>
        <div>
          ${todo.task}
        </div>
      </div>
      <div class="main-completed">
        <span>
          Due on:<br> ${todo.deadline()}
        </span>
        <button id="completed-btn"><img src="images/checked.png">Completed</button>
      </div>
      <div class="main-del-btn">
        <button data-todo-id=${index} class="del-btn">
          Delete
        </button>
      </div>
    </div>
    `
    allTodoHTML += renderAllTodoHTML;
  })
  document.querySelector('.main-todos').innerHTML = allTodoHTML;
  deleteTodo();
  addTodo();
  checkedTodo();
};

// RENDERING THE ALLTODS LOGO
export function animateAllTodoIcon() {
  setInterval(() => {
    OnlineWebFonts_Com({
      'Id':'.all-todo',
      'Data':__Animations['458419'],
    }).Play();
  }, 2000);
  OnlineWebFonts_Com({
    'Id':'.all-todo',
    'Data':__Animations['458419'],
  }).Play();
};

// DELETING A TODO
export function deleteTodo() {
  document.querySelectorAll('.del-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      todos.splice(Number(btn.dataset.todoId), 1);
      savetoStorage();
      renderAllTodoPage();
    })
  })
};

// ADDING A NEW TODO
export function addTodo() {
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest('.main-todo-date-input') ?
      getNewTodo()
      : '';
      savetoStorage();
    })
  })
};

// GET THE NEW TODO FROM THE INPUT FORM
function getNewTodo() {
  const todoInput = document.getElementById('todo-input');
  const datetimeInput = document.getElementById('todo-date-input');
  if (todoInput.value && datetimeInput.value) {
    const newTodo = {
      task: todoInput.value,
      time: datetimeInput.value,
      completed: false
    }
    todos.push(new Todo(newTodo));
    renderAllTodoPage();
  }
  
};

// FUNCTION TO TRACK CHECKED TODOS
function checkedTodo() {
  document.querySelectorAll('input').forEach((inp) => {
    inp.addEventListener('click', () => {
      if (inp.closest('.main-completed')) {
        todos[Number(inp.dataset.completedTodoId)].completed === true ?
        todos[Number(inp.dataset.completedTodoId)].completed = false :
        todos[Number(inp.dataset.completedTodoId)].completed = true;
        savetoStorage();
      };
    })
  });
};

export function renderWelcomeText() {
  const arr = 'TODO WEBAPP';
  let i = 0;
  clockwise(arr, i);
}

function clockwise(arr, i) {
  const intervalId = setInterval(() => {
    let newArr = arr.slice(0, i++);
    if (i <= arr.length + 1) {
      document.querySelector('#welcome-header').innerText = newArr + '|';
    }
    else {
      clearInterval(intervalId);
      counterClockwise(arr, i);
    }
  }, 100)
}

function counterClockwise(arr, i) {
  const intervalId = setInterval(() => {
    if (i > 0) {
      let newArr = arr.slice(0, i--);
      document.querySelector('#welcome-header').innerText = newArr + '|';
    } else {
      clearInterval(intervalId);
      clockwise(arr, ++i);
    }
  }, 100)
}