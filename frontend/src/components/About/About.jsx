import React, { Component } from 'react'
import './About.css'
import RevievList from '../../components/RevievList/RevievList'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
				img: face2,
				description: "Закінчив в 2012 році за спеціальністю \"Обслуговування комп'ютерних систем і мереж\". Вступив в ХАІ на \"інженер програмного забезпечення\" і з тих пір працюю по \"інститутській\" спеціальності. Що можу сказати з власного досвіду: ті, хто не хоче вчитися - не навчаться ніде. Ті, хто хочуть вчитися - тих навчать. Тут не вистачить місця, щоб повністю висловитися, але навіть зараз я по роботі періодично торкаюся того матеріалу, якому навчали в коледжі і дуже шкодую, що не приділяв навчанню більше часу",
				idreview: "1"
			},
			{
				FIO: "Ім'я Прізвище",
				img: face1,
				description: "Коледж кращає. Благо, люди, які приходять сюди, намагаються донести студентам істини новіше, ніж ті, які студенти вивчали ще року 3 назад. Навчатися тут нескладно, головне - прагнення до цього. Більшість викладачів хороші фахівці і чудові люди. Коледж дав мені необхідний мінімум. Хороші викладачі, якщо щось не зрозумів пояснять на перерві або після пар. Пояснюють добре. Багато комп'ютерів, не як в інших коледжах сидять по 3 людини.",
				idreview: "1"
			},
			{
				FIO: "Ім'я Прізвище",
				img: face4,
				description: "Люблю свій рідний ХПКК!  Мені тут подобається абсолютно все, хороша атмосфера, професіні викладачі і зручне місце розташування! Я дуже рада що обрала саме Харківський патентно- комп’ютерний коледж серед всіх інших коледжів Харкова.",
				idreview: "1"
			},
			{
				FIO: "Ім'я Прізвище",
				img: face3,
				description: "ХПКК мені подобається. Випустилась рік тому. Головне влитися в навчальний процес. Тоді все буде: знання, успішність, упевненість в майбутньому. Пари проходять цікаво, професійні викладачі, цікаво спілкуватися з такими людьми. Взагалі все в колледжі классно !!! Якість навчання на гідному рівні, ХПКК рекомендую. Взагалі, все залежить тільки від вас самих: ніхто за вас не буде вивчати матеріал, складати іспити. Всім удачі!",
				idreview: "1"
			}
		],
		graduateDataEn: [
			{
				FIO: "Full name",
				img: face2,
				description: 'Graduated in 2012 with a degree in "Maintenance of computer systems and networks." I joined KHAI as a "software engineer" and have been working in the "institute" specialty ever since. What can I say from my own experience: those who do not want to learn will not study anywhere. Those who want to learn will be taught. There is not enough space here to fully express myself, but even now at work I periodically touch on the material that was taught in college and I am very sorry that I did not spend more time studying',
				idreview: "1"
			},
			{
				FIO: "Full name",
				img: face1,
				description: "College is getting better. Fortunately, the people who come here are trying to tell students the truth newer than those that the students studied 3 years ago. It is easy to study here, the main thing is the desire to do so. Most teachers are good professionals and wonderful people. College gave me the required minimum. Good teachers, if you do not understand something will explain during a break or after a couple. Explain well. Many computers, not like in other colleges, have 3 people.",
				idreview: "1"
			},
			{
				FIO: "Full name",
				img: face4,
				description: "I love my native KPCC! I like absolutely everything here, good atmosphere, professional teachers and convenient location! I am very glad that I chose Kharkiv Patent and Computer College among all other colleges in Kharkiv.",
				idreview: "1"
			},
			{
				FIO: "Full name",
				img: face3,
				description: "I like KPCC. Released a year ago. The main thing is to join the learning process. Then everything will be: knowledge, success, confidence in the future. Couples are interesting, professional teachers, interesting to communicate with such people. In general, everything in college is great !!! The quality of training is at a decent level, I recommend COD. In general, everything depends only on yourself: no one will study the material for you, take exams. Good luck to all!",
				idreview: "1"
			}
		]
	}

	render() {

		return (
			<div className="main">
				<div className="container">
					<h1 className="about-college head-text can-be-edited">{this.props.lan.head}</h1>
					<img alt="college-pic" src={college_pic} className="college-pic" />
					<h2 className="why-go-to-college sub-head-text">{this.props.lan.why}</h2>
					<p>{this.props.lan.whySub}</p>
					<h2 className="famous-graduates sub-head-text">{this.props.lan.responses}</h2>
					<div className="main-review">
						<RevievList from={this.props.from} graduateData={this.props.from === 'UA' ? this.state.graduateData : this.state.graduateDataEn} />
					</div>
					<div className="wanna-go-college padd-block">
						<p className="wanna-go-college-text tac">{this.props.lan.wannaGo}</p>
						<p className="tac">{this.props.lan.wannaText}</p>
						<Link to="/vstup" className="wanna-go-college-button">{this.props.lan.go}</Link>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].aboutPage,
	from: languageReducer.from
})

export default connect(mapStateToProps, null)(Autoblock);
