import { useTodos } from '../hooks/useTodos'
import '../css/app.css';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Button, Modal } from 'antd';

const TodoItem = (props) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleteCancelled, setIsDeleteCancelled] = useState(false);
    const [todoItem, setTodoItem] = useState("");

    const addItem = (event) => {
        setTodoItem(event.target.value)
    };

    const { toggleTodo, deleteTodo, updateTodo } = useTodos();


    const showEditModal = () => {
        setIsEditModalOpen(true)
    }
    const handleEditCancel = () => {
        setIsEditModalOpen(false)
        setTodoItem("")
    }

    const handleSubmit = () => {
        updateTodo(props.id, todoItem);
        setIsEditModalOpen(false)
    }

    const showDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }
    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false)
        setIsDeleteCancelled(true)
    }
    const handleClose = () => {
        setIsDeleteCancelled(false)
    }

    const handleDelete = () => {
        deleteTodo(props.id);
        setIsEditModalOpen(false)
    }
    const markAsDone = async () => {
        toggleTodo(props.id, props.todoItem);
    };

    return (
        <div className="todoItem">
            <span id="todoText" className={props.todoItem.done ? "done" : ""}
                onClick={markAsDone}>
                {props.todoItem.text}
            </span>
            <Button className="edit-btn" type="primary" icon={<EditOutlined />}
                onClick={showEditModal}></Button>
            <Button className="delete-btn" type="primary" danger
                onClick={showDeleteModal} icon={<DeleteOutlined />}></Button>
            <Modal style={{ height: "300px", textAlign:"center" }} centered title="Delete Todo Item" open={isDeleteModalOpen} onOk={handleDelete} onCancel={handleDeleteCancel}>
                <h3>Are you sure you want to remove this item?</h3>
                <p><strong>Todo Task:</strong> {props.todoItem.text}</p>
            </Modal>
            <Modal style={{ height: "300px", textAlign:"center" }} centered title="Delete Failed" open={isDeleteCancelled} onOk={handleClose} onCancel={handleClose}>
                <h3>Todo item remove failed.</h3>
            </Modal>
            <Modal style={{ height: "300px" }} centered title="Edit Todo Text" open={isEditModalOpen} onOk={handleSubmit} onCancel={handleEditCancel}>
                <input className="edit-todo" type='text'
                    placeholder={props.todoItem.text}
                    value={todoItem}
                    onChange={addItem} />
            </Modal>
        </div>
    )
}

export default TodoItem;