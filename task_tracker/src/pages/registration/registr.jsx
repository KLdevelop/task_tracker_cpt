import React from 'react';
import "./style.css";

class RegistrPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onAuthClick = () => {
        this.props.history.push('/authorization');
    };

    render() {
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
                    <a className="btn1 btn--blue">Зарегистрироваться</a>
                    <p className="reg">
                        У вас есть аккаунт? - <a className="open txt1" onClick={ this.onAuthClick }>авторизируйтесь</a>!
                    </p>
                </form>
            </div>
        )
    }
}
export default RegistrPage;