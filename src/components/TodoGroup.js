import TodoItem from './TodoItem';
import '../App.css';

const TodoGroup = (props) => {
    const todoItems = [].concat(props.todoList);
    console.log(todoItems);

    return (
    <div className="todoGroup">
        {
        todoItems.map((todoItem, index) => {
            return <TodoItem key={index} todo={todoItem}/>
        })
        }
    </div>
    )
}
export default TodoGroup;