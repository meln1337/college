import React from 'react'
import { Link } from 'react-router-dom'
import './Structure.css'
const director = './001 (1).jpg'
const nau = './Наугольна.jpg'
const net = './Photo_Net_ZhNN.jpg'
const photo1  = './002.jpg'
const photo2  = './003.jpg'
const photo3  = './005.jpg'
const photo4  = './006.jpg'
const photo5  = './007.jpg'
const photo6  = './008.jpg'
const photo7  = './0010.jpg'
const photo8  = './0011.jpg'
const photo9  = './0012.jpg'
const photo10 = './0013.jpg'
const photo11 = './0016.jpg'
const photo12 = './0017.jpg'
const photo13 = '/0018.jpg'
const photo14 = './0019.jpg'
const photo15 = './0020.jpg'
const fur = './Fursov2.jpg'
const gry = './Gryshenko.jpg'
const kos = './Kosturina.jpg'
const kov = './LRM_EXPORT_199738343304520_20190604_211343484.jpeg'
const kor = './LRM_EXPORT_199997970777411_20190604_211803111.jpeg'
const sal = './LRM_EXPORT_200001587526485_20190604_211806728.jpeg'
const pod = './Poddyakonova.jpg'
const gam = './Gamaliy.jpg'
const adminPhoto1 = './admin-photo1.png'
const adminPhoto2 = './admin-photo2.png'
const adminPhoto3 = './admin-photo3.png'

