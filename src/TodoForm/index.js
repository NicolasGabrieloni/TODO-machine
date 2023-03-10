import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancele = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return (
        <form  onSubmit={onSubmit}>
            <label>Agrega tu nueva tarea</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder=""
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancele}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir tarea
                </button>
            </div>
        </form>
    );
}

export { TodoForm }