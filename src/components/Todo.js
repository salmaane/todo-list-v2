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
                    <img src='./images/icon-cross.svg' 
                        onClick={() => handleDelete(todo.id)}
                        className="cross-icon" alt=""
                    />
                </label>
            </li>
    );
} 