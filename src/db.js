let todos = JSON.parse(localStorage.getItem('todos'))

todos = todos || {
  1: {
    id: 1,
    title: "Read Book",
    isDone: false
  },
  2: {
    id: 2,
    title: "Learn React",
    isDone: true
  },
  3: {
    id: 3,
    title: "Sleep",
    isDone: false
  }
}

export const updateTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const getTodos = () => {
  return todos
}
