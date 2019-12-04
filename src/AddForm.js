import React, { useRef, useState } from "react";

const AddForm = ({ addTodo }) => {
  const newTodo = useRef();
  const [current, setCurrent] = useState({ content: '' });
  const handleChange = e => {
    let myValue = e.target.value;
    newTodo.current = myValue;
    setCurrent ({ content: newTodo.current })
    console.log('CUrrent', current);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo.current);
    setCurrent({content: ''});

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Form</label>
       { console.log(current)}
        <input type="text" onChange={handleChange} value={current.content} />
      </form>
    </div>
  );
};

export default AddForm;
