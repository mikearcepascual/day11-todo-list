import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import { useEffect } from 'react'
import {useTodos} from "../hooks/useTodos"
import '../css/app.css';

export default function TodoList() {
    const {loadTodos} = useTodos();
    useEffect(() => { loadTodos(); }, []);
    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo List</h3>
            </div>
            <TodoGroup />
            <TodoGenerator />
        </div>
    )
}