import React, { Component } from 'react';
import './task_blocks.scss';

class BlocksPage extends Component {
    state = {
        arrStateLogin: true,
        title: "Задача"
    };

    onLoginClick = () => {
        const { arrStateLogin } = this.state;
        this.setState({
            arrStateLogin: !arrStateLogin
        });
    };

    render() {
        const { title, arrStateLogin } = this.state;
        return (
            <div className="blocksPage">
                <header>
                    <div className="headCont">
                        <h1>Task<span>Tracker</span></h1>
                        <h3>{ title }</h3>
                        <div>
                            <h2 onClick={ this.onLoginClick }>
                                <>
                                    <div className={ "sArrow" + (arrStateLogin ? "U" : "D") }/>
                                    Login
                                </>
                            </h2>
                            <button className="bttn">Создать задачу</button>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default BlocksPage; 