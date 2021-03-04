import React, { Component } from 'react';
import './todo_list.scss';

class TodoListPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        titleFilt: '',
        sortChecked: 'createtime',
        periodStart: 'дд.мм.гггг',
        periodEnd: 'дд.мм.гггг',
        tasks: [
            {
                name: "Разработка программного интерфейса",
                changed: "Пон. 14:30",
                status: "14 из 20",
                percent: "70%"
            },
            {
                name: "Разработка программного интерфейса",
                changed: "24.09.2020",
                status: "Выполнен",
                percent: "100%"
            }
        ],
        arrStateLogin: true,
        arrStateTitle: true,
        arrStatePeriod: true,
        arrStateSort: true,
        arrStateShow: false,
        arrStateInfo: false
    };

    onRadioChange = (e) => {
        this.setState({
            sortChecked: e.target.value
        });
    };

    onTitleChange = (e) => {
        this.setState({
            titleFilt: e.target.value
        });
    };

    onLoginClick = () => {
        const { arrStateLogin } = this.state;
        this.setState({
            arrStateLogin: !arrStateLogin
        });
    };

    onTitleClick = () => {
        const { arrStateTitle } = this.state;
        this.setState({
            arrStateTitle: !arrStateTitle
        });
    };

    onPeriodClick = () => {
        const { arrStatePeriod } = this.state;
        this.setState({
            arrStatePeriod: !arrStatePeriod
        });
    };

    onSortClick = () => {
        const { arrStateSort } = this.state;
        this.setState({
            arrStateSort: !arrStateSort
        });
    };

    onShowClick = () => {
        const { arrStateShow } = this.state;
        this.setState({
            arrStateShow: !arrStateShow
        });
    };

    onInfoClick = () => {
        const { arrStateInfo } = this.state;
        this.setState({
            arrStateInfo: !arrStateInfo
        });
    };

    onNewTaskClick = () => {
        this.props.history.push('/taskblocks');
    };

    render() {
        const { tasks, sortChecked, titleFilt, arrStateInfo, arrStatePeriod, arrStateLogin, arrStateShow,
            arrStateTitle, arrStateSort } = this.state;
        return(
            <div className="todoPage">
                <header>
                    <div className="headCont">
                        <h1>Task<span>Tracker</span></h1>
                        <div>
                            <h2 onClick={ this.onLoginClick }>
                                <>
                                    <div className={ "sArrow" + (arrStateLogin ? "U" : "D") }/>
                                    Login
                                </>
                            </h2>
                            <button className="bttn" onClick={ this.onNewTaskClick }>Создать задачу</button>
                        </div>
                    </div>
                </header>
                <h1 className="todoH">Список задач</h1>
                <div className="mainCont">
                    <div className="leftFilt">
                        <div className="titleFilt">
                            <h2 onClick={ this.onTitleClick }>
                                <>
                                    <div className={ "sArrow" + (arrStateTitle ? "U" : "D") }/>
                                    Название
                                </>
                            </h2>
                            { arrStateTitle && <div className="titleInp">
                                <div className="loupe"/>
                                <input value={ titleFilt } onChange={ this.onTitleChange }/>
                            </div> }
                        </div>
                        <div className="periodFilt">
                            <h2 onClick={ this.onPeriodClick }>
                                <>
                                    <div className={ "sArrow" + (arrStatePeriod ? "U" : "D") }/>
                                    Период
                                </>
                            </h2>
                            { arrStatePeriod &&<>
                                <div className="perInp">
                                    <input type="date"/>
                                </div>
                                <div className="horLine"/>
                                <div className="perInp">
                                    <input type="date"/>
                                </div>
                            </> }
                        </div>
                        <div className="showFilt">
                            <h2 onClick={ this.onShowClick }>
                                <>
                                    <div className={ "sArrow" + (arrStateShow ? "U" : "D") }/>
                                    Показывать
                                </>
                            </h2>
                        </div>
                        <div className="infoFilt">
                            <h2 onClick={ this.onInfoClick }>
                                <>
                                    <div className={ "sArrow" + (arrStateInfo ? "U" : "D") }/>
                                    Информация
                                </>
                            </h2>
                        </div>
                    </div>
                    <hr/>
                    <div className="rightTable">
                        <div>
                            <h3 className="greyH">Имя</h3>
                            <h3 className="greyH">Изменен</h3>
                            <h3 className="greyH">Статус</h3>
                            <h3/>
                        </div>
                        <hr/>
                        {
                            tasks.map((task) => {
                                return (
                                    <>
                                        <div>
                                            <h3>{ task.name }</h3>
                                            <h3 className="greyH">{ task.changed }</h3>
                                            <h3>
                                                { task.status }
                                                <span className="greyH">
                                                    { task.percent != '100%' ? ` ${ task.percent }` : '' }
                                                </span>
                                            </h3>
                                            <h3 className="blueH">Редактировать</h3>
                                        </div>
                                        <hr/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListPage;