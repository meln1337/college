import React from 'react'
import './OpenDay.css'
import { connect } from 'react-redux'

const OpenDay = ({ lan }) => (
	<div className="open-day">
		<div className="container">
			<div className="open-day-red-padd-block red-padd-block">
				<h2 className="open-day-head-text head-text tac">{lan.head}</h2>
			</div>
			<h2 className="open-day-sub-head-text sub-head-text">{lan.sub}</h2>
			<p className="open-day-sub-main-text sub-main-text">{lan.text1}</p>
			<p className="open-day-sub-main-text sub-main-text">{lan.text2}</p>
			<div className="video">
				<iframe width="1280" height="720" src="https://www.youtube.com/embed/Y8rXBdbFcZk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<p className="open-day-sub-main-text sub-main-text">{lan.text3}</p>
			<p className="open-day-sub-main-text sub-main-text">{lan.text4}</p>
			<p className="place main-text"><span className="medium">{lan.text5}</span>: {lan.text5Bold}</p>
			<p className="open-day-add-info main-text"><span className="medium">{lan.text6}</span></p>
			<p className="open-day-main-text main-text">(050) 700-48-17</p>
			<p className="open-day-main-text main-text">(050) 700-48-15</p>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].openDay
})

export default connect(mapStateToProps, null)(OpenDay)