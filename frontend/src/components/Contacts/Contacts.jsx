import React from 'react'
import './Contacts.css'

export default () => {
    return (
        <div className="contacts">
            <div className="container">
                <h1 className="head-text">Контакти</h1>
                <div className="red-padd-block">
                    <p className="sub-head-text">Зв'яжітся з нами сьогодні</p>
                    <p className="main-text">У вас є питання, у нас відповідь. Просто подзвоніть за вказаними номерами телефону, крім вихідних та святкових днів</p>
                </div>
                <h2 className="sub-head-text">Наша адреса</h2>
                <h4 className="main-text">61002, м.Харків, вул. Ярослава Мудрого 18</h4>
                <h2 className="sub-head-text">Зв'язок за телефонами</h2>
                <h4 className="main-text">(050) 700-48-15</h4>
                <h4 className="main-text">(050) 700-48-15</h4>
                <h2 className="sub-head-text">Робочі години</h2>
                <h4 className="main-text">Понеділок- П'ятниця з 8:00 до 16:30</h4>
                <div className="contacts-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.305041021312!2d36.24226703208847!3d50.00563753299264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0dc50500105%3A0xd04c4435619d3fe5!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQv9Cw0YLQtdC90YLQvdC-LdC60L7QvNC_0YzRjtGC0LXRgNC90YvQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2sua!4v1585130810418!5m2!1sru!2sua" width="100%" height="100%" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        </div>
    )

}

