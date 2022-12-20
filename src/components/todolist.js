import React, { useState, useRef} from 'react';
import uuid from 'react-uuid';
import Todo from './Todo.js'


export default function TodoList() {
    const [todos,setTodos] = useState([]);
    const [value,setValue] = useState('');
    const inputRef = useRef(null);

    function handleTodoAdd() {
        const newTodo = {
            id : uuid(),
            text : inputRef.current.value,
            done:false
        }
        setTodos([...todos,newTodo]);
        setValue('');
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
        <>
            <input 
             type="text"
             ref={inputRef} 
             value={value} 
             onChange={e=>setValue(e.target.value)} 
             />
            <button onClick={handleTodoAdd} >Add</button>
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
        </>
    );
}