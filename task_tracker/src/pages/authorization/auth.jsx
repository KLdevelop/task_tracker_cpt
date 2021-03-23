import React from 'react';
import "./style.css";

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onRegClick = () => {
        this.props.history.push('/registration');
    };

    onEnterClick = () => {
        this.props.history.push('/');
    };

    render() {
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
                        <a className="btn1 btn--blue" onClick={ this.onEnterClick }>Войти</a>
                        <a className="txt" >Забыли пароль?</a>
                        <p className="reg">
                            У вас нет аккаунта? - <a className="open txt1" onClick={ this.onRegClick }>зарегистрируйтесь</a>!
                        </p>
                    </form>
                </div>
            </div>  
        )
    }
}
export default AuthPage;