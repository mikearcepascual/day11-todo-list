import { useSelector } from "react-redux"
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../css/app.css';

const TodoList = () => {
    const todoItems = useSelector((state) => state.todoList.todoList);

    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo List</h3>
            </div>
            <TodoGroup todoItems={todoItems} />
            <TodoGenerator />
        </div>
    )
}
export default TodoList;