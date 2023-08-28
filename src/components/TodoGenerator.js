import {useState} from 'react';

const TodoGenerator = (props) => { 
    const [todoItem, setTodoItem] = useState("");

    const submitInput = () => {
        const inputItem = todoItem;
        setTodoItem(inputItem);
        props.onInputChange(inputItem)
    }

    return (
    <div>
        <input type='text' value={todoItem} 
        onChange={event => setTodoItem(event.target.value)}/>
        <button onClick={submitInput}>Add</button>
    </div>
    )
}
export default TodoGenerator;