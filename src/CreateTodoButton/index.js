import React from "react";
import './CreateTodoButton.css'

function CreateTodoButtom(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };


    return(
        <div>
        <button 
        className="add"
        onClick={onClickButton}
        >+</button>
        </div>
    );
}

export { CreateTodoButtom};