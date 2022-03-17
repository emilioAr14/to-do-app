import React from "react";
import { useMediaQuery } from "react-responsive";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { EmptyTodos } from "../EmptyTodos";
import { ErrorTodos } from "../ErrorTodos";
import { LoadingTodos } from "../LoadingTodos";

export function AppUI() {
  const {
    dataStatus: { loading, error },
    searchedTodos,
    totalTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  return (
    <>
      {!isTabletOrMobile && <TodoForm />}
      <section className="wrapper">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <ErrorTodos />}
            {loading && !error && <LoadingTodos />}
            {(!loading && !searchedTodos.length && !totalTodos) && <EmptyTodos />}

            {searchedTodos.map((todo) => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        {isTabletOrMobile && <CreateTodoButton />}
      </section>
    </>
  );
}
