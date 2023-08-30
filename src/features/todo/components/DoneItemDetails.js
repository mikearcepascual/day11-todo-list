import {useSelector} from "react-redux"
import {useParams} from 'react-router-dom'

const DoneItemDetails = () => {
    const {id} = useParams();
    const todoItem = useSelector(state => state.todoList.todoList.find(task => task.id === id))

    return (
      
            
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Todo Item Details</h3>
            </div>
            <div className="todoGroup">
                <h1>Todo Item Detail</h1>
                <div>{todoItem?.id}</div>
                <div>{todoItem?.text}</div>
            </div>
        </div>
        
    );
}

export default DoneItemDetails;