import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  return todo.length ? (
    todo.map((todos, index) => {
      return (
        <div key={index} onClick={() => deleteTodo(todos.id)}>
          {todos.content}
        </div>
      );
    })
  ) : (
    <p>There are no todo left... right</p>
  );
};

export default Todo;
