import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    const todoItems = [].concat(props.todoList);
    console.log(todoItems);

    return todoItems.map((todoItem, index) => {
        return <TodoItem key={index} todo={todoItem}/>
    })
}
export default TodoGroup;