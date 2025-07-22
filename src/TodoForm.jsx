import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim()) {
      addTask(data);
      setData("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
