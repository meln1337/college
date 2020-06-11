import React, { Component } from 'react'
import './About.css'
import RevievList from '../../components/RevievList/RevievList'
import college_pic from '../../public/college-pic.png'
import face1 from '../../public/face1.png'
import face2 from '../../public/face2.png'
import face3 from '../../public/face3.png'
import face4 from '../../public/face4.png'
import { Link } from 'react-router-dom'

class Autoblock extends Component {
	state = {
		graduateData: [
			{
				FIO: "Ім'я Прізвище",
				img: face1,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				idreview: "1"
			}, {
				FIO: "Ім'я Прізвище",
				img: face2,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				idreview: "1"
			}, {
				FIO: "Ім'я Прізвище",
				img: face3,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				idreview: "1"
			}, {
				FIO: "Ім'я Прізвище",
				img: face4,
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				idreview: "1"
			}
		]
	}

	render() {

		return (
			<div className="main">
				<div className="container">
					<h1 className="about-college head-text can-be-edited">Про коледж</h1>
					<img alt="college-pic" src={college_pic} className="college-pic" />
					<h2 className="why-go-to-college sub-head-text">Чому вступати до ХПКК?</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					<h2 className="famous-graduates sub-head-text">Відгуки випускників ХПКК</h2>
					<div className="main-review">
						<RevievList graduateData={this.state.graduateData} />
					</div>
					<div className="wanna-go-college padd-block">
						<p className="wanna-go-college-text tac">Бажаєте вступити до коледжу?</p>
						<p className="tac">Відвідайте розділ "Абітурієнтам" щоб дізнатися як вступити до коледжу, ознайомитися з правилами прийому та документацією</p>
						<Link to="/vstup" className="wanna-go-college-button">Перейти</Link>
					</div>
				</div>
			</div>
		)
	}
}
export default Autoblock
