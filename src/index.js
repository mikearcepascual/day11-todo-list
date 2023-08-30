import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from "./store";
import App from './App';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './features/todo/components/TodoList'
import DoneList from './features/todo/components/DoneList'
import HelpPage from './features/pages/HelpPage'
import DoneItemDetails from './features/todo/components/DoneItemDetails'
import ErrorPage from './features/pages/ErrorPage'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [{
    index: true,
    element: <TodoList />,
    
  }, {
    path: "/help",
    element: <HelpPage />
  }, {
    path: "/done",
    element: <DoneList/>
  }, {
    path: "/done/:id",
    element: <DoneItemDetails/>
  }],

}]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
