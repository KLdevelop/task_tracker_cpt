import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const AuthPage = () => {
    return (
        <div className="form">
            <div className="container">
                <div class="text">
                    <div class="Task"><span class="orange">Task</span>Tracker</div>
                    <h6>Авторизация</h6>
                </div>
                <form>
                    <input className="int" type="text" name="login" placeholder="Логин"/>
                    <input className="int" type="password" name="pass" placeholder="Пароль"/>
                    <div class="checkbox">
                        <input className="checkbox__input" type="checkbox" id="check"/> 
                        <label className="checkbox__label" for="check">Запомнить данные для входа</label>
                    </div><br/>   
                    <Link className="btn1 btn--blue" to="/">Войти</Link>
                    <span className="txt" >Забыли пароль?</span>
                    <p className="reg">
                        У вас нет аккаунта? - <Link 
                                                to="/registration"
                                                className="txt1"
                                                >
                                                Зарегистрируйтесь!
                                                </Link>!
                    </p>
                </form>
            </div>
        </div>
    )
}
export default AuthPage;