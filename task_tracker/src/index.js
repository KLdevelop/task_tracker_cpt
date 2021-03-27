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
      <Route exact path="/" component={ TodoListPage } key={ 0 }/>
      <Route path="/authorization" component={ AuthPage } key={ 1 }/>
      <Route path="/registration" component={ RegistrPage } key={ 2 }/>
      <Route path="/todolist" component={ TodoListPage } key={ 3 }/>
      <Route path="/taskblocks" component={ BlocksPage }key={ 4 }/>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
