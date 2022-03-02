import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todo-form.styles.scss';

const TodoForm = ({ todo, setTodo, todos, setTodos, editTodo, setEditTodo }) => {
    useEffect(() => {
        editTodo ? setTodo(editTodo.title) : setTodo('');
    }, [editTodo, setTodo]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const updateTodo = (title, id, completed) => {
        const newTodos = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo));
        setTodos([...newTodos]);
        setEditTodo('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!editTodo) {
            const todosObj = {
                id: uuidv4(),
                title: todo,
                completed: false,
            };
            setTodos([...todos, todosObj]);
            setTodo('');
        } else {
            updateTodo(todo, editTodo.id, editTodo.completed);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input className="todo" id="todo" type="text" placeholder="Enter a Todo..." value={todo} onChange={handleChange} />
            </label>
            <button className="btn" type="submit">
                {editTodo ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default TodoForm;
