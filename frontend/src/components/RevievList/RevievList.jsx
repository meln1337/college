import React from 'react'
import './rewiewblock.css'
import { Link } from 'react-router-dom'

export default ({ graduateData }) => {
	return (
		graduateData.map((el, index) => {
			return (
				<div className="review-block" key={index}>
					<img src={el.img} />
					<p className="FIO">{el.FIO}</p>
					{/* <span><a href={'review/' + el.idreview} >Посмотреть отзыв</a></span> */}
					<Link to={`/response?post=${index+1}`} target="_blank" className="red-btn">Читати відгук</Link>
				</div>
			)
		}))
}
