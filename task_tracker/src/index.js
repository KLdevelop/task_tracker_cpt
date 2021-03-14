import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListPage from './pages/todo_list/todo_list.jsx';
import BlocksPage from './pages/task_blocks/task_blocks.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={ TodoListPage }/>
      <Route path="/taskblocks" component={ BlocksPage }/>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
