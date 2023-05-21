import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";


const TodoContext = createContext();

function TodoProvider ({children}) { 
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const str = todo.text || '';
    const todoText =  str.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);

  });

  const addTodo = (text) => {
    const newTodos = [...todos]; 
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text
    });
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text
    });
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }


    return (
        <TodoContext.Provider
            value={{
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                completeTodo,
                deleteTodo, 
                searchedTodos, 
                loading, 
                error,
                openModal,
                setOpenModal, 
                addTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
        
    )
}



export { TodoContext, TodoProvider}

