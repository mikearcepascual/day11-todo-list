import DoneItem from './DoneItem';
import { useSelector } from 'react-redux';
import '../css/app.css';

const DoneGroup = () => {
    const doneItems = useSelector((state) => state.todoList.todoList);
    if (doneItems.length !== 0) {
        return (
            <div className="todoGroup">
                {
                    doneItems.map((doneItem, index) => {
                        if(doneItem.done){
                            return <DoneItem doneItem={doneItem} key={doneItem.id} index={index} />
                        }
                        return null
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className="todoGroup">
                <h2>No Done Items!</h2>
            </div>
        )
    }

}
export default DoneGroup;