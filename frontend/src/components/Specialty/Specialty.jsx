import React from 'react';
import './Specialty.css';
import { connect } from 'react-redux';
// import specialy1 from '../../public/specialy.png';
// import specialy2 from '../../public/specialty.png'
// import leftArrow from '../../public/arrow-point-to-right-red.svg';
// import rightArrow from '../../public/arrow-point-to-left-red.svg';
// import activeOval from '../../public/fill-oval.svg';
// import oval from '../../public/oval.svg';
const spec1 = './специальности .jpg';
const spec2 = './специальности 1.jpg';

const Specialty = ({ lan }) => {
	// const [sliderN, setSliderN] = useState(1);

	// const slider = [
	// 	specialy1,
	// 	specialy2,
	// 	specialy1,
	// 	specialy2,
	// 	specialy1
	// ];

	// const setDots = n => setSliderN(n);

	// function nextSlide() {
	// 	sliderN === 5
	// 		? setSliderN(1)
	// 		: setSliderN(sliderN + 1)
	// };

	// function prevSlide() {
	// 	sliderN === 1
	// 		? setSliderN(5)
	// 		: setSliderN(sliderN - 1)
	// };

	// function setSlide(n) {
	// 	return sliderN === n
	// 		? <img onClick={() => setDots(n)} src={activeOval} alt="oval" />
	// 		: <img onClick={() => setDots(n)} src={oval} alt="oval" />
	// };

	// const [slider2N, setSlider2N] = useState(1);

	// const slider2 = [
	// 	specialy2,
	// 	specialy1,
	// 	specialy2,
	// 	specialy1,
	// 	specialy2
	// ];

	// const setDots2 = n => setSlider2N(n);

	// function nextSlide2() {
	// 	slider2N === 5
	// 		? setSlider2N(1)
	// 		: setSlider2N(slider2N + 1)
	// };

	// function prevSlide2() {
	// 	slider2N === 1
	// 		? setSlider2N(5)
	// 		: setSlider2N(slider2N - 1)
	// };

	// function setSlide2(n) {
	// 	return slider2N === n
	// 		? <img onClick={() => setDots2(n)} src={activeOval} alt="oval" />
	// 		: <img onClick={() => setDots2(n)} src={oval} alt="oval" />
	// };

	return (
		<div className="specialty">
			<div className="container">
	<h1 className="head-text">{lan.head}</h1>
				<img className="spec-img" src={spec1} alt="spec1" />
				<h2 className="sub-head-text">{lan.sub1}</h2>
				<p className="sub-main-text">{lan.text1}</p>
				<p className="sub-main-text">{lan.text2}<br />
				&#9679; &nbsp; {lan.text3} <br />
				&#9679; &nbsp; {lan.text4} <br />
				&#9679; &nbsp; {lan.text5}
				</p>
				<img className="spec-img" src={spec2} alt="spec2"/>
				<h2 className="sub-head-text">{lan.sub2}</h2>
				<p className="sub-main-text">{lan.text6}</p>
				<p className="sub-main-text">{lan.text7}</p>
				<p className="sub-main-text">{lan.text8}</p>
				<p className="sub-main-text">{lan.text9}</p>
				<p className="sub-main-text">
					{lan.text10} <br />
					{lan.text11} <br />
					{lan.text12} <br />
					{lan.text13} <br />
					{lan.text14} <br />
				</p>
			</div>
		</div>
	)
}

const mapStateToProps = ({ languageReducer }) => ({
	lan: languageReducer[languageReducer.from].specialtyPage
})

export default connect(mapStateToProps, null)(Specialty);