import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'
import { useEffect } from 'react'
import { useTodos } from "../hooks/useTodos"
import { Layout } from 'antd';
import '../css/app.css';

const { Content } = Layout;
export default function TodoList() {

    const { loadTodos } = useTodos();
    useEffect(() => { loadTodos(); }, []);
    return (
        <Layout>
            <Content className="todoList" >
                <div className="todoListHeader">
                    <h2>Todo List</h2>
                </div>
                <TodoGroup />
                <TodoGenerator />
            </Content>
        </Layout>
    )
}