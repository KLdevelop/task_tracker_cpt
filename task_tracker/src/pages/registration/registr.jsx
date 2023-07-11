import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const RegistrPage = () => {
    return (
        <div className="form">
            <form>
                <div className="text">
                    <div className="Task"><span class="orange">Task</span>Tracker</div>
                    <h6>Регистрация</h6>
                </div>
                <input className="int" type="text" name="login" placeholder="Придумайте логин"/>
                <input className="int" type="password" name="pass" placeholder="Придумайте пароль"/>
                <p className="laziness"></p>
                <p className="btn1 btn--blue">Зарегистрироваться</p>
                <p className="reg">
                    У вас есть аккаунт? - <Link 
                                            to="/authorization"
                                            className="open txt1"
                                            >
                                                Авторизируйтесь
                                            </Link>!
                </p>
            </form>
        </div>
    )
}
export default RegistrPage;