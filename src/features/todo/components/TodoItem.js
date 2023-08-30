import { useDispatch } from "react-redux";
import { deleteTodoItem, doneTodoItem } from "../todoListSlice";
import '../css/app.css';

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const markAsDone = () => {
        if(props.isDone){
            console.log("Go to detail page");
        }else{
            dispatch(doneTodoItem(props.id))
        }
    };

    const deleteItem = () => {
        if (window.confirm("Are you sure you want to remove this item?")) {
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