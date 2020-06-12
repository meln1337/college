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
					<p>Світ невпинно рухається у напрямку, коли його нормальне функціонування повністю залежатиме від комп’ютерів. Вже на даний момент ми можемо спостерігати, як кожна галузь нашого персонального та професійного життя пов’язані з інформаційними технологіями. Ми використовуємо смарфони, в яких завантажені соціальні мережі, месенжери, відеочати, додатки доповненої реальності. Банки, лікарні, ресторани, комунальні служби, таксі: все це під’єднане до цифрової системи.Фантастичні фільми стають реальністю, технологій для цього цілком достатньо, а їх повне втілення лише питання часу.</p>
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