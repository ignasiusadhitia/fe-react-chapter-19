// src\components\TodoItem.jsx​

import React from "react";

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <ol className="list-group mt-3">
      <li
        className="list-group-item"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <p className="mb-2">
          <strong className="font-weight-bold mr-2">{todo.id}.</strong>

          {todo.text}
        </p>

        <button
          onClick={() => toggleComplete(todo.id)}
          className="btn btn-sm btn-outline-primary mr-2"
        >
          Complete
        </button>

        <button
          onClick={() => removeTodo(todo.id)}
          className="btn btn-sm btn-outline-danger ml-4"
        >
          Remove
        </button>
      </li>
    </ol>
  );
}
