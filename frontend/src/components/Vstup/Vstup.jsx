import React from 'react'
import './Vstup.css'
import sun from '../../public/sun.svg'
import brain from '../../public/brain.svg'
import timer from '../../public/timer.svg'
import documentSvg from '../../public/document.svg'
import punkt from '../../public/punkt.svg'
import posylannia from '../../public/ssilka.svg'
import { Link } from 'react-router-dom'

export default () => (
    <div className="vstup">
        <div className="container">
            <h1 className="vstup-text head-text">Вступ на програми молодшого спеціаліста</h1>
            <p className="vstup-desc sub-main-text">Харківський патентно- комп’ютерний коледж запрошує Вас продовжити навчання в нашому навчальному закладі. Ми пропонуємо Вам отримати професії, які користуються великим попитом в розробці програмного забезпечення та комп’ютерних – провідних галузях економіки нашої держави.</p>
            <div className="padd-block add-block">
                <p className="sub-main-text add-info tac">За додатковою інформацією, будь ласка, звертайтесь до розділу <Link to="/contacts">«Контакти»</Link> або завітайте на <Link to="/open-day">«День відкритих дверей»</Link></p>
            </div>
            <p className="vstup-desc sub-main-text">Всім, хто прийде до нас на навчання, ми гарантуємо якісну загальноосвітню, загальнотехнічну та професійну підготовку, що дасть змогу кожному стати кваліфікованим, конкурентоспроможним робітником та майстром своєї справи.</p>
            <div className="vstup-icon-block">
                <div className="padd-icon">
                    <div className="front">
                        <img src={sun} alt="icons" />
                        <p className="icon-desc tac">Форма навчання</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">Денна форма навчання, пари проходять у коледжі</div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={brain} alt="icons" />
                        <p className="icon-desc tac">Спеціальності</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            “121”- Інженерія програмного забезпечення
                            “123” - Комп’ютерна інженерія
                        </div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={timer} alt="icons" />
                        <p className="icon-desc tac">Тривалість навчання</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            Навчання триває 4 академічні роки
                        </div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={documentSvg} alt="icons" />
                        <p className="icon-desc tac">Правила прийому</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            З правилами прийому ви може ознайомитися на сторінці <Link to="/vstup">"Вступ на Програму молодшого спеціаліста"</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className="vstup-desc idcons sub-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            <div className="padd-block">
                <h3 className="vstup-block-head-text teaching-in-college">Навчання в коледжі можливе за спеціальностями</h3>
                <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />121 «Інженерія програмного забезпечення» <img className="posylannia" src={posylannia} alt="posylannia" /><span>Вартість навчання</span></p>
                <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />123 «Комп'ютерна інженерія» <img className="posylannia" src={posylannia} alt="posylannia" /><span>Вартість навчання</span></p>
            </div>
            <h1 className="vstup-text sub-head-text">Графік проведення вступної компанії</h1>
            <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />Денна форма навчання (на основі базової та повної загальної середньої освіти)</p>
            <p className="vstup-sub-spec">з 1 липня до 2 серпня 2020 року</p>
            <div className="padd-block wanna-go-to-college">
                <h3 className="vstup-block-head-text tac">Бажаєте вступити до коледжу?</h3>
                <p className="tac go-to-ab">Відвідайте розділ «Абітурієнтам» щоб дізнатися як вступити до коледжу, ознайомитися з правиламу прийому та документацією</p>
                <Link className="go-to-button" to="/entrants">Перейти</Link>
            </div>
        </div>
    </div>
)

