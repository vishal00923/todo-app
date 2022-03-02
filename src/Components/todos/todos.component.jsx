import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './todos.styles.scss';

const Todos = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = (todo) => {
        const id = todo.id;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos([...newTodos]);
    };

    const handleEdit = (todo) => {
        const id = todo.id;
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const handleDelete = (todo) => {
        const id = todo.id;
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...newTodos]);
    };

    return (
        <div className="todos-container">
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <label htmlFor="todo-input">
                        <input
                            className={`todo-input ${todo.completed ? 'complete' : ''}`}
                            id="todo-input"
                            type="text"
                            value={todo.title}
                            onChange={(e) => e.preventDefault()}
                        />
                    </label>

                    <div className="buttons-container">
                        <button className="complete-btn todo-btn" onClick={() => handleComplete(todo)}>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </button>
                        <button className="edit-btn todo-btn" onClick={() => handleEdit(todo)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button className="delete-btn todo-btn" onClick={() => handleDelete(todo)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Todos;
