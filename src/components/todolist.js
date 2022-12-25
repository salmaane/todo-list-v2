import React, {useState, useContext} from 'react';
import Todo from './Todo.js'
import {themeContext} from './context.js';

export default function TodoList() {
    const [todos,setTodos] = useState([]);
    const [inputText,setInputText] = useState('');
    const [activeFilter,setActiveFilter] = useState('All');
    const theme = useContext(themeContext);

    function handleTodoAdd(e) {
        e.preventDefault();
        if(inputText === '') return;
        const newTodo = {
            id : crypto.randomUUID(),
            text : inputText,
            done:false
        }
        setTodos([...todos,newTodo]);
        setInputText('');
    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter(todo => todo.id !== todoId));
    }

    function handleCheck(todoId) {
        setTodos(todos.map(todo => {
            if(todo.id === todoId) {
                return {
                    ...todo,
                    done: !todo.done
                }
            } else {
                return todo;
            }
        }));
    }

    function clearCompleted() {
        setTodos(todos.filter(todo => !todo.done));
    }

    function filterAll() {
        setActiveFilter('All');
    }
    function filterActive() {
        setActiveFilter('Active');
    }
    function filterCompleted() {
        setActiveFilter('Completed');
    }

    let renderList = todos;
    if(activeFilter==='Active') {
        renderList = todos.filter(todo=> !todo.done);
    } 
    if(activeFilter==='Completed') {
        renderList = todos.filter(todo=> todo.done);
    } 
    
    return (
        <div className='todolist'>
            <form>
                <span className="checkmark" id={theme} ></span>
                <input 
                id={theme}
                type="text"
                value={inputText} 
                onChange={e=>setInputText(e.target.value)} 
                placeholder="Create a new todo..."
                autoComplete='off'
                />
                <button 
                 id={theme}
                 onClick={handleTodoAdd}
                 className="add-button"
                 >+</button>
            </form>

            <div className='list-container' id={theme}>
                <ul className='list'>
                    {renderList.map(todo => (
                        <Todo 
                        key={todo.id} 
                        todo={todo}
                        handleDelete={handleDeleteTodo}
                        handleCheck={handleCheck}
                        />
                    ) )}
                </ul>

                <div className='filter-list' id={theme}>
                    <p>{todos.length} items left</p>
                    <div className="filter-buttons" id={theme}>
                        <span 
                            className={activeFilter==='All'?'active-filter':'null'}
                            onClick={filterAll}
                        >All</span>    
                        <span 
                            className={activeFilter==='Active'?'active-filter':'null'}
                            onClick={filterActive} 
                        >Active</span>    
                        <span 
                            className={activeFilter==='Completed'?'active-filter':'null'}
                            onClick={filterCompleted}
                        >Completed</span>    
                    </div>
                    <p 
                        id={theme}
                        className='clear-completed'
                        onClick={clearCompleted}
                    >Clear Completed</p>
                </div>
            </div>
        </div>
    );
}