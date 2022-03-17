import React from "react";
import "./ErrorTodos.css"

export function ErrorTodos() {
    return(
        <div className="ErrorTodos">
            <div className="ErrorTodos__image"></div>
            <h6 className="ErrorTodos__info">Oops, an error ocurred while <br /> loading your tasks</h6>
        </div>
    )
}