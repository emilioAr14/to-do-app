import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    
    return (
        <header className="TodoCounter">
            <h1 className="TodoCounter__title">your tasks</h1>
            <h3 className="TodoCounter__info">Has completed<br /> {completedTodos} of {totalTodos} tasks</h3>
        </header>
    );
}

