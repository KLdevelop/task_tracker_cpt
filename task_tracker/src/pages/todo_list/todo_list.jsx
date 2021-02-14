import React, { Component } from 'react';
import './todo_list.scss';

class TodoListPage extends Component {
    render() {
        return(
            <div className="todoPage">
                <header>
                    <h1>Task<span>Tracker</span></h1>
                    <h2>Login</h2>
                    <button className="bttn">Создать задачу</button>
                </header>
            </div>
        );
    }
}

export default TodoListPage;