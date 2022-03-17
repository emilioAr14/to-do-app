import React from "react";
import "./TodoItem.css"

export function TodoItem(props) {
  return (
    <li className="task-card">
      <span 
        className="task-card__icon"
        onClick={props.onComplete}
      >
        <i className={`fa-solid fa-check check-icon ${props.completed? "active": "inactive"}`}></i>
      </span>
      <p className={`task-card__info ${props.completed? "completed": "to-complete"}`}>{props.text}</p>
      <span 
        className="task-card__icon"
        onClick={props.onDelete}    
      >
        <i className="fa-solid fa-trash trash-icon"></i>
      </span>
    </li>
  );
}