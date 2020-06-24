import React, { Component } from 'react'
import './History.css'
import history1 from '../../public/history1.png'
import leftArrow from '../../public/arrow-point-to-right-red.svg'
import rightArrow from '../../public/arrow-point-to-left-red.svg'
import activeOval from '../../public/fill-oval.svg'
import oval from '../../public/oval.svg'
import arrow from '../../public/arrow-to-right.svg'
import { connect } from 'react-redux'

class History extends Component {
    state = {
        historyLine: {
            "UA": [
                'Заснування Раднаркомом України технологічного технікуму для підготовки фахівців на рівні середньотехнічної освіти у місті Києві.',
                'Технікум переведено з Києва до Харкова. Спочатку технікум був підпорядкований Укрпромраді, а потім управлінню кадрами Харківської ради народного господарства.',
                'Технікум перепрофільовано на підготовку фахівців для електротехнічної галузі. З цього часу навчальний заклад одержав назву Харківського електротехнічного технікуму і підпорядкований Міністерству електротехнічної промисловості СРСР.',
                'Технікум починає підготовлювати фахівців за заочною формою навчання',
                'Технікум стає Харківським патентно-комп’ютерним коледжем. З 1991 року і до цього часу Харківський патентно-комп’ютерний коледж підпорядковано Міністерству освіти і науки, молоді та спорту України.',
                'Харківский патентно - комп’ютерний коледж готує кваліфікованих молодших спеціалістів, які легко можуть знайти роботу за фахом та продовжити навчання у вищих навчальних закладах.'
            ],
            "EN": [
                "Establishment of a technological technical school by the People's Commissar of Ukraine for training specialists at the level of secondary technical education in the city of Kyiv.",
                "The technical school was transferred from Kyiv to Kharkiv. Initially, the college was subordinated to Ukrpromrad, and then to the personnel department of the Kharkiv Council of National Economy.",
                'The technical school has been re-profiled to train specialists for the electrical engineering industry. Since then, the school has been called the Kharkiv Electrotechnical College and is subordinated to the Ministry of Electrical Industry of the USSR.',
                'The technical school begins to train specialists by correspondence',
                'The technical school becomes Kharkiv Patent and Computer College. Since 1991, the Kharkiv Patent and Computer College has been subordinated to the Ministry of Education and Science, Youth and Sports of Ukraine.',
                'Kharkiv Patent and Computer College trains qualified junior specialists who can easily find a job in their specialty and continue their studies in higher educational institutions.'
            ]
        },
        historyLineYears: [
            '1922', '1934', '1962', '1988', '1991', '2020'
        ],
        activeHistoryLine: 1,
        slider: {
            slides: [
                { img: history1 },
                { img: 'https://dummyimage.com/1440x477/000/aaa' },
                { img: history1 },
                { img: 'https://dummyimage.com/1440x477/000/aaa' },
                { img: history1 }
            ]
        },
        activeSlide: 1
    }

    prevSlide() {
        if (this.state.activeSlide === 1) {
            this.setState({
                activeSlide: 5
            })
        }
        else {
            this.setState((prevState) => ({
                activeSlide: prevState.activeSlide - 1
            }))
        }
    }

    nextSlide() {
        if (this.state.activeSlide === 5) {
            this.setState({
                activeSlide: 1
            })
        }
        else {
            this.setState((prevState) => ({
                activeSlide: prevState.activeSlide + 1
            }))
        }
    }

    setSlide(num) {
        if (this.state.activeSlide === num) {
            return <img onClick={() => this.setState({ activeSlide: num })} src={activeOval} alt="oval" />
        }
        else {
            return <img onClick={() => this.setState({ activeSlide: num })} src={oval} alt="oval" />
        }
    }

    setLine(num) {
        if (this.state.activeHistoryLine === num) {
            return <div className="line-block">
                <span className="active-history-line">{this.state.historyLineYears[num - 1]}</span>
                <div className="history-padd-block padd-block">
                    <p className="history-text">{this.state.historyLine[this.props.from][this.state.activeHistoryLine - 1]}</p>
                </div>
            </div>
        }
        else {
            return <span onClick={() => this.setState({ activeHistoryLine: num })}>{this.state.historyLineYears[num - 1]}</span>
        }
    }

    render() {
        return (
            <div className="History">
                <div className="history-slider" style={{ backgroundImage: `url("${this.state.slider.slides[this.state.activeSlide - 1].img}")` }}>
                    <div className="container slider-container">
                        <img className="prev" onClick={() => this.prevSlide()} src={leftArrow} alt="left" />
                        <div className="dots">
                            {this.setSlide(1)}
                            {this.setSlide(2)}
                            {this.setSlide(3)}
                            {this.setSlide(4)}
                            {this.setSlide(5)}
                        </div>
                        <img className="next" onClick={() => this.nextSlide()} src={rightArrow} alt="right" />
                    </div>
                </div>
                <div className="container">
                    <h1 className="history-of-college-text head-text">{this.props.lan.history}</h1>
                    <p className="sub-history-of-college-text sub-main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <div className="history-line">
                        {this.setLine(1)}
                        {this.setLine(2)}
                        {this.setLine(3)}
                        {this.setLine(4)}
                        {this.setLine(5)}
                        {this.setLine(6)}
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="history-padd-block-mobile padd-block">
                        <p className="history-text">{this.state.historyLine[this.state.activeHistoryLine - 1]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].historyPage,
    from: languageReducer.from
});

export default connect(mapStateToProps, null)(History);
