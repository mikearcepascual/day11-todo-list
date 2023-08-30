import DoneGroup from './DoneGroup'
import { useSelector } from 'react-redux';
import '../css/app.css';
import { Layout } from 'antd';

const DoneList = () => {
    const { Content } = Layout;
    const doneItems = useSelector((state) => state.todoList.todoList);
    return (
        // <div className="todoList">
        //     <div className="todoListHeader">
        //         <h3>Done List</h3>
        //     </div>
        //     <DoneGroup doneItems={doneItems}/>
        // </div>
        <Layout>
            <Content className="todoList" >
                <div className="todoListHeader">
                    <h2>Done List List</h2>
                </div>
                <DoneGroup doneItems={doneItems}/>
            </Content>
        </Layout>
    )
};
export default DoneList;