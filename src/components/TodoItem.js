import {useDispatch} from "react-redux";
import {deleteTodoItem, doneTodoItem} from "./todoListSlice";
import '../App.css';

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const markAsDone = () => {
        dispatch(doneTodoItem(props.index))
    };

    const deleteItem = () => {
        dispatch(deleteTodoItem(props.index));
    };

    return (
        <div className="todoItem">
            <span className={props.todoItem.done ? "done" : ""}
                onClick={markAsDone}>
                    {props.todoItem.text}
            </span>
            <button className="delete-btn"
            onClick={deleteItem}>X</button>
        </div>
    )
}

export default TodoItem;