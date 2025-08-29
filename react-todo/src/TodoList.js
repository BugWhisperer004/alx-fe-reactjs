import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Learn React Testing Library', completed: false },
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text) => {
        if (!text.trim()) return;
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos(prev => [newTodo, ...prev]);
    };

    const toggleTodo = (id) => {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <ul data-testid="todo-list" style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={() => toggleTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
}
