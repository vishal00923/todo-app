import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Run Once
    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        // Filter Functionality
        switch (status) {
            case 'completed':
                const completedTodos = todos.filter((todo) => todo.completed === true);
                setFilteredTodos(completedTodos);
                break;
            case 'uncompleted':
                const uncompletedTodos = todos.filter((todo) => todo.completed === false);
                setFilteredTodos(uncompletedTodos);
                break;
            default:
                setFilteredTodos(todos);
                break;
        }

        // Save Data To Local Storage
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos, status]);

    // Get Data From Local Storage
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let localTodos = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodos);
        }
    };

    return (
        <div className="app">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
            <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos} />
        </div>
    );
};

export default App;
