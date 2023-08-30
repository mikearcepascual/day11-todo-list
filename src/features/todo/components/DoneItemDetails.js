import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import '../css/app.css';
import { Layout } from 'antd';
const DoneItemDetails = () => {
    const { id } = useParams();
    const { Content } = Layout;
    const todoItem = useSelector(state => state.todoList.todoList.find(task => task.id === id))

    return (
        // <div className="todoList">
        //     <div className="todoListHeader">
        //         <h3>Todo Item Details</h3>
        //     </div>
        //     <div className="todoGroup">
        //         <h1>Todo Item Detail</h1>
        //         <div>{todoItem?.text}</div>
        //     </div>
        // </div>
        <Layout>
            <Content className="todoList" >
                <div className="todoListHeader">
                    <h2>Done List</h2>
                </div>
                <div className="todoGroup">
                    <h1>Todo Item Detail</h1>
                    <p id="todo-item-detail"><strong>Todo ID:</strong> {todoItem?.id}</p>
                    <p id="todo-item-detail"><strong>Todo Text:</strong> {todoItem?.text}</p>
                </div>
            </Content>
        </Layout>
    );
}

export default DoneItemDetails;