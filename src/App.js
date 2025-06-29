import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { loadTasks, saveTasks } from './Storage';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = loadTasks();
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main>
    <div className="app-container">
      <h1>📋 To-Do List</h1>
      <TodoForm onAdd={addTask} />
    </div>
    
    <div className="task-section">
      <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
    </main>
   
    
  );
}

export default App;
