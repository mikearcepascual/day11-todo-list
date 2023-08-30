import '../todo/css/app.css';
import { Layout } from 'antd';

const HelpPage = () => {
    const { Content } = Layout;
    return (
        <Layout>
        <Content className="todoList" >
        <div className="todoListHeader">
                <h2>Help Page</h2>
            </div>
            <div className="helpPage">
               
            </div>
        </Content>
    </Layout>
    )

}
export default HelpPage;