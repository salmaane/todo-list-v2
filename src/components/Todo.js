import React from "react";

export default function Todo({todo,handleDelete,handleCheck}) {
    
    return (
            <li className="todo">
                <label>
                    <input 
                    type="checkbox" 
                    checked={todo.done} 
                    onChange={()=> handleCheck(todo.id)}
                    />
                    <span className="checkmark"></span>
                    {todo.text}
                    <button onClick={() => handleDelete(todo.id)} >delete</button>
                </label>
            </li>
    );
} 