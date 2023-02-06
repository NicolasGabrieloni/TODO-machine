import React from "react";
import './CreateTodoButton.css'

function CreateTodoButtom(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };


    return(
        <button 
        className="add"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButtom};