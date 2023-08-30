import { useRouteError } from "react-router-dom"
import '../todo/css/app.css';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="todoList">
           Error Text: {error.statusText}
        </div>
    )

}
export default ErrorPage;