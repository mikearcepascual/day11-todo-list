import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import '../css/app.css';

const TodoGroup = (props) => {
    const todoItems = useSelector(state => state.todoList.todoList)
    if (todoItems.length !== 0) {
        return (
            <div className='todoGroup'>
                {(props.isDone ? todoItems.filter(todoItem => todoItem.done) : todoItems).map(((todoItem) =>
                    <TodoItem key={todoItem.id} todoItem={todoItem} isDone={props.isDone} id={todoItem.id}></TodoItem>
                ))}
            </div>
        );
    }
    else {
        return (
            <div className="todoGroup">
                <h2>No Todo Items!</h2>
            </div>
        )
    }

}
export default TodoGroup;