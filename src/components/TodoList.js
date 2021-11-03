import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todos={props.todos} todo={todo} setTodos={props.setTodos} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
