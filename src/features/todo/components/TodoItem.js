import { useDispatch } from "react-redux";
import { resetTodoTask } from "../todoListSlice";
import '../css/app.css';
import * as todoApi from "../../../api/todoApi";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const markAsDone = async () => {
        await todoApi.updateTodoItem(props.id, { done: !props.todoItem.done })
        const response = await todoApi.getTodoItems();
        dispatch(resetTodoTask(response.data));
    };

    const deleteItem = async () => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            await todoApi.deleteTodoItem(props.id);
            const response = await todoApi.getTodoItems();
            dispatch(resetTodoTask(response.data));
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