import React from "react";
import { InputAnimation } from "./InputAnimation";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
const inputContainer = React.createRef();
const createButton = React.createRef();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        dataStatus 
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchedValue, setSearchedValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

      const totalTodos = todos.length;
      const completedTodos = todos.filter(todo => todo.completed).length;
      
      let searchedTodos = [];
    
      if(!searchedValue.length >= 1) {
        searchedTodos = [...todos]
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchedText = searchedValue.toLowerCase();
          return todoText.includes(searchedText);
        });
      }
    
      const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text===text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        })
        saveTodos(newTodos);
      };

      InputAnimation(inputContainer);
    
    return (
        <TodoContext.Provider value={{
            dataStatus,
            totalTodos,
            completedTodos,
            searchedValue,
            setSearchedValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo, 
            addTodo,
            inputContainer,
            openModal,
            setOpenModal,
            createButton
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };