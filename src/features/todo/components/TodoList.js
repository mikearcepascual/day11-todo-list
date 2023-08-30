import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../css/app.css';

const TodoList = (props) => {
    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo List</h3>
            </div>
            <TodoGroup isDone={props.isDone}/>
            {!props.isDone && <TodoGenerator />}
            {props.isDone && <div className="todoGenerator">
                <input type='text' style={{display:"none"}}
                     />
            </div>}
        </div>
    )
}
export default TodoList;