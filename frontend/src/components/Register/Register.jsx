import React, { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import './Register.css';

export default () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        surname: ''
    });

    const onChange = e => setForm({ ...form, [e.target.id]: e.target.value });

    return (
        <div className="login">=
            <div className="container">
                <h1 className="head-text">Вхід до особистого кабінету</h1>
                <div className="login__inputs">
                    <div className="input">
                        <span>Ім'я</span>
                        <input type="text" id="name" className="input-login" placeholder="Ім'я..." onChange={onChange} value={form.name} />
                    </div>
                    <div className="input">
                        <span>Прізвище</span>
                        <input type="text" id="surname" className="input-login" placeholder="Прізвище..." onChange={onChange} value={form.surname} />
                    </div>
                    <div className="input">
                        <span>Пошта</span>
                        <input type="text" id="email" className="input-login" placeholder="Пошта..." onChange={onChange} value={form.email} />
                    </div>
                    <div className="input">
                        <span>Пароль</span>
                        <input type="text" id="password" className="input-password" placeholder="Пароль..." onChange={onChange} value={form.password} />
                    </div>
                </div>
                <Recaptcha
                    sitekey="6LevuQEVAAAAAFYM5DZd1ALAL5V1Bxwfw7MWjwIG"
                />
            </div>
        </div>
    )
}