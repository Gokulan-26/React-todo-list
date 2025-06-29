import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.text}
        </span>
      </div>
      <button className="btn" onClick={onDelete}><i className='
      bi bi-trash'></i></button>
    </li>
  );
}

export default TodoItem;
