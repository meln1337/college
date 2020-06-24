import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import PartnersBlock from '../../components/PartnersBlock/PartnersBlock'
import { connect } from 'react-redux'

const Main = ({ lan }) => (
	<main className="main-block">
		<div className="hero">
			<div className="container">
				<div className="first-oval"></div>
				<div className="second-oval"></div>
				<div className="main-flex-block">
					<div className="left-texts">
						<h1 className="head-text">{lan.firstHead}</h1>
						<h1 className="history head-text">{lan.secondHead}</h1>
						<h1 className="head-text red">{lan.thirdHead}</h1>
					</div>
					<div className="to-open-day">
						<p className="to-abiturients">{lan.redBlockThin}</p>
						<h4 className="open-day-text">{lan.redBlockHead}</h4>
						<p className="at-time">{lan.redBlockTime}</p>
						<div className="button">
							<Link to="/open-day" className="tac">{lan.redBlockMore}</Link>
						</div>
					</div>
				</div>
				<div className="bottom-text">
					<p></p>
					<p>{lan.subHead}</p>
				</div>
			</div>
		</div>

		<div className="container">
			<h1 className="education-partners head-text">{lan.eduF}</h1>
			<PartnersBlock type={1} />
			<h1 className="head-text">{lan.eduS}</h1>
			<PartnersBlock type={2} />
		</div>
	</main>
)

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].mainPage
})

export default connect(mapStateToProps, null)(Main);