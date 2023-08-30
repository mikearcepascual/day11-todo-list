import { useRouteError } from "react-router-dom"
import '../todo/css/app.css';
import { Empty } from 'antd';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className="todoList">
            <div className="empty-page">
                <Empty
                    description={
                        <h1>
                            {error.statusText}
                        </h1>
                    }
                />
            </div>

        </div>
    )

}
export default ErrorPage;