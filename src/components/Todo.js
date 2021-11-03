import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const completeHandler = () => {
        const remTodos = props.todos.map((ele) => {
            if (ele.id === props.todo.id) {
                return { ...ele, completed: !ele.completed };
            }
            return ele;
        });

        props.setTodos(remTodos);
    };

    const deleteHandler = () => {
        const remTodos = props.todos.filter((ele) => ele.id !== props.todo.id);
        props.setTodos(remTodos);
    };

    return (
        <div className="todo">
            <li className={`${props.todo.completed ? 'completed' : ''}`}>{props.text}</li>
            <div className="todo-btn__box">
                <button className="complete-btn" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;
