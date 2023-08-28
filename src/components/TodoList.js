import { useState } from "react"
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import '../App.css';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const onInputChange = (todo) => {
        setTodos((currentTodos) => {
            return [...currentTodos, todo]
        })
    };

    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo List</h3>
            </div>
            <TodoGroup todoList={todos} />
            <TodoGenerator onInputChange={onInputChange} />
        </div>
    )
}
export default TodoList;