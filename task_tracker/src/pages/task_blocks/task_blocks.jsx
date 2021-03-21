import React, { Component } from 'react';
import Xarrow from 'react-xarrows';
import './task_blocks.scss';

class BlocksPage extends Component {
    state = {
        arrStateLogin: true,
        title: "Задача",
        blocks: [],
        onMoveBlock: false,
        dx: 0,
        dy: 0,
        selBlockId: 0,
        drawArrow: false,
        fromBlock: '',
        arrows: []
    };

    getRandomInt = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    getRandomColor = () => {
        const colors = ['#19191A', '#A5F469', '#005FF9', '#FF7A00', '#DF15A6'];
        return colors[this.getRandomInt(4)];
    }
      

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
                left: '50px',
                background: this.getRandomColor()
            },
            isSelected: false
        });
        this.setState({
            blocks
        });
    };

    onBlockDown = (id, e) => {
        let dx = e.clientX - e.target.offsetLeft;
        let dy = e.clientY - e.target.offsetTop;
        const [width, height] = [e.target.offsetWidth, e.target.offsetHeight];
        if (dx > width) dx = Math.floor(width / 2);
        if (dy > height) dy = Math.floor(height / 2);
        this.setState({
            onMoveBlock: true,
            dx,
            dy,
            selBlockId: id
        });
    };

    onBlockMove = (e) => {
        const { blocks, onMoveBlock, dx, dy, selBlockId } = this.state;
        const deltaX = e.clientX - dx;
        const deltaY = e.clientY - dy;
        if (onMoveBlock && deltaX >= 0 && deltaY > 110) {
            blocks[selBlockId].styles = {
                top: deltaY + "px",
                left: deltaX + "px",
                background: blocks[selBlockId].styles.background
            };
            this.setState({
                blocks
            });
        }
    };

    onBlockUp = () => {
        this.setState({
            onMoveBlock: false,
            dx: 0,
            dy: 0
        });
    };

    onDrawArrowClick = () => {
        let { drawArrow, blocks } = this.state;
        if (drawArrow) {
            blocks = blocks.map((block) => {
                block.isSelected = false;
                return block;
            });
            this.setState({
                blocks
            });
        }
        this.setState({
            drawArrow: !drawArrow
        });
    };

    onBlockClick = (id) => {
        const { drawArrow, fromBlock, arrows, blocks } = this.state;
        if (drawArrow) {
            if (fromBlock != '' && id != fromBlock) {
                arrows.push({
                    start: fromBlock,
                    end: id
                });
                blocks[+fromBlock.replace('block', '')].isSelected = false;
                this.setState({
                    arrows,
                    fromBlock: '',
                    blocks
                });
            }
            else if (id == fromBlock) {
                blocks[+fromBlock.replace('block', '')].isSelected = false;
                this.setState({
                    blocks,
                    fromBlock: ''
                });
            }
            else {
                blocks[+id.replace('block', '')].isSelected = true;
                this.setState({
                    fromBlock: id,
                    blocks
                });
            }
        }
    };

    render() {
        const { title, arrStateLogin, blocks, arrows, drawArrow } = this.state;
        return (
            <div className="blocksPage" onMouseUp={ this.onBlockUp }>
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
                            <button onClick={ this.onDrawArrowClick } 
                                className={ drawArrow ? "activeDrawArrow" : "drawArrow"}
                            >
                                Изменить
                            </button>
                        </div>
                    </div>
                </header>
                <div className="blocksCont" onMouseMove={ (e) => this.onBlockMove(e) }>
                    <>
                        { blocks.map((block, id) => 
                            <div key={ `block${ id }` }
                                id={ `block${ id }` }
                                className={ blocks[id].isSelected ? "blockSel" : "block"}
                                onClick={ () => this.onBlockClick(`block${ id }`) }
                                onMouseDown={ (e) => this.onBlockDown(id, e) }
                                style={ block.styles }
                            >
                                <h3>{ block.title }</h3>
                                <p>{ block.status }</p>
                            </div>
                        ) }
                        { arrows.map((arrow, id) => <Xarrow key={ `arrow${ id }` } 
                            start={ arrow.start } 
                            end={ arrow.end }
                            color="black"
                            strokeWidth={2}
                        />) }
                    </>
                </div>
            </div>
        );
    }
}

export default BlocksPage; 