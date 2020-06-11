import React from 'react';
import { Link } from 'react-router-dom';
import './daySchedule.css';
import pdf from '../../public/pdf.svg';

export default () => (
	<div className="day-schedule">
		<div className="container">
			<h1 className="head-text">Розклад навчальних занять</h1>
			<p className="main-text">Студентів денної форми навчання на період з 1 лютого до 31 червня 2020 року</p>
			<Link className="sch-pdf" to="/" target="_blank"><img src={pdf} alt="pdf" />Графік навчального процесу</Link>
			<h2 className="sub-head-text day-sch__eng">121 "Інженерія програмного забезпечення"</h2>
			<div className="padd-block day-sch-padd-block">
				<p className="course">1 курс</p>
				<Link to="/modal/course/121/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">2 курс</p>
				<Link to="/modal/course/121/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">3 курс</p>
				<Link to="/modal/course/121/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">4 курс</p>
				<Link to="/modal/course/121/4" className="button">Перейти</Link>
			</div>
			<h2 className="sub-head-text day-sch__computer-eng">123 "Комп'ютерна інженерія"</h2>
			<div className="padd-block day-sch-padd-block">
				<p className="course">1 курс</p>
				<Link to="/modal/course/123/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">2 курс</p>
				<Link to="/modal/course/123/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">3 курс</p>
				<Link to="/modal/course/123/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block day-sch-padd-block">
				<p className="course">4 курс</p>
				<Link to="/modal/course/123/4" className="button">Перейти</Link>
			</div>
		</div>
	</div>
)
