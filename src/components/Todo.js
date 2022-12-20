import React from "react";

export default function Todo({todo,handleDelete,handleCheck}) {
    
    return (
        
            <li>
                <label>
                    <input 
                    type="checkbox" 
                    checked={todo.done} 
                    onChange={()=> handleCheck(todo.id)}
                    />
                    {todo.text}
                </label>
                <button onClick={() => handleDelete(todo.id)} >delete</button>
            </li>

    );
} 