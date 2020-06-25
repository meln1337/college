import React from 'react'
import './Vstup.css'
import sun from '../../public/sun.svg'
import brain from '../../public/brain.svg'
import timer from '../../public/timer.svg'
import documentSvg from '../../public/document.svg'
import punkt from '../../public/punkt.svg'
import posylannia from '../../public/ssilka.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Vstup = ({ lan }) => (
    <div className="vstup">
        <div className="container">
            <h1 className="vstup-text head-text">{lan.head}</h1>
            <p className="vstup-desc sub-main-text">{lan.text1}</p>
            <div className="padd-block add-block">
                <p className="sub-main-text add-info tac">{lan.text2} <Link className="vstup-link" to="/contacts">{lan.text2A}</Link> {lan.text3} <Link className="vstup-link" to="/open-day">{lan.text3A}</Link></p>
            </div>
            <p className="vstup-desc sub-main-text">{lan.text4}</p>
            <div className="vstup-icon-block">
                <div className="padd-icon">
                    <div className="front">
                        <img src={sun} alt="icons" />
                        <p className="icon-desc tac">{lan.icon1.frontText}</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">{lan.icon1.backText}</div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={brain} alt="icons" />
                        <p className="icon-desc tac">{lan.icon2.frontText}</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            {lan.icon2.backText}
                        </div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={timer} alt="icons" />
                        <p className="icon-desc tac">{lan.icon3.frontText}</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            {lan.icon3.backText}
                        </div>
                    </div>
                </div>
                <div className="padd-icon">
                    <div className="front">
                        <img src={documentSvg} alt="icons" />
                        <p className="icon-desc tac">{lan.icon4.frontText}</p>
                    </div>
                    <div className="back">
                        <div className="icon-desc tac">
                            {lan.icon4.backText1} <Link to="/vstup">{lan.icon4.backText1A}</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className="vstup-desc idcons sub-main-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            <div className="padd-block">
                <h3 className="vstup-block-head-text teaching-in-college">{lan.text5}</h3>
                <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />{lan.text6}<img className="posylannia" src={posylannia} alt="posylannia" /><span>{lan.text6A}</span></p>
                <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />{lan.text12}<img className="posylannia" src={posylannia} alt="posylannia" /><span>{lan.text12A}</span></p>
            </div>
            <h1 className="vstup-text sub-head-text">{lan.sub}</h1>
            <p className="vstup-spec"><img className="punkt" src={punkt} alt="punkt" />{lan.text7}</p>
            <p className="vstup-sub-spec">{lan.text8}</p>
            <div className="padd-block wanna-go-to-college">
                <h3 className="vstup-block-head-text tac">{lan.text9}</h3>
                <p className="tac go-to-ab">{lan.text10}</p>
                <Link className="go-to-button" to="/consultation">{lan.text11}</Link>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].vstupPage
});

export default connect(mapStateToProps, null)(Vstup);