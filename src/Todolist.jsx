import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title, completed: false }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <TodoForm addTask={addTask} />
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-message">No tasks yet. Add some!</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
              <span
                onClick={() => toggleComplete(task.id)}
                className="task-text"
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-button"
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
