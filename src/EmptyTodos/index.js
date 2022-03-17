import React from "react";
import "./EmptyTodos.css"

export function EmptyTodos() {
    return(
        <div className="EmptyTodos">
            <div className="EmptyTodos__image"></div>
            <h6 className="EmptyTodos__info">You still don't have <br/>tasks</h6>
        </div>
    )
}