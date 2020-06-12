import React, { Component } from 'react'
import './About.css'
import RevievList from '../../components/RevievList/RevievList'
import { Link } from 'react-router-dom'

const college_pic = './college-pic.png'
const face1 = './face1.png'
const face2 = './face2.png'
const face3 = './face3.png'
const face4 = './face4.png'

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
					<p> Ми переконані, якщо ви оберете навчання саме у Харківському патентно- комп’ютерному коледжі, то ваше сумлінне ставлення до навчання, цілеспрямованість у поєднанні з нашою матеріальною базою та методичним забезпеченням, кадровим педагогічним потенціалом і багаторічним досвідом освітянської діяльності забезпечать вам конкурентоспроможний рівень професійної підготовки і для фахової діяльності, і для продовження навчання. Підтвердженням цьому є відгуки наших випускників.</p>
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
