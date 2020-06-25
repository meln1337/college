import React from 'react';
import { Link } from 'react-router-dom';
import './daySchedule.css';
import pdf from '../../public/pdf.svg';
import { connect } from 'react-redux';

const DaySchedule = ({ lan }) => (
	<div className="day-schedule">
		<div className="container">
			<h1 className="head-text">{lan.head}</h1>
			<p className="main-text">{lan.sub1}</p>
			<Link className="sch-pdf" to="/" target="_blank"><img src={pdf} alt="pdf" />{lan.pdfText}</Link>
			<h2 className="sub-head-text day-sch__eng">{lan.sub2}</h2>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text2}</p>
				<Link to="/course?part=121&course=1" className="button">{lan.text2A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text3}</p>
				<Link to="/course?part=121&course=2" className="button">{lan.text3A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text4}</p>
				<Link to="/course?part=121&course=3" className="button">{lan.text4A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text5}</p>
				<Link to="/course?part=121&course=4" className="button">{lan.text5A}</Link>
			</div>
			<h2 className="sub-head-text day-sch__computer-eng">123 "Комп'ютерна інженерія"</h2>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text6}</p>
				<Link to="/course?part=123&course=1" className="button">{lan.text6A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text7}</p>
				<Link to="/course?part=123&course=2" className="button">{lan.text7A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text8}</p>
				<Link to="/course?part=123&course=3" className="button">{lan.text8A}</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">{lan.text9}</p>
				<Link to="/course?part=123&course=4" className="button">{lan.text9A}</Link>
			</div>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].daySchedulePage
})

export default connect(mapStateToProps, null)(DaySchedule)