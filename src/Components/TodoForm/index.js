import "./TodoForm.css"
import { TodoContext } from "../TodoContext";
import { useContext, useState } from "react"

function TodoForm () {

    const {
        setOpenModal,
        addTodo,
    } = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = (e) => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
       }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
               placeholder="Escribe aquí tu nuevo ToDo" 
               value={newTodoValue}
               onChange={onChange}
               />
            <div className="TodoForm-buttonContainer">
                <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >Cancelar</button>

                <button 
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                onClick={onSubmit}
                >Añadir</button>
            </div>
        </form>
    )
}
export {TodoForm}
