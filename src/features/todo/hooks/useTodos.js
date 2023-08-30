import * as todoApi from '../../../api/todoApi'
import { useDispatch } from 'react-redux'
import { resetTodoTask } from '../todoListSlice'
export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await todoApi.getTodoItems();
        dispatch(resetTodoTask(response.data));
    }
    const addTodo = async (todoItem) => {
        await todoApi.addTodoItem(todoItem)
        loadTodos();
    }
    const toggleTodo = async (id, todoItem) => {
        await todoApi.toggleTodoItem(id, { done: !todoItem.done })
        loadTodos();
    }
    const deleteTodo = async (id) => {
        await todoApi.deleteTodoItem(id)
        loadTodos();
    }
    const updateTodo = async (id, textToUpdate) => {
        await todoApi.updateTodoItem(id, { text: textToUpdate })
        loadTodos();
    }
    return {
        loadTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        updateTodo
    }
}