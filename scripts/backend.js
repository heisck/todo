export class Todo {
  task;
  time;
  completed;

  constructor(todo) {
    this.task = todo.task;
    this.time = todo.time;
    this.completed = todo.completed
  }

  deadline() {
    return this.time;
  }

  checked() {
    if (this.completed == true) {
      return 'checked';
     } else {
      return ''
     }
  }
}


export const todos = (getfromStorage() || [{
  task: 'Visit grandma',
  time: '2025-10-28T18:42',
  completed: false
}]).map((todo) => {
  return new Todo(todo)
})

export function savetoStorage() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getfromStorage() {
  return JSON.parse(localStorage.getItem('todos'));
}