import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li
            role="listitem"
            data-testid={`todo-${todo.id}`}
            onClick={onToggle}
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.25rem 0.5rem',
            }}
        >
            <span>{todo.text}</span>
            <button
                aria-label={`Delete ${todo.text}`}
                onClick={(e) => {
                    e.stopPropagation(); // important: prevent toggling when deleting
                    onDelete();
                }}
            >
                Delete
            </button>
        </li>
    );
}
