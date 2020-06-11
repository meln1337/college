import React, { Component } from 'react'
import './History.css'
import history1 from '../../public/history1.png'
import leftArrow from '../../public/arrow-point-to-right-red.svg'
import rightArrow from '../../public/arrow-point-to-left-red.svg'
import activeOval from '../../public/fill-oval.svg'
import oval from '../../public/oval.svg'
import arrow from '../../public/arrow-to-right.svg'

class History extends Component {
    state = {
        historyLine: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.1',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.2',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.3',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.4',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.5',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.6',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis a excepturi magni saepe odit perferendis assumenda tempora, officiis illo nobis, velit obcaecati dolorem consequuntur ipsam similique quam eaque deserunt autem itaque! Totam sunt alias, voluptas possimus magni deleniti quos ipsum velit eos voluptate mollitia quaerat, iste dicta consequatur, reprehenderit enim.7'
        ],
        historyLineYears: [
            '1922', '1934', '1942', '1952', '1974', '2020', '2022'
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
                    <p className="history-text">{this.state.historyLine[this.state.activeHistoryLine - 1]}</p>
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
                    <h1 className="history-of-college-text head-text">Історія коледжу</h1>
                    <p className="sub-history-of-college-text sub-main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    {/* <div className="HistoryLine">
                        <img src={img}></img>
                        {this.state.activeHistory === 1 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 1 }) }}>1922</span> : <span onClick={() => { this.setState({ activeHistory: 1 }) }}>1922</span>}
                        {this.state.activeHistory === 2 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 2 }) }}>1934</span> : <span onClick={() => { this.setState({ activeHistory: 2 }) }}>1934</span>}
                        {this.state.activeHistory === 3 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 3 }) }}>1942</span> : <span onClick={() => { this.setState({ activeHistory: 3 }) }}>1942</span>}
                        {this.state.activeHistory === 4 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 4 }) }}>1952</span> : <span onClick={() => { this.setState({ activeHistory: 4 }) }}>1952</span>}
                        {this.state.activeHistory === 5 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 5 }) }}>1974</span> : <span onClick={() => { this.setState({ activeHistory: 5 }) }}>1974</span>}
                        {this.state.activeHistory === 6 ? <span className="Hspan" onClick={() => { this.setState({ activeHistory: 6 }) }}>2020</span> : <span onClick={() => { this.setState({ activeHistory: 6 }) }}>2020</span>}

                    </div>
                    <div className="HistoryInfoBlock">
                        <p>
                            {this.state.info[this.state.activeHistory - 1].content}
                        </p>
                    </div> */}
                    <div className="history-line">
                        {this.setLine(1)}
                        {this.setLine(2)}
                        {this.setLine(3)}
                        {this.setLine(4)}
                        {this.setLine(5)}
                        {this.setLine(6)}
                        {this.setLine(7)}
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
export default History
