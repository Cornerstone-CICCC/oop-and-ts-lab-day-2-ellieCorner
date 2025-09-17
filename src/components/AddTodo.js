import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
      const input = addElement.querySelector("#todo-input");
      todoContext.addTodo(input.value);
      input.value = "";
    });

    return addElement;
  }
}
