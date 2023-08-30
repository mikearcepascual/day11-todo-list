import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem, resetTodoTask } from '../todoListSlice';
import * as todoApi from "../../../api/todoApi"
import '../css/app.css';

const TodoGenerator = () => {
    const [todoItem, setTodoItem] = useState("");

    const addItem = (event) => {
        setTodoItem(event.target.value)
    };

    const dispatch = useDispatch();

    const submitInput = async () => {
        if (todoItem.trim() === "") {
            alert("Invalid input! Please add text");
        }
        else {
            await todoApi.addTodoItem({
                id: crypto.randomUUID(),
                text: todoItem,
                done: false,
            });
            const response = await todoApi.getTodoItems();
            dispatch(resetTodoTask(response.data));
            
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