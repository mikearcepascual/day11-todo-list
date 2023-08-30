import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import {useEffect} from 'react'
import{useDispatch} from "react-redux"
import * as todoApi from '../../../api/todoApi'
import {resetTodoTask} from "../todoListSlice"
import '../css/app.css';

export default function TodoList() {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData(){
            const response = await todoApi.getTodoItems();
            dispatch(resetTodoTask(response.data));
        }
        fetchData();
    },[]);
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