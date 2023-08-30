import DoneGroup from './DoneGroup'
import { useSelector } from 'react-redux';
import '../css/app.css';

const DoneList = () => {
    const doneItems = useSelector((state) => state.todoList.todoList);
    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Done List</h3>
            </div>
            <DoneGroup doneItems={doneItems}/>
        </div>
    )
};
export default DoneList;