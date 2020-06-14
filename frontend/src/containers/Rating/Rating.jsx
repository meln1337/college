import React from 'react';
import { Link } from 'react-router-dom';
import './Rating.css';
import pdf from '../../public/pdf.svg';

export default () => (
	<div className="rating">
		<div className="container">
			<h1 className="head-text">Cтипендіальний рейтинг</h1>
			<Link className="pdf" to="\w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank"><img src={pdf} alt="pdf"/>Положення про <br/>стипендіальне забезпечення ХПКК</Link>
			<h2 className="sub-head-text">121 "Інженерія програмного забезпечення"</h2>
			<p className="last-update">Останне оновлення 20.20.2020</p>
			<div className="padd-block rating__padd-block">
				<p className="course">1 курс</p>
				<Link target="_blank" to="/modal/course/121/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">2 курс</p>
				<Link target="_blank" to="/modal/course/121/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">3 курс</p>
				<Link target="_blank" to="/modal/course/121/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">4 курс</p>
				<Link target="_blank" to="/modal/course/121/4" className="button">Перейти</Link>
			</div>
			<h2 className="sub-head-text">123 "Комп'ютерна інженерія"</h2>
			<p className="last-update">Останне оновлення 20.20.2020</p>
			<div className="padd-block rating__padd-block">
				<p className="course">1 курс</p>
				<Link target="_blank" to="/modal/course/123/1" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">2 курс</p>
				<Link target="_blank" to="/modal/course/123/2" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">3 курс</p>
				<Link target="_blank" to="/modal/course/123/3" className="button">Перейти</Link>
			</div>
			<div className="padd-block rating__padd-block">
				<p className="course">4 курс</p>
				<Link target="_blank" to="/modal/course/123/4/course" className="button">Перейти</Link>
			</div>
		</div>
	</div>
)
