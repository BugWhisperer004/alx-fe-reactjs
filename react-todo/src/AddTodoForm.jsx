import React, { useState } from 'react';

export default function AddTodoForm({ onAddTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = value.trim();
        if (!trimmed) return;
        onAddTodo(trimmed);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label="New todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
}
