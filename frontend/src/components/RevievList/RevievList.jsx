import React from 'react'
import './rewiewblock.css'
import { Link } from 'react-router-dom'

export default ({ graduateData, from }) => {
	return (
		graduateData.map((el, index) => {
			return (
				<div className="review-block" key={index}>
					<img src={el.img} />
					<p className="FIO">{el.FIO}</p>
					<Link to={`/response?post=${index + 1}`} target="_blank" className="red-btn">{from === 'UA' ? 'Читати відгук' : 'Read the review'}</Link>
				</div>
			)
		}))
}