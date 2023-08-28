import '../App.css';

const TodoItem = (props) => {
    return (
        <div className="todoItem">
            {props.todo}
        </div>
    )
}

export default TodoItem;