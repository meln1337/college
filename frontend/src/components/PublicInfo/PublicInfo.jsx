import React from 'react'
import './PublicInfo.css'
import { connect } from 'react-redux'

const PublicInfo = ({ lan }) => (
	<div className="public-info">
		<div className="container">
			<h1 className="head-text">{lan.head}</h1>
			<p className="sub-main-text">
				{lan.text1}
			</p>
			<p className="sub-main-text">
				{lan.text2}
			</p>
			<p className="sub-main-text">
				{lan.text3}
			</p>
			<p className="sub-main-text">
				{lan.text4}
			</p>
			<a className="link-to-document" href="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc">
				{lan.text5}
			</a>
		</div>
	</div>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].publicPage
})

export default connect(mapStateToProps, null)(PublicInfo)