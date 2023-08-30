import TodoItem from './TodoItem';
import '../App.css';

const TodoGroup = (props) => {
    const todoItems = props.todoItems;
    if (todoItems.length !== 0) {
        return (
            <div className="todoGroup">
                {
                    todoItems.map((todoItem, index) => {
                        return <TodoItem todoItem={todoItem} key={todoItem.id} id={todoItem.id} />
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="todoGroup">
                <h2>No Todo Items!</h2>
            </div>
        )
    }

}
export default TodoGroup;