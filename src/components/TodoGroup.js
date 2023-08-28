import TodoItem from './TodoItem';
const TodoGroup = (props) => {
    const todoItems = new Array(props.size).fill(0)
    return todoItems.map((_, index) => {
        return <TodoItem key={index}/>
    })
}
export default TodoGroup;