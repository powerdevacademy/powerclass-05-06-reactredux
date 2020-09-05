import React from 'react';
import './App.css';
import './TodoForm';
import TodoFormHooks from './TodoFormHooks';
import TodoListHooks from './TodoListHooks';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';

//todos

function App() {
  return (
    <>
      <TodoFormHooks />
      <TodoListHooks />
    </>
  );
}

export default App;
