import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

export function TodoSearch() {
    const { searchedValue, setSearchedValue, inputContainer } = useContext(TodoContext)
    const valueChange = (event) => {
        setSearchedValue(event.target.value);
    };
    
    return (
        <div ref={inputContainer} className="TodoSearch-container">
            <input 
                className="TodoSearch-searcher" 
                placeholder="Search your tasks" 
                onChange={valueChange} 
                value={searchedValue}
            />
        </div>
    );
}