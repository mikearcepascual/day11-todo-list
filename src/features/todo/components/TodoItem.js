import { useDispatch } from "react-redux";
import { deleteTodoItem, doneTodoItem } from "../todoListSlice";
import '../css/app.css';
import * as todoApi from "../../../api/todoApi";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const markAsDone = () => {
        dispatch(doneTodoItem(props.id))
        todoApi.updateTodoItem(props.id, { done: !props.todoItem.done })
        dispatch(doneTodoItem({ id: props.id, done: !props.todoItem.done }))
    };

    const deleteItem = () => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            todoApi.deleteTodoItem(props.id);
            dispatch(deleteTodoItem(props.id));
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