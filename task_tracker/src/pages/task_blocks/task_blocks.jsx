import React, { Component } from 'react';
import './task_blocks.scss';

class BlocksPage extends Component {
    state = {
        arrStateLogin: true,
        title: "Задача",
        blocks: [],
        onMoveBlock: false,
        dx: 0,
        dy: 0,
        selBlockId: 0
    };

    onLoginClick = () => {
        const { arrStateLogin } = this.state;
        this.setState({
            arrStateLogin: !arrStateLogin
        });
    };

    onNewBlockClick = (title, status) => {
        let { blocks } = this.state;
        blocks.push({
            title,
            status,
            styles: {
                top: '150px',
                left: '50px'
            }
        });
        this.setState({
            blocks
        });
    };

    onBlockDown = (id, e) => {
        this.setState({
            onMoveBlock: true,
            dx: e.clientX - e.target.offsetLeft,
            dy: e.clientY - e.target.offsetTop,
            selBlockId: id
        });
    };

    onBlockMove = (e) => {
        const { blocks, onMoveBlock, dx, dy, selBlockId } = this.state;
        const deltaX = e.clientX - dx;
        const deltaY = e.clientY - dy;
        if (onMoveBlock && deltaX > 0 && deltaY > 110) {
            blocks[selBlockId].styles = {
                top: deltaY + "px",
                left: deltaX + "px"
            };
            this.setState({
                blocks
            });
        }
    };

    onBlockOut = (id, e) => {
        const { blocks, onMoveBlock, dx, dy } = this.state;
        const deltaX = e.clientX - dx;
        const deltaY = e.clientY - dy;
        if (onMoveBlock && deltaX > 0 && deltaY > 110) {
            blocks[id].styles = {
                top: deltaY + "px",
                left: deltaX + "px"
            };
            this.setState({
                blocks
            });
        }
    };

    onBlockUp = () => {
        this.setState({
            onMoveBlock: false
        });
    };

    render() {
        const { title, arrStateLogin, blocks } = this.state;
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
                            <button className="bttn" 
                                onClick={ () => this.onNewBlockClick('Блок', '10%') }
                            >
                                Добавить блок
                            </button>
                        </div>
                    </div>
                </header>
                <div className="blocksCont" onMouseMove={ (e) => this.onBlockMove(e) } onMouseUp={ this.onBlockUp }>
                    {
                        blocks.map((block, id) => 
                            <div key={ id }
                                onMouseDown={ (e) => this.onBlockDown(id, e) }
                                onMouseOut={ (e) => this.onBlockOut(id, e) }
                                onMouseUp={ this.onBlockUp }
                                style={ block.styles }
                            >
                                <h3>{ block.title }</h3>
                                <p>{ block.status }</p>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default BlocksPage; 