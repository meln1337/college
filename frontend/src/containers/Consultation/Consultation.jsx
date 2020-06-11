import React from 'react'
import './Consultation.css'
import arrow from '../../public/arrow.svg'
import time from '../../public/time.svg'
import subway from '../../public/subway.svg'
import smile from '../../public/smile.svg'
import mortarboard from '../../public/mortarboard.svg'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<div className="consultation">
			<div className="container">
				<h1 className="head-text">Консультації до вступу</h1>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />Українська мова</p>
				<p className="lesson main-text"><img src={arrow} alt="arrow" />Математика</p>
				<div className="padd-icon-block">
					<div className="padd-icon">
						<div className="front">
							<img src={time} alt="padd-icon" />
							<p className="sub-main-text">Зручний графік</p>
						</div>
						<div className="back">
							back
						</div>
					</div>
					<div className="padd-icon">
						<div className="front">
							<img src={subway} alt="padd-icon" />
							<p className="sub-main-text">Поруч із метро</p>
						</div>
						<div className="back">back</div>
					</div>
					<div className="padd-icon">
						<div className="front">
							<img src={smile} alt="padd-icon" />
							<p className="sub-main-text">Привабливі умови</p>
						</div>
						<div className="back">back</div>
					</div>
					<div className="padd-icon">
						<div className="front">
							<img src={mortarboard} alt="padd-icon" />
							<p className="sub-main-text">Якісна освіта</p>
						</div>
						<div className="back">Якісна освіта</div>
					</div>
				</div>
				<p className="sub-main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio magni ipsum possimus quos! Aliquam consequuntur dolorem delectus enim veritatis. Molestias beatae temporibus quas praesentium dolore? Laudantium tempora quasi quos natus amet, voluptate dolore vel quibusdam eum dolorum fugit saepe! Sunt perspiciatis, non omnis praesentium modi reiciendis consequatur fuga eligendi nostrum itaque accusamus, adipisci nihil fugit labore autem quis dolorum vero nam voluptates expedita natus porro! Magni alias voluptate, ex quia itaque nobis quam incidunt in dignissimos enim dolor expedita repudiandae. Quos vitae aut maxime iusto consequatur, esse deleniti eveniet accusantium dolorem alias nam labore molestias et aperiam ipsum laboriosam.</p>
				<p className="sub-main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio magni ipsum possimus quos! Aliquam consequuntur dolorem delectus enim veritatis. Molestias beatae temporibus quas praesentium dolore? Laudantium tempora quasi quos natus amet, voluptate dolore vel quibusdam eum dolorum fugit saepe! Sunt perspiciatis, non omnis praesentium modi reiciendis consequatur fuga eligendi nostrum itaque accusamus, adipisci nihil fugit labore autem quis dolorum vero nam voluptates expedita natus porro! Magni alias voluptate, ex quia itaque nobis quam incidunt in dignissimos enim dolor expedita repudiandae. Quos vitae aut maxime iusto consequatur, esse deleniti eveniet accusantium dolorem alias nam labore molestias et aperiam ipsum laboriosam.</p>
				<p className="sub-main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio magni ipsum possimus quos! Aliquam consequuntur dolorem delectus enim veritatis. Molestias beatae temporibus quas praesentium dolore? Laudantium tempora quasi quos natus amet, voluptate dolore vel quibusdam eum dolorum fugit saepe! Sunt perspiciatis, non omnis praesentium modi reiciendis consequatur fuga eligendi nostrum itaque accusamus, adipisci nihil fugit labore autem quis dolorum vero nam voluptates expedita natus porro! Magni alias voluptate, ex quia itaque nobis quam incidunt in dignissimos enim dolor expedita repudiandae. Quos vitae aut maxime iusto consequatur, esse deleniti eveniet accusantium dolorem alias nam labore molestias et aperiam ipsum laboriosam.</p>
				<h2 className="schedule-cons-text sub-head-text">Розклад консультацій</h2>
				<div className="schedule-cons">
					<p className="main-text">П-1</p>
					<Link target="_blank" to="/modal/unit/1" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-2</p>
					<Link target="_blank" to="/modal/unit/2" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-3</p>
					<Link target="_blank" to="/modal/unit/3" className="cons-button">Розгорнути</Link>
				</div>
				<div className="schedule-cons">
					<p className="main-text">П-4</p>
					<Link target="_blank" to="/modal/unit/4" className="cons-button">Розгорнути</Link>
				</div>
			</div>
		</div>
	)
}