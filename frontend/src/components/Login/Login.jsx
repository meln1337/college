import React, { useState } from 'react';
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';
import './Login.css';
import { setAuth } from '../../redux/actions/auth.actions';

const Login = ({ setAuth }) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const onChange = e => setForm({ ...form, [e.target.id]: e.target.value });

    return (
        <div className="login">=
            <div className="container">
                <h1 className="head-text">Вхід до особистого кабінету</h1>
                <div className="login__inputs">
                    <div className="input">
                        <span>Пошта</span>
                        <input type="text" id="email" className="input-login" placeholder="Пошта..." onChange={onChange} value={form.email} />
                    </div>
                    <div className="input">
                        <span>Пароль</span>
                        <input type="text" id="password" className="input-password" placeholder="Пароль..." onChange={onChange} value={form.password} />
                    </div>
                    <button onClick={() => setAuth(form)} className="login-button" type="submit">Увійти</button>
                </div>
                {/* <Recaptcha
                    sitekey="6LevuQEVAAAAAFYM5DZd1ALAL5V1Bxwfw7MWjwIG"
                /> */}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setAuth: user => setAuth(user)
}

export default connect(null, mapDispatchToProps)(Login);