import "./TodoCounter.css"
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

function TodoCounter () {

    const {completedTodos, totalTodos} = useContext(TodoContext)
    
    return (
      <h1 className="title">Has completado {completedTodos} de {totalTodos} "To Do List"</h1>
    );
  }

export {TodoCounter}