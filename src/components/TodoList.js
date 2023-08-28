import {useState} from "react"
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const onInputChange = (todo) => {
        setTodos((currentTodos) => {
            return [...currentTodos, todo]
        })
    };

    return (
    <div>
        <TodoGroup todoList={todos}/>
        <TodoGenerator onInputChange={onInputChange}/>
    </div>
    )
}
export default TodoList;