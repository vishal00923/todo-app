import React, { useState } from 'react';

import TodoList from './Components/todo-list/todo-list.component';

import './App.scss';

const App = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div>
            <TodoList todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
    );
};

export default App;
