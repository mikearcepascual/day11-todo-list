import api from "./api";

export const getTodoItems = () => {
    return api.get("/todos")
}
export const updateTodoItem = (id, todoItem) => {
    return api.put(`/todos/${id}`, todoItem)
}

export const addTodoItem = (todoItem) => {
    return api.post(`/todos`, todoItem)
}