import React, { useState } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";

const todosArray = [
  {
    id: 1,
    content: "This is my first todo"
  },
  {
    id: 2,
    content: "This is my secons todo"
  },
  {
    id: 3,
    content: "This is my third todo"
  }
];

const App = () => {
  const [todos, settodos] = useState(todosArray);

  const deleteTodo = id => {
    const deleteTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    settodos(deleteTodos);
  };
  const addTodo = todo => {
    const myobj = { content: todo };
    myobj.id = Math.floor(Math.random() * 10);
    settodos([...todos, myobj]);
  };
  return (
    <div>
      <h2>TODO's</h2>
      <Todo todo={todos} deleteTodo={deleteTodo} />
      <AddForm addTodo={addTodo} />
    </div>
  );
};

export default App;
