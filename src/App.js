import React from 'react';
import TodoList from './components/todolist';
import {useState} from 'react';
import {themeContext} from './components/context.js';

function App() {
  const [theme,setTheme] = useState('light');
  const changeTheme = () => {
    setTheme(curr=> curr==='light'? 'dark':'light');
  };
  

  return (
    <themeContext.Provider value={theme}>
    <main id={theme}>
      <header>
        <h1 className='logo' >TODO</h1>
        <img 
          src={theme==='light' ? './images/icon-moon.svg':'./images/icon-sun.svg'}
          alt=''
          className='theme'
          onClick={changeTheme}
             />
      </header>
      <TodoList/>
      <p className='drag-drop' id={theme}>Drag and Drop to reorder list</p>
    </main>
    </themeContext.Provider>
  );
}

export default App;