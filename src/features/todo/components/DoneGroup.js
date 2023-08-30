import DoneItem from './DoneItem';
import '../css/app.css';

const DoneGroup = (props) => {
    const doneItems = props.doneItems.filter(doneItem => doneItem.done);
    if (doneItems.length !== 0) {
        return (
            <div className="doneGroup">
                {
                    doneItems.map((doneItem, index) => {
                        if (doneItem.done) {
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