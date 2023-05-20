import "./TodoList.css"
function TodoList (props) {

    const {children} = props

    return (
      <ul className="todo-list">
        {children}
      </ul>
    );
  }
  
export {TodoList}