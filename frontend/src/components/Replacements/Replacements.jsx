import React from 'react'
import './Replacements.css'
import { Link } from 'react-router-dom'

export default () => (
	<div className="replacements">
		<div className="container">
			<h1 className="head-text">Заміни у розкладі занять</h1>
			<h2 className="sub-head-text">121 "Інженерія програмного забезпечення"</h2>
			<div className="padd-block replacements-padd-block">
				<p className="course">1 курс</p>
				<Link to="/zaminy?part=121&course=1" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">2 курс</p>
				<Link to="/zaminy?part=121&course=2" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">3 курс</p>
				<Link to="/zaminy?part=121&course=3" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">4 курс</p>
				<Link to="/zaminy?part=121&course=4" className="button">Перейти</Link>
			</div>
			<h2 className="sub-head-text">123 "Комп'ютерна інженерія"</h2>
			<div className="padd-block replacements-padd-block">
				<p className="course">1 курс</p>
				<Link to="/zaminy?part=123&course=1" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">2 курс</p>
				<Link to="/zaminy?part=123&course=2" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">3 курс</p>
				<Link to="/zaminy?part=123&course=3" className="button">Перейти</Link>
			</div>
			<div className="padd-block replacements-padd-block">
				<p className="course">4 курс</p>
				<Link to="/zaminy?part=123&course=4" className="button">Перейти</Link>
			</div>
		</div>
	</div>
)
