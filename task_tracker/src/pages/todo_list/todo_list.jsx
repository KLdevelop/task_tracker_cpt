import React, { Component } from 'react';
import Modal from 'react-modal';
import './todo_list.scss';

class TodoListPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Modal.setAppElement("#tPage");
    }

    state = {
        titleFilt: '',
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
        arrStateShow: false,
        arrStateInfo: false,
        newTask: false,
        taskName: ''
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
        this.props.history.push('/authorization');
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
        const { newTask } = this.state;
        this.setState({
            newTask: !newTask
        });
    };
    
    onTaskNameChange = (e) => {
        this.setState({
            taskName: e.target.value
        });
    };

    onAddTaskClick = () => {
        let { taskName, tasks } = this.state;
        const date = new Date();
        let month = date.getMonth();
        if (+month + 1 < 10) month = '0' + (+month + 1);
        else month = +month + 1;
        let day = date.getDate();
        if (+day < 10) day = '0' + day;
        tasks.push({
            name: taskName,
            changed: `${day}.${month}.${date.getFullYear()}`,
            status: '',
            percent: '0%'
        });
        this.setState({
            tasks: tasks,
            taskName: '',
            newTask: false
        });
    }

    onRedactClick = () => {
        this.props.history.push('/taskblocks');
    }

    render() {
        const { tasks, titleFilt, arrStateInfo, arrStatePeriod, arrStateLogin, arrStateShow,
            arrStateTitle, newTask, taskName } = this.state;
        return(
            <>
            <Modal className="modalTask" isOpen={ newTask } onRequestClose={ this.onNewTaskClick }
                overlayClassName="overlayModal">
                <div className="modalCont">
                    <h1>Название задачи</h1>
                    <div>
                        <input onChange={ this.onTaskNameChange } value={ taskName }/>
                    </div>
                    <button className="bttn" onClick={ this.onAddTaskClick }>
                        Создать
                    </button>
                </div>
            </Modal>
            <div className="todoPage" id="tPage">
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
                            tasks.map((task, id) => {
                                return (
                                    <>
                                        <div key={ id }>
                                            <h3>{ task.name }</h3>
                                            <h3 className="greyH">{ task.changed }</h3>
                                            <h3>
                                                { task.status }
                                                <span className="greyH">
                                                    { task.percent != '100%' ? ` ${ task.percent }` : '' }
                                                </span>
                                            </h3>
                                            <h3 id="redact" className="blueH" onClick={ this.onRedactClick }>
                                                Редактировать
                                            </h3>
                                        </div>
                                        <hr/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default TodoListPage;