import React from 'react';
import './Login.css';
import Recaptcha from 'react-recaptcha';

const callback = function () {
    console.log('Done!!!!');
};

const verifyCallback = function (response) {
    console.log(response);
};

export default () => (
    <div className="login">=
        <div className="container">
            <h1 className="head-text">Вхід до особистого кабінету</h1>
            <div className="login__inputs">
                <div className="input">
                    <span>Логін</span>
                    <input type="text" className="input-login" placeholder="Логін..." />
                </div>
                <div className="input">
                    <span>Пароль</span>
                    <input type="text" className="input-password" placeholder="Пароль..." />
                </div>
            </div>
            <Recaptcha
                sitekey="6LevuQEVAAAAAFYM5DZd1ALAL5V1Bxwfw7MWjwIG"
            />
        </div>
    </div>
)