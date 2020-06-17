import React from 'react'
import './Achievements.css'
import { Link } from 'react-router-dom'

class achievements extends React.Component {
    render() {
        return (
            <div className="achievments">
                <div className="container">
                    <h1 className="head-text">Досягнення коледжу</h1>
                    <p className="sub-main-text">Вже багато років поспіль наші учні демонструють успіхи на міжобласних та всеукраїнських змаганнях. Харківський патентно комп’ютерний коледж– це навчальний заклад, головним завданням якого є забезпечення підготовки конкурентоспроможного на ринку праці фахівця. У сфері провадження освітньої діяльності результат досягається високою професійною активністю педагогічних працівників: курсова передпідготовка, методична діяльність (методичні об ’єднання, творчі групи, тренінги, семінари), вивчення передового досвіду, проведення відкритих занять, взаємовідвідування занять, навчально-методична діяльність, самоосвіта, участь у предметних комісіях із загально-освітніх дисциплін.</p>
                    <p className="sub-main-text">З метою вдосконалення фахової підготовки педагогічних кадрів проводиться методична робота, яка спонукає кожного педагога до підвищення свого фахового рівня. У процесі методичної роботи здійснюються підвищення наукового рівня педагогічного працівника, його підготовка до засвоєння змісту нових програм, постійне ознайомлення з досягненнями методик викладання, збагачення прогресивними методами та засобами навчання.</p>
                    <p className="main-text">Останні досягнення</p>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2019 рік</p>
                        <Link className="button" to="/achievementsModal?year=2019">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2018 рік</p>
                        <Link className="button" to="/achievementsModal?year=2018">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2017 рік</p>
                        <Link className="button" to="/achievementsModal?year=2017">Перейти</Link>
                    </div>
                </div>
            </div>
        )

    }
}

export default achievements