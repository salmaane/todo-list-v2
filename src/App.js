import React from 'react';
import TodoList from './components/todolist';


function App() {
  return (
    <main>
      <header>
        <h1 className='logo'>TODO</h1>
        <img src='./images/icon-moon.svg' alt='' className='theme'/>
      </header>
      <TodoList/>
    </main>
  );
}

export default App;
