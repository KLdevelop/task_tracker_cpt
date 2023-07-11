import React, { Component } from 'react';
import Modal from 'react-modal';

import './todo_list.scss';

class TodoListPage extends Component {
    componentDidMount() {
        Modal.setAppElement("#tPage");
        this.sortByName(false);
    }

    state = {
        titleFilt: '',
        periodStart: 'дд.мм.гггг',
        periodEnd: 'дд.мм.гггг',
        periodFilt: false,
        tasks: [
            {
                name: "Разработка приложения",
                changed: "25.10.2020",
                status: "14 из 20",
                percent: "70%",
                id: 0
            },
            {
                name: "Разработка программного интерфейса",
                changed: "24.09.2020",
                status: "Выполнен",
                percent: "100%",
                id: 1
            }
        ],
        arrStateLogin: true,
        arrStateTitle: true,
        arrStatePeriod: true,
        arrStateShow: false,
        arrStateInfo: false,
        newTask: false,
        taskName: '',
        sortBy: 'name',
        sortReverse: false
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
        let { taskName, tasks, sortBy, sortReverse } = this.state;
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
            percent: '0%',
            id: tasks.length
        });

        this.setState({
            tasks: tasks,
            taskName: '',
            newTask: false
        });

        this.switchSortFun(sortBy)(sortReverse);
    }

    onRedactClick = () => {
        this.props.history.push('/taskblocks');
    }

    sortByName = (sortReverse) => {
        const { tasks } = this.state;

        tasks.sort((t1, t2) => {
            if (t1.name.toLocaleLowerCase() < t2.name.toLocaleLowerCase() ) return -1;
            else if (t1.name.toLocaleLowerCase() > t2.name.toLocaleLowerCase()) return 1;
            else if (t1.id > t2.id) return 1;
            else return -1;
        });

        if (sortReverse) tasks.reverse();

        this.setState({
            tasks
        });
    };

    sortByChange = (sortReverse) => {
        const { tasks } = this.state;

        tasks.sort((t1, t2) => {
            const [day1, month1, year1] = t1.changed.split('.', 3);
            const ind1 = +year1 * 10000 + +month1 * 100  + +day1;
            const [day2, month2, year2] = t2.changed.split('.', 3);
            const ind2 = +year2 * 10000 + +month2 * 100  + +day2;
            if (ind1 < ind2) return -1;
            else if (ind1 > ind2) return 1;
            else if (t1.id > t2.id) return -1;
            else return 1;
        });

        if (sortReverse) tasks.reverse();

        this.setState({
            tasks
        });
    };

    sortByStatus = (sortReverse) => {
        const { tasks } = this.state;

        tasks.sort((t1, t2) => {
            const ind1 = +t1.percent.replace('%', '');
            const ind2 = +t2.percent.replace('%', '');
            if (ind1 < ind2) return -1;
            if (ind1 > ind2) return 1;
            else if (t1.id > t2.id) return -1;
            else return 1;
        });

        if (sortReverse) tasks.reverse();

        this.setState({
            tasks
        });
    };

    switchSortFun = (sortType) => {
        let sortFun;

        switch (sortType) {
            case 'name':
                sortFun = this.sortByName;
                break;
            case 'change':
                sortFun = this.sortByChange;
                break;
            case 'status':
                sortFun = this.sortByStatus;
                break;
            default:
                break;
        }

        return sortFun;
    };

    onSortClick = (sortType) => {
        const { sortReverse, sortBy } = this.state;

        this.setState({
            sortBy: sortType,
            sortReverse: sortBy === sortType ? !sortReverse : false
        });

        let sortFun = this.switchSortFun(sortType);

        sortFun(sortBy === sortType ? !sortReverse : false);
    };

    onPeriodStartChange = (e) => {
        const { periodEnd } = this.state;

        this.setState({
            periodStart: e.target.value,
            periodFilt: e.target.value !== 'дд.мм.гггг' && 
                periodEnd !== 'дд.мм.гггг' && 
                this.getPeriodNum(e.target.value) <=
                this.getPeriodNum(periodEnd)
        });
    };

    onPeriodEndChange = (e) => {
        const { periodStart } = this.state;

        this.setState({
            periodEnd: e.target.value,
            periodFilt: periodStart !== 'дд.мм.гггг' && 
                e.target.value !== 'дд.мм.гггг' && 
                this.getPeriodNum(periodStart) <=
                this.getPeriodNum(e.target.value)
        });
    };

    getPeriodNum = (date) => {
        const [year, month, day] = date.split('-', 3);
        return +year * 10000 + +month * 100 + +day;
    };

    getDateNum = (date) => {
        const [day, month, year] = date.split('.', 3);
        return +year * 10000 + +month * 100 + +day;
    }

    render() {
        const { tasks, titleFilt, periodStart, 
            periodEnd, periodFilt, arrStateInfo, 
            arrStatePeriod, arrStateLogin, arrStateShow,
            arrStateTitle, newTask, taskName, 
            sortBy, sortReverse } = this.state;

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
                            <button className="bttn" onClick={ this.onNewTaskClick }>
                                Создать задачу
                            </button>
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
                                    <input 
                                        type="date" 
                                        value={ periodStart } 
                                        onChange={ this.onPeriodStartChange }
                                    />
                                </div>
                                <div className="horLine"/>
                                <div className="perInp">
                                    <input 
                                        type="date" 
                                        value={ periodEnd } 
                                        onChange={ this.onPeriodEndChange }
                                    />
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
                        <div className="topTable">
                            <h3 className="greyH" onClick={ () => this.onSortClick("name") } 
                                style={{color: sortBy === "name" && "#0047FF"}}
                            >
                                Имя
                                { sortBy === "name" && <div className={ "sArrow" + (sortReverse ? "U" : "D") }/> }
                            </h3>
                            <h3 className="greyH" onClick={ () => this.onSortClick("change") }
                                style={{color: sortBy === "change" && "#0047FF"}}
                            >
                                Изменен
                                { sortBy === "change" && <div className={ "sArrow" + (sortReverse ? "U" : "D") }/> }
                            </h3>
                            <h3 className="greyH" onClick={ () => this.onSortClick("status") }
                                style={{color: sortBy === "status" && "#0047FF"}}
                            >
                                Статус
                                { sortBy === "status" && <div className={ "sArrow" + (sortReverse ? "U" : "D") }/> }
                            </h3>
                            <h3/>
                        </div>
                        <hr/>
                        {
                            tasks.map((task, id) => {
                                return (
                                    task.name.toLocaleLowerCase().startsWith(titleFilt.toLocaleLowerCase()) &&
                                    (periodFilt ? (this.getDateNum(task.changed) >= this.getPeriodNum(periodStart) &&
                                    this.getDateNum(task.changed) <= this.getPeriodNum(periodEnd)) : true) &&
                                    <>
                                        <div key={ id }>
                                            <h3>{ task.name }</h3>
                                            <h3 className="greyH">{ task.changed }</h3>
                                            <h3>
                                                { task.status }
                                                <span className="greyH">
                                                    { task.percent !== '100%' ? ` ${ task.percent }` : '' }
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