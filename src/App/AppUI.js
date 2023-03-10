import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButtom } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
import { Credits } from '../Credits';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <CreateTodoButtom
                setOpenModal={setOpenModal}
            />

            <TodoList >
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <p>¡Crea tus tareas!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                <Credits />
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </React.Fragment>
    );
}

export { AppUI };