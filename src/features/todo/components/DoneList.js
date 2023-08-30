import DoneGroup from './DoneGroup'
import '../css/app.css';

const DoneList = () => {
    return (
        <div className="todoList">
            <div className="todoListHeader">
                <h3>Done List</h3>
            </div>
            <DoneGroup/>
        </div>
    )
};
export default DoneList;