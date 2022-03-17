import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

export function TodoForm () {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  
  const {
    addTodo,
    openModal,
    setOpenModal,
    createButton
  } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }
  
  const onErase = () => {
    setNewTodoValue("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!newTodoValue) {
      return;
    }
    addTodo(newTodoValue);
    createButton.current.classList.toggle("active")
    setOpenModal(!openModal)
  };

  
  return(
    <form  className="TodoForm" onSubmit={onSubmit}>
      <h3 className="TodoForm-title">Write your new task</h3> 
      <div className="TodoForm-container">
        <textarea 
          className="TodoForm-textarea"
          onChange={onChange}
          value={newTodoValue}
          placeholder="Cut onions without crying"
        />
        <div className="button-wrapper">
          <button
            type="button"
            onClick={onErase}
            className="TodoForm-button erase"
          >
            <i class="fa-solid fa-eraser eraser-icon"></i>
          </button>
          <button
            type="submit"
            className="TodoForm-button add"
          >
            add
          </button>
        </div>
      </div>
      <div className="TodoForm-image--container">
        <div className="TodoForm-image"></div>
      </div>
    </form>
  )
}
