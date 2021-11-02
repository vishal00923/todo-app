import React from 'react';
import './Form.css';

const Form = (props) => {
    const inputTextHandler = (event) => {
        props.setInputText(event.target.value);
    };

    const submitTodoHandler = (event) => {
        event.preventDefault();

        const todo = {
            id: Math.trunc(Math.random() * 1000) + 1,
            text: props.inputText,
            completed: false,
        };

        props.setTodos([todo, ...props.todos]);
        props.setInputText('');
    };

    const statusHandler = (event) => {
        props.setStatus(event.target.value);
    };

    return (
        <form className="todo-form" onSubmit={submitTodoHandler}>
            <div className="todo-form__container">
                <div className="todo-box">
                    <input type="text" value={props.inputText} className="todo-input" onChange={inputTextHandler} />
                    <button type="submit" className="todo-btn">
                        <i className="fas fa-plus-square fa-plus"></i>
                    </button>
                </div>
                <div className="select-box">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default Form;
