import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListPage from './pages/todo_list/todo_list.jsx';
import BlocksPage from './pages/task_blocks/task_blocks.jsx';
import AuthPage from './pages/authorization/auth.jsx';
import RegistrPage from './pages/registration/registr.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={ TodoListPage }/>
      <Route path="/authorization" component={ AuthPage }/>
      <Route path="/registration" component={ RegistrPage }/>
      <Route path="/todolist" component={ TodoListPage }/>
      <Route path="/taskblocks" component={ BlocksPage }/>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
