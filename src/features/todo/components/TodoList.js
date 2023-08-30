import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../css/app.css';

const TodoList = () => {

    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo List</h3>
            </div>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    )
}
export default TodoList;