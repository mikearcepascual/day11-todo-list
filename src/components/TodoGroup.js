import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import '../App.css';

const TodoGroup = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <div className="todoGroup">
            {
                todoItems.map((todoItem, index) => {
                    return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} />
                })
            }
        </div>
    )
}
export default TodoGroup;