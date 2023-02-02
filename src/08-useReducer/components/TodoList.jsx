import React, { useReducer } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  );
};
