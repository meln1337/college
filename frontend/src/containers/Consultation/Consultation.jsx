import React from 'react'
import { Link } from 'react-router-dom'
import './Consultation.css'
import arrow from '../../public/arrow.svg'
import time from '../../public/time.svg'
import subway from '../../public/subway.svg'
import smile from '../../public/smile.svg'
import mortarboard from '../../public/mortarboard.svg'
import { connect } from 'react-redux'

const Consultation = ({ lan }) => {
	return (
		<div className="consultation">
			<div className="container">
				<h1 className="head-text">{lan.head}</h1>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />{lan.text1}</p>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />{lan.text2}</p>
				<div className="padd-icon-block">
					<div className="padd-icon">
						<img src={time} alt="padd-icon" />
						<p className="sub-main-text">{lan.text3}</p>
					</div>
					<div className="padd-icon">
						<img src={subway} alt="padd-icon" />
						<p className="sub-main-text">{lan.text4}</p>
					</div>
					<div className="padd-icon">
						<img src={smile} alt="padd-icon" />
						<p className="sub-main-text">{lan.text5}</p>
					</div>
					<div className="padd-icon">
						<img src={mortarboard} alt="padd-icon" />
						<p className="sub-main-text">{lan.text6}</p>
					</div>
				</div>
				<p className="sub-main-text">{lan.text7}</p>
				<p className="sub-main-text">{lan.text8}</p>
				<h2 className="schedule-cons-text sub-head-text">{lan.text9}</h2>
				<div className="schedule-cons">
					<p className="main-text">{lan.text10}</p>
					<Link to="/consultationModal?group=1" className="cons-button">{lan.text10A}</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">{lan.text11}</p>
					<Link to="/consultationModal?group=2" className="cons-button">{lan.text11A}</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">{lan.text12}</p>
					<Link to="/consultationModal?group=3" className="cons-button">{lan.text12A}</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">{lan.text13}</p>
					<Link to="/consultationModal?group=4" className="cons-button">{lan.text13A}</Link>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].consultationPage
})

export default connect(mapStateToProps, null)(Consultation)