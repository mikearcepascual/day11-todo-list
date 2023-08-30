import { useNavigate } from "react-router-dom"
import '../css/app.css';

const DoneItem = (props) => {
    const navigate = useNavigate()

    const onClickTodoItem = () => {
        navigate("/done/" + props.doneItem.id);
    }
    return (
        <div className="todoItem">
            <span onClick={onClickTodoItem}>{props.doneItem.text}</span>
        </div>
    )
}

export default DoneItem;
