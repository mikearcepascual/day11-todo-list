import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import '../css/app.css';

const TodoGroup = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);
    if (todoItems.length !== 0) {
        return (
            <div className="todoGroup">
                {
                    todoItems.map((todoItem, index) => {
                        return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} id={todoItem.id} />
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