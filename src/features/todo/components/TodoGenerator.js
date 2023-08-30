import { useState } from 'react';
import {useTodos} from "../hooks/useTodos"
import '../css/app.css';

const TodoGenerator = () => {
    const [todoItem, setTodoItem] = useState("");

    const addItem = (event) => {
        setTodoItem(event.target.value)
    };

    const {addTodo} = useTodos();
    const submitInput = async () => {
        if (todoItem.trim() === "") {
            alert("Invalid input! Please add text");
        }
        else {
            addTodo({
                id: crypto.randomUUID(),
                text: todoItem,
                done: false,
            })
            setTodoItem("");
        }
    }

    return (
        <div className="todoGenerator">
            <input type='text'
                placeholder="What are you going to do today?"
                value={todoItem}
                onChange={addItem} />
            <button onClick={submitInput}>Add</button>
        </div>
    )
}
export default TodoGenerator;