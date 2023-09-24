class TodoItem {
  constructor(title) {
    this.title = title
    this.isDone = false
  }
}

export const todoItems = [new TodoItem('sample todo')]

export function addTodoItem(title) {
  todoItems.push(new TodoItem(title))
}
