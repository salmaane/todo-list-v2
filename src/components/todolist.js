import React, { useState, useRef} from 'react';
import uuid from 'react-uuid';
import Todo from './Todo.js'


export default function TodoList() {
    const [todos,setTodos] = useState([]);
    const [text,setText] = useState('');
    const inputRef = useRef(null);

    function handleTodoAdd(e) {
        e.preventDefault();
        if(inputRef.current.value === '') return;
        const newTodo = {
            id : uuid(),
            text : inputRef.current.value,
            done:false
        }
        setTodos([...todos,newTodo]);
        setText('');
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

    return (
        <div className='todolist'>
            <form>
                <input 
                type="text"
                ref={inputRef} 
                value={text} 
                onChange={e=>setText(e.target.value)} 
                placeholder="Create a new todo..."
                />
                <button onClick={handleTodoAdd}
                 className="add-button"
                 >+</button>
            </form>
            <div className='list-container'>
                <ul>
                    {todos.map(todo => (
                        <Todo 
                        key={todo.id} 
                        todo={todo}
                        handleDelete={handleDeleteTodo}
                        handleCheck={handleCheck}
                        />
                    ) )}
                </ul>
            </div>
        </div>
    );
}