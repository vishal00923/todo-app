import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todo-form.styles.scss';

const TodoForm = ({ todo, setTodo, todos, setTodos }) => {
    const handleChange = (e) => {
        setTodo(e.target.value);
        // console.log(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const todosObj = {
            id: uuidv4(),
            title: todo,
            completed: false,
        };
        setTodos([...todos, todosObj]);
        setTodo('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input className="todo" id="todo" type="text" placeholder="Enter a Todo..." value={todo} onChange={handleChange} />
            </label>
            <button className="add-btn" type="submit">
                Add
            </button>
        </form>
    );
};

export default TodoForm;
