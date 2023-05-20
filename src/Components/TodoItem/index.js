import "./TodoItem.css"

function TodoItem (props) {
    const { text, completed, onComplete, onDelete} = props
    return (
      <li className="todo-item">
        <button
          onClick={onComplete}
          className={`check ${completed && "check--active"}`}
        ></button>
        <p>{text}</p>
        <button onClick={onDelete} className="close-item"></button>
      </li>
    );
  }
  
export {TodoItem}