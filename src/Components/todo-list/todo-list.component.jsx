import React from 'react';

import TodoForm from '../todo-form/todo-form.component';
import Todos from '../todos/todos.component';

import './todo-list.styles.scss';

const TodoList = ({ todo, setTodo, todos, setTodos, editTodo, setEditTodo }) => {
    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <TodoForm todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
            <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
    );
};

export default TodoList;
