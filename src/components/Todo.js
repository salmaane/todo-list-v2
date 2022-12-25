import React from "react";
import { themeContext } from "./context";
import { useContext } from "react";

export default function Todo({todo,handleDelete,handleCheck}) {
    const theme = useContext(themeContext);
    return (
            <li className="todo" id={theme}>
                <label>
                    <input 
                    type="checkbox" 
                    checked={todo.done} 
                    onChange={()=> handleCheck(todo.id)}
                    />
                    <span className="checkmark" id={theme}></span>
                    <p id={theme}>{todo.text}</p>
                    <img 
                        src='./images/icon-cross.svg' 
                        onClick={() => handleDelete(todo.id)}
                        className="cross-icon" alt=""
                    />
                </label>
            </li>
    );
} 