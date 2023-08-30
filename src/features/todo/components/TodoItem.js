import { useTodos } from '../hooks/useTodos'
import '../css/app.css';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Button, Modal } from 'antd';

const TodoItem = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoItem, setTodoItem] = useState("");

    const addItem = (event) => {
        setTodoItem(event.target.value)
    };

    const { toggleTodo, deleteTodo, updateTodo } = useTodos();


    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setTodoItem("")
    }

    const handleSubmit = () => {
        updateTodo(props.id, todoItem);
        setIsModalOpen(false)
    }

    const markAsDone = async () => {
        toggleTodo(props.id, props.todoItem);
    };

    const deleteItem = async () => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            deleteTodo(props.id);
        }
        else {
            window.alert("Todo item remove failed")
        }
    };

    return (
        <div className="todoItem">
            <span id="todoText" className={props.todoItem.done ? "done" : ""}
                onClick={markAsDone}>
                {props.todoItem.text}
            </span>
            <Button className="edit-btn" type="primary" icon={<EditOutlined />}
                onClick={showModal}></Button>
            <Button className="delete-btn" type="primary" danger
                onClick={deleteItem} icon={<DeleteOutlined />}></Button>
            <Modal style={{ height: "300px" }} centered title="Edit Todo Text" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
                <input className="edit-todo" type='text'
                    placeholder={props.todoItem.text}
                    value={todoItem}
                    onChange={addItem} />
            </Modal>
        </div>
    )
}

export default TodoItem;