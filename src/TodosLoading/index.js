import React from "react";
import './TodosLoading.css';
import { BiRun } from "react-icons/bi";

function TodosLoading() {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando.. <BiRun /></p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export { TodosLoading };