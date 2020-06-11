import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import PartnersBlock from '../../components/PartnersBlock/PartnersBlock'

export default () => (
	<main className="main-block">
		<div className="hero">
			<div className="container">
				<div className="first-oval"></div>
				<div className="second-oval"></div>
				<div className="main-flex-block">
					<div className="left-texts">
						<h1 className="head-text">Якісна освіта.</h1>
						<h1 className="history head-text">Сторічна історія.</h1>
						<h1 className="head-text red">Десятки тисяч фахівців.</h1>
					</div>
					<div className="to-open-day">
						<p className="to-abiturients">#Абітурієнтам_ХКФК</p>
						<h4 className="open-day-text">День відкритих дверей</h4>
						<p className="at-time">23 лютого о 17:00</p>
						<div className="button">
							<Link to="/open-day" className="tac">Детальніше</Link>
						</div>
					</div>
				</div>
				<div className="bottom-text">
					<p></p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>

		<div className="container">
			<h1 className="education-partners head-text">Освітні партнери</h1>
			<PartnersBlock type={1} />
			<h1 className="head-text">Комерційні партнери</h1>
            <PartnersBlock type={2} />
		</div>
	</main>
)