import React from 'react';
import { Link } from 'react-router-dom';
import './Rating.css';
import pdf from '../../public/pdf.svg';
import { connect } from 'react-redux';

const Rating = ({ lan }) => (
	<div className="rating">
		<div className="container">
			<h1 className="head-text">{lan.head}</h1>
			<Link className="pdf" to="\w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank"><img src={pdf} alt="pdf"/>{lan.pdfText}</Link>
			<h2 className="sub-head-text">{lan.sub1}</h2>
			<p className="last-update">{lan.text1}</p>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text2}</p>
				<Link target="_blank" to="/modal/course/121/1" className="button">{lan.text2A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text3}</p>
				<Link target="_blank" to="/modal/course/121/2" className="button">{lan.text3A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text4}</p>
				<Link target="_blank" to="/modal/course/121/3" className="button">{lan.text4A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text5}</p>
				<Link target="_blank" to="/modal/course/121/4" className="button">{lan.text5A}</Link>
			</div>
			<h2 className="sub-head-text">{lan.sub2}</h2>
			<p className="last-update">{lan.text10}</p>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text6}</p>
				<Link target="_blank" to="/modal/course/123/1" className="button">{lan.text6A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text7}</p>
				<Link target="_blank" to="/modal/course/123/2" className="button">{lan.text7A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text8}</p>
				<Link target="_blank" to="/modal/course/123/3" className="button">{lan.text8A}</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">{lan.text9}</p>
				<Link target="_blank" to="/modal/course/123/4/course" className="button">{lan.text9A}</Link>
			</div>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].ratingPage
})

export default connect(mapStateToProps, null)(Rating)