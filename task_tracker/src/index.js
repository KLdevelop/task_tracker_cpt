import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListPage from './pages/todo_list/todo_list.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TodoListPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
