import React, { useRef } from "react";

const AddForm = ({ addTodo }) => {
  const newTodo = useRef();

  const handleChange = e => {
    let myValue = e.target.value;

    newTodo.current = myValue;
    return { current: newTodo.current };
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo.current);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Form</label>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default AddForm;
