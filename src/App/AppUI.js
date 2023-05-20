
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoContext } from '../Components/TodoContext';
import { useContext } from 'react';
import { Modal } from '../Components/Modal'
import { TodoForm } from '../Components/TodoForm';
import { TodosAlert } from '../Components/TodosAlert';

function AppUI () {
    const {
        completeTodo,
        deleteTodo, 
        searchedTodos, 
        loading, 
        error,
        openModal,
        setOpenModal, 
        totalTodos,
    } = useContext(TodoContext)

    
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && totalTodos === 0 ) && <EmptyTodos/>}
                {(!loading && searchedTodos.length  === 0 && totalTodos > 0  ) && <TodosAlert/>}
    
                {searchedTodos.map( todo => 
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                )}
            </TodoList>
            <CreateTodoButton
                setOpenModal={setOpenModal}/>
            
            {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>)}
    </>
    );
}

export { AppUI }

