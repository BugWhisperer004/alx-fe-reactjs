import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Buy milk')).toBeInTheDocument();
        expect(screen.getByText('Walk the dog')).toBeInTheDocument();
        expect(screen.getByText('Learn React Testing Library')).toBeInTheDocument();
    });

    test('adds a new todo', async () => {
        render(<TodoList />);
        const user = userEvent.setup();
        const input = screen.getByLabelText(/New todo/i);
        const addButton = screen.getByRole('button', { name: /add/i });

        await user.type(input, 'Write tests');
        await user.click(addButton);

        expect(screen.getByText('Write tests')).toBeInTheDocument();
    });

    test('toggles a todo between completed and not completed', async () => {
        render(<TodoList />);
        const user = userEvent.setup();

        // find text node and its list-item container
        const itemText = screen.getByText('Buy milk');
        const item = itemText.closest('li');

        // initially not completed
        expect(item).toHaveStyle('text-decoration: none');

        // click to toggle
        await user.click(itemText);
        expect(item).toHaveStyle('text-decoration: line-through');

        // click again to un-toggle
        await user.click(itemText);
        expect(item).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', async () => {
        render(<TodoList />);
        const user = userEvent.setup();

        const itemText = screen.getByText('Buy milk');
        // delete button has aria-label `Delete Buy milk`
        const deleteButton = screen.getByLabelText('Delete Buy milk');

        await user.click(deleteButton);

        expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
    });
});
