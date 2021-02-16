import React, { Component } from 'react';
import './todo_list.scss';

class TodoListPage extends Component {
    render() {
        return(
            <div className="todoPage">
                <header>
                    <h1>Task<span>Tracker</span></h1>
                    <h2>
                        <>
                            <div className="sArrow"/>
                            Login
                        </>
                    </h2>
                    <button className="bttn">Создать задачу</button>
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
                                <input/>
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
                                    <input id="createTimeF" type="radio" name="sort" value="createtime"/>
                                    <label htmlFor="createTimeF">Времени создания</label>
                                </div>
                                <div>
                                    <input id="nameF" type="radio" name="sort" value="name"/>
                                    <label htmlFor="nameF">Имени</label>
                                </div>
                                <div>
                                    <input id="statusF" type="radio" name="sort" value="status"/>
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

                    <div className="rightTable">
                        <div>
                            <h3>Имя</h3>
                            <h3>Изменен</h3>
                            <h3>Статус</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListPage;