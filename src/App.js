import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div className="app">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            <TodoList />
        </div>
    );
};

export default App;
