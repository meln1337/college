import React from 'react';
import { Link } from 'react-router-dom';
import './examSchedule.css';

export default () => (
	<div className="exam-sh">
		<div className="container">
			<h1 className="head-text">Розклад іспитів</h1>
			<h2 className="sub-head-text">121 "Інженерія програмного забезпечення"</h2>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">1 курс</p>
				<Link target="_blank" to="/modal/course/121/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">2 курс</p>
				<Link target="_blank" to="/modal/course/121/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">3 курс</p>
				<Link target="_blank" to="/modal/course/121/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">4 курс</p>
				<Link target="_blank" to="/modal/course/121/4" className="button">Перейти</Link>
			</div>
			<h2 className="sub-head-text">123 "Комп'ютерна інженерія"</h2>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">1 курс</p>
				<Link target="_blank" to="/modal/course/123/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">2 курс</p>
				<Link target="_blank" to="/modal/course/123/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">3 курс</p>
				<Link target="_blank" to="/modal/course/123/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block exam-sh-padd-block">
				<p className="course">4 курс</p>
				<Link target="_blank" to="/modal/course/123/4" className="button">Перейти</Link>
			</div>
		</div>
	</div>
)