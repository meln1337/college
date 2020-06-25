import React from 'react'
import './Replacements.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Replacement = ({ lan }) => (
	<div className="replacements">
		<div className="container">
			<h1 className="head-text">{lan.head}</h1>
			<h2 className="sub-head-text">{lan.sub1}</h2>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text2}</p>
				<Link to="/zaminy?part=121&course=1" className="button">{lan.text2A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text3}</p>
				<Link to="/zaminy?part=121&course=2" className="button">{lan.text3A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text4}</p>
				<Link to="/zaminy?part=121&course=3" className="button">{lan.text4A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text5}</p>
				<Link to="/zaminy?part=121&course=4" className="button">{lan.text5A}</Link>
			</div>
			<h2 className="sub-head-text">{lan.sub2}</h2>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text6}</p>
				<Link to="/zaminy?part=123&course=1" className="button">{lan.text6A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text7}</p>
				<Link to="/zaminy?part=123&course=2" className="button">{lan.text7A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text8}</p>
				<Link to="/zaminy?part=123&course=3" className="button">{lan.text8A}</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">{lan.text9}</p>
				<Link to="/zaminy?part=123&course=4" className="button">{lan.text9A}</Link>
			</div>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].zaminy
})

export default connect(mapStateToProps, null)(Replacement)