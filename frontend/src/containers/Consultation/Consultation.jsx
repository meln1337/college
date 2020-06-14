import React from 'react'
import { Link } from 'react-router-dom'
import './Consultation.css'
import arrow from '../../public/arrow.svg'
import time from '../../public/time.svg'
import subway from '../../public/subway.svg'
import smile from '../../public/smile.svg'
import mortarboard from '../../public/mortarboard.svg'

export default () => {
	return (
		<div className="consultation">
			<div className="container">
				<h1 className="head-text">Консультації до вступу</h1>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />Українська мова</p>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />Математика</p>
				<div className="padd-icon-block">
					<div className="padd-icon">
						<img src={time} alt="padd-icon" />
						<p className="sub-main-text">Зручний графік</p>
					</div>
					<div className="padd-icon">
						<img src={subway} alt="padd-icon" />
						<p className="sub-main-text">Поруч із метро</p>
					</div>
					<div className="padd-icon">
						<img src={smile} alt="padd-icon" />
						<p className="sub-main-text">Привабливі умови</p>
					</div>
					<div className="padd-icon">
						<img src={mortarboard} alt="padd-icon" />
						<p className="sub-main-text">Якісна освіта</p>
					</div>
				</div>
				<p className="sub-main-text">Підготовчі курси для вступу в Коледж – це сприятливий старт для комфортного навчання в подальшому. Оскільки ми не повинні забувати про той факт, що майбутні студенти Коледжу насамперед є дітьми підліткового віку і дуже важливо не упустити період адаптації в новому навчальному середовищі, можливості впровадження варіативних навчальних методик в освітній процес, призвичаїтися до методики викладання викладачів вищого навчального закладу, що використовується на практиці в Коледжі до моменту вступу.</p>
				<p className="sub-main-text">Департамент довузівської підготовки пропонує Вам навчання на підготовчих курсах два рази на тиждень. Кількість слухачів у групах – до 30-ти осіб. Заняття проводять висококваліфіковані викладачі ХПКК. Вони допомагають абітурієнтам систематизувати шкільну програму та засвоїти новий навчальний матеріал, а також успішно підготуватися до в</p>
				<h2 className="schedule-cons-text sub-head-text">Розклад консультацій</h2>
				<div className="schedule-cons">
					<p className="main-text">П-1</p>
					<Link to="/modal/unit/1" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-2</p>
					<Link to="/modal/unit/2" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-3</p>
					<Link to="/modal/unit/3" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-4</p>
					<Link to="/modal/unit/4" className="cons-button">Розгорнути</Link>
				</div>
			</div>
		</div>
	)
}