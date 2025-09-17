import { Component } from "../common/Component.js";
import { todoContext } from "../contexts/TodoContext.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, text, completed } = this.props;

    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
    <li class="${completed ? "completed" : ""}">
      <span>
        ${text}
      </span>
      <div>
        <button>${completed ? "Mark Incomplete" : "Mark Complete"}</button>
        <button>Delete</button>
      </div>
    </li>
    `;

    const [toggleBtn, deleteBtn] = todoElement.querySelectorAll("button");

    toggleBtn.addEventListener("click", () => todoContext.toggleTodo(id));
    deleteBtn.addEventListener("click", () => todoContext.deleteTodo(id));

    return todoElement;
  }
}
