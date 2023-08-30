import * as todoApi from '../../../api/todoApi'
import {useDispatch} from 'react-redux'
import {resetTodoTask} from '../todoListSlice'
export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos(){
        const response = await todoApi.getTodoItems();
        dispatch(resetTodoTask(response.data));
    }
    return{
        loadTodos
    }
}