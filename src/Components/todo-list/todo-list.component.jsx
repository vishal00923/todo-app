import React, { useState, useEffect } from 'react';

import TodoForm from '../todo-form/todo-form.component';
import Todos from '../todos/todos.component';

import './todo-list.styles.scss';

const TodoList = () => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
            <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
    );
};

export default TodoList;
