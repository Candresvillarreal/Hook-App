import React from "react";
import { TodoList, TodoAdd } from "./components";
import { useTodos } from "./hooks/useTodos";



export const TodoApp = () => {
  
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

  return (
    <div>
      <h1>
        TodoApp: { todosCount }, <small>Pending: { pendingTodosCount }</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <TodoList
              todos={ todos }
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
