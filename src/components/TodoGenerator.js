import { useState } from 'react';
import '../App.css';

const TodoGenerator = (props) => {
    const [todoItem, setTodoItem] = useState("");

    const submitInput = () => {
        const inputItem = todoItem.trim();
        if(inputItem !== ""){
            setTodoItem(inputItem);
            props.onInputChange(inputItem)
            setTodoItem("");
        }
    }

    return (
        <div className="todoGenerator">
            <input type='text' placeholder="What are you going to do today?" 
            value={todoItem}
                onChange={event => setTodoItem(event.target.value)} />
            <button onClick={submitInput}>Add</button>
        </div>
    )
}
export default TodoGenerator;