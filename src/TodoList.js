import React from 'react';
import TodoItem from './TodoItem';
import 'bootstrap-icons/font/bootstrap-icons.css';


function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message"><i className='bi bi-file-earmark-x' style={{ fontSize: '24px' }}></i> &nbsp; Your list is empty. Start by adding a task!</p>
      ) : (
        tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={() => onToggle(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
