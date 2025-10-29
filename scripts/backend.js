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

  
  completedId() {
    if (this.completed == true) {
      return 'completed-btn';
     } else {
      return ''
    }
  }
  
  completedSrc() {
    if (this.completed == true) {
      return 'images/checked.png';
     } else {
      return ''
    }
  }

  check() {
    if (this.completed == true) {
      return 'Completed';
     } else {
      return 'Uncompleted'
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