export default () => {
    return (
        <div className="structure">
            <div className="container">
                <h1 className="head-text">Cтруктура коледжу</h1>
                <div className="admin-of-college-padd-block padd-block">
                    <h2 className="sub-head-text">Адміністрація коледжу</h2>
                    <div className="admin-of-college-grid">
                        <div className="admin-icon director">
                            <img className="director" src={director} alt="director" />
                            <p className="sub-main-text">Луценко Сергій Степанович</p>
                            <p className="sub-text">Луценко Сергій Степанович</p>
                        </div>
                        <div className="admin-icon admin-icon1">
                            <img src={nau} alt="adminPhoto1" />
                            <p className="sub-main-text">Наугольна</p>
                            <p className="sub-text">заступник директора</p>
                        </div>
                        <div className="admin-icon admin-icon2">
                            <img src={net} alt="adminPhoto2" />
                            <p className="sub-main-text">Ім'я Прізвище По-батькові</p>
                            <p className="sub-text">заступник директора з чогось</p>
                        </div>
                        <div className="admin-icon admin-icon3">
                            <img src={adminPhoto3} alt="adminPhoto3" />
                            <p className="sub-main-text">Ім'я Прізвище По-батькові</p>
                            <p className="sub-text">заступник директора з чогось</p>
                        </div>
                    </div>
                </div>

                <div className="chairmans-padd-block padd-block">
                    <h2 className="sub-head-text">Завідуючі відділення</h2>
                    <div className="chairmans-block">
                        <div className="chairmans-icon">
                            <img src={director} alt="director" />
                            <p className="sub-main-text">Ім'я Прізвище По-батькові</p>
                            <p className="sub-text">завідуюча відділенням з ІПЗ</p>
                        </div>
                        <div className="chairmans-icon">
                            <img src={director} alt="director" />
                            <p className="sub-main-text">Ім'я Прізвище По-батькові</p>
                            <p className="sub-text">завідуюча відділенням з ІПЗ</p>
                        </div>
                    </div>
                </div>

                <div className="teachers-padd-block">
                    <h2 className="sub-head-text">Викладачі коледжу</h2>
                    <div className="teachers-block">
                        <div className="teachers-icon">
                            <img src={photo1} alt="teachers-icon" />
                            <p className="sub-main-text">Усачьова Світлана Григорівна</p>
                            <p className="sub-text">викладач фізики</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo2} alt="teachers-icon" />
                            <p className="sub-main-text">Одуха Ніна Кузьмівна</p>
                            <p className="sub-text">викладач екології та біології</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo3} alt="teachers-icon" />
                            <p className="sub-main-text">Краснікова Наталя Василівна</p>
                            <p className="sub-text">викладач іноземної мови</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo4} alt="teachers-icon" />
                            <p className="sub-main-text">Клімова Олена Анатоліївна</p>
                            <p className="sub-text">викладач української мови</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo5} alt="teachers-icon" />
                            <p className="sub-main-text">Буділко Антоніна Павлівна</p>
                            <p className="sub-text">викладач дискретної математики</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo6} alt="teachers-icon" />
                            <p className="sub-main-text">Болотських Тетяна Василівна</p>
                            <p className="sub-text">викладач основ метрології і стандартизації</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo7} alt="teachers-icon" />
                            <p className="sub-main-text">Титова Ольга Дмитрівна</p>
                            <p className="sub-text">архітектура комп’ютерних систем</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo8} alt="teachers-icon" />
                            <p className="sub-main-text">Кулік Юлія Вікторівна</p>
                            <p className="sub-text">викладач професійних дисциплін</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo9} alt="teachers-icon" />
                            <p className="sub-main-text">Гордон Наталія Борисівна</p>
                            <p className="sub-text">комп’ютерні мережі</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo10} alt="teachers-icon" />
                            <p className="sub-main-text">Мальцева Тетяна Іллівна</p>
                            <p className="sub-text">викладач професійних дисциплін</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo11} alt="teachers-icon" />
                            <p className="sub-main-text">Батирєва Тетяна Іванівана</p>
                            <p className="sub-text">викладач математики та інформатики</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo12} alt="teachers-icon" />
                            <p className="sub-main-text">Колупаєва Олена Юріївна</p>
                            <p className="sub-text">викладач економіки</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo13} alt="teachers-icon" />
                            <p className="sub-main-text">Катасонова Валентина Василівна</p>
                            <p className="sub-text">викладач соціології</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo14} alt="teachers-icon" />
                            <p className="sub-main-text">Дубовик Катерина Михайлівна</p>
                            <p className="sub-text">викладач професійних дисциплін</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={photo15} alt="teachers-icon" />
                            <p className="sub-main-text">Балабан Василь Павлович</p>
                            <p className="sub-text">викладач історії України та Всесвітньої історії</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={fur} alt="teachers-icon" />
                            <p className="sub-main-text">Фурсов Анатолій Митрофанович</p>
                            <p className="sub-text">викладач мікропроцесорних систем</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={gam} alt="teachers-icon" />
                            <p className="sub-main-text">Гамалєй Володимир Васильович</p>
                            <p className="sub-text">заступник директора з адміністративно-господарської роботи</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={gry} alt="teachers-icon" />
                            <p className="sub-main-text">Грищенко Олександр Іванович</p>
                            <p className="sub-text">фізичне виховання</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={kos} alt="teachers-icon" />
                            <p className="sub-main-text">Костюріна Тетяна Михайлівна</p>
                            <p className="sub-text">викладач теорії ймовірності та вищої математики</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={kov} alt="teachers-icon" />
                            <p className="sub-main-text">Ковальова Катерина Генадіївна</p>
                            <p className="sub-text">викладач української мови та літератури</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={kor} alt="teachers-icon" />
                            <p className="sub-main-text">Корнілова Тетяна Іванівна</p>
                            <p className="sub-text">викладач зарубіжної літератури</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={sal} alt="teachers-icon" />
                            <p className="sub-main-text">Салоїд Тетяна Петрівна</p>
                            <p className="sub-text">викладач математики</p>
                        </div>
                        <div className="teachers-icon">
                            <img src={pod} alt="teachers-icon" />
                            <p className="sub-main-text">Поддяконова Валентина Григоріївна</p>
                            <p className="sub-text">викладач хімії</p>
                        </div>
                    </div>
                    <div className="mobile-teachers-block">
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з дисципліни</p>
                            <Link className="button" to="/modal/structure" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                        <div className="mobile-teachers-icon padd-block">
                            <p className="main-text">Викладачі з програмування</p>
                            <Link className="button" to="/modal/teachers" target="_blank">Розгорнути</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}