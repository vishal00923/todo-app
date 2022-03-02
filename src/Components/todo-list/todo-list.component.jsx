import React, { useState } from 'react';

import TodoForm from '../todo-form/todo-form.component';
import Todos from '../todos/todos.component';

import './todo-list.styles.scss';

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
            <Todos todos={todos} />
        </div>
    );
};

export default TodoList;
