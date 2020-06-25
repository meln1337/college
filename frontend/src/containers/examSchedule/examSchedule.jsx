import React from 'react';
import { Link } from 'react-router-dom';
import './examSchedule.css';
import { connect } from 'react-redux';

const ExamSchedule = ({ lan }) => (
	<div className="exam-sh">
		<div className="container">
			<h1 className="head-text">{lan.head}</h1>
			<h2 className="sub-head-text">{lan.sub1}</h2>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text2}</p>
				<Link target="_blank" to="/modal/course/121/1" className="button">{lan.text2A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text3}</p>
				<Link target="_blank" to="/modal/course/121/2" className="button">{lan.text3A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text4}</p>
				<Link target="_blank" to="/modal/course/121/3" className="button">{lan.text4A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text5}</p>
				<Link target="_blank" to="/modal/course/121/4" className="button">{lan.text5A}</Link>
			</div>
			<h2 className="sub-head-text">{lan.sub2}</h2>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text6}</p>
				<Link target="_blank" to="/modal/course/123/1" className="button">{lan.text6A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text7}</p>
				<Link target="_blank" to="/modal/course/123/2" className="button">{lan.text7A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text8}</p>
				<Link target="_blank" to="/modal/course/123/3" className="button">{lan.text8A}</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">{lan.text9}</p>
				<Link target="_blank" to="/modal/course/123/4" className="button">{lan.text9A}</Link>
			</div>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].examPage
})

export default connect(mapStateToProps, null)(ExamSchedule)