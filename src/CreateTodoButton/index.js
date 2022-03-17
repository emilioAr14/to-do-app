import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css"

export function CreateTodoButton() {
    const { openModal,setOpenModal,createButton } = React.useContext(TodoContext)
    
    const clickHandler = ({ currentTarget }) => {
        currentTarget.classList.toggle("active")
        setOpenModal(!openModal)
    }
    
    return (
        <button ref={createButton} className="CreateTodoButton" onClick={clickHandler}><i className="add-icon fa-solid fa-plus"></i></button>
    );
}