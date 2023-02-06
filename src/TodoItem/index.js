import React from "react";
import './TodoItem.css'
import { FcCheckmark, FcCancel } from "react-icons/fc";

function TodoItem(props){

    return(
        <li className="list">
            <span 
            className="tick"
            onClick={props.onComplete}
            >
            <FcCheckmark />
            </span>
            
            <p className=
            {`tarea ${props.completed && 'tachado'}`}>
            {props.text}</p>
            <span 
            className="cruz"
            onClick={props.onDelete}
            >
            <FcCancel /></span>
        </li>
    );
}

export { TodoItem };