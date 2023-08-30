import { useTodos } from '../hooks/useTodos'
import '../css/app.css';

const TodoItem = (props) => {
    const {toggleTodo} = useTodos();
    const {deleteTodo} = useTodos();

    const markAsDone = async () => {
        toggleTodo(props.id, props.todoItem);
    };
  
    const deleteItem = async () => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            deleteTodo(props.id);
        }
        else {
            window.alert("Todo item remove failed")
        }
    };

    return (
        <div className="todoItem">
            <span className={props.todoItem.done ? "done" : ""}
                onClick={markAsDone}>
                {props.todoItem.text}
            </span>
            <button className="delete-btn"
                onClick={deleteItem}>&times;</button>
        </div>
    )
}

export default TodoItem;