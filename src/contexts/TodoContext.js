export class TodoContext {
  constructor(props) {
    this.todos = [];
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.todos));
  }

  addTodo(todo) {
    if (!todo.trim()) return;
    const newTodo = { id: Date.now(), text: todo.trim(), completed: false };
    this.todos.push(newTodo);
    this.notify();
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.notify();
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.notify();
  }
}

export const todoContext = new TodoContext();
