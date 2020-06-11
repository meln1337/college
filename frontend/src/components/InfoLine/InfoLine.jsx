import React from 'react'
import './InfoLine.css'
import { Link } from 'react-router-dom'

export default (props) => {

	return (
		<div className="info-line">
			<div className="container">
				{props.info} <span><Link to={props.Link}>Розглянути</Link></span>
			</div>
		</div>
	)

}

