import React, { Component } from 'react';
import './todo_list.scss';

class TodoListPage extends Component {
    state = {
        titleFilt: '',
        sortChecked: 'createtime',
        periodStart: 'дд.мм.гггг',
        periodEnd: 'дд.мм.гггг',
        tasks: [
            {
                name: "Разработка программного интерфейса",
                changed: "Пон. 14:30",
                status: "14 из 20 70%"
            },
            {
                name: "Разработка программного интерфейса",
                changed: "24.09.2020",
                status: "Выполнен"
            }
        ]
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

    render() {
        const { tasks, sortChecked, titleFilt } = this.state;
        return(
            <div className="todoPage">
                <header>
                    <div className="headCont">
                        <h1>Task<span>Tracker</span></h1>
                        <div>
                            <h2>
                                <>
                                    <div className="sArrow"/>
                                    Login
                                </>
                            </h2>
                            <button className="bttn">Создать задачу</button>
                        </div>
                    </div>
                </header>
                <h1 className="todoH">Список задач</h1>
                <div className="mainCont">
                    <div className="leftFilt">
                        <div className="titleFilt">
                            <h2>
                                <>
                                    <div className="sArrow"/>
                                    Название
                                </>
                            </h2>
                            <div className="titleInp">
                                <div className="loupe"/>
                                <input value={ titleFilt } onChange={ this.onTitleChange }/>
                            </div>
                        </div>
                        <div className="periodFilt">
                            <h2>
                                <>
                                    <div className="sArrow"/>
                                    Период
                                </>
                            </h2>
                            <div className="perInp">
                                <input type="date"/>
                            </div>
                            <div className="horLine"/>
                            <div className="perInp">
                                <input type="date"/>
                            </div>
                        </div>
                        <div className="sortFilt">
                            <h2>
                                <>
                                    <div className="sArrow"/>
                                    Сортировать по
                                </>
                            </h2>
                            <div className="radioSort">
                                <div>
                                    <input id="createTimeF" type="radio" name="sort" value="createtime"
                                        checked={ sortChecked == 'createtime' }
                                        onChange={ this.onRadioChange }/>
                                    <label htmlFor="createTimeF">Времени создания</label>
                                </div>
                                <div>
                                    <input id="nameF" type="radio" name="sort" value="name"
                                        checked={ sortChecked == 'name' }
                                        onChange={ this.onRadioChange }/>
                                    <label htmlFor="nameF">Имени</label>
                                </div>
                                <div>
                                    <input id="statusF" type="radio" name="sort" value="status"
                                        checked={ sortChecked == 'status' }
                                        onChange={ this.onRadioChange }/>
                                    <label htmlFor="statusF">Статусу</label>
                                </div>
                            </div>
                        </div>
                        <div className="showFilt">
                            <h2>
                                <>
                                    <div className="sArrow"/>
                                    Показывать
                                </>
                            </h2>
                        </div>
                        <div className="infoFilt">
                            <h2>
                                <>
                                    <div className="sArrow"/>
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
                                            <h3>{ task.status }</h3>
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