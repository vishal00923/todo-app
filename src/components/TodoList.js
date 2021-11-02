import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todos={props.todos} setTodos={props.setTodos} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
