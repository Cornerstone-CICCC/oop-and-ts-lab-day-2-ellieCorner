import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  render() {
    const todoListElement = document.createElement("div");
    todoListElement.className = "todo-list";
    const ulElement = document.createElement("ul");
    todoListElement.appendChild(ulElement);
    const renderTodos = (todos) => {
      ulElement.innerHTML = "";
      todos.forEach((todo) => {
        const item = new TodoItem(todo).render();
        ulElement.appendChild(item);
      });
    };

    todoContext.subscribe(renderTodos);
    renderTodos(todoContext.todos);

    return todoListElement;
  }
}
