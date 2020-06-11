import React, { useState } from 'react';
import './Specialty.css';
import specialy1 from '../../public/specialy.png';
import specialy2 from '../../public/specialty.png'
import leftArrow from '../../public/arrow-point-to-right-red.svg';
import rightArrow from '../../public/arrow-point-to-left-red.svg';
import activeOval from '../../public/fill-oval.svg';
import oval from '../../public/oval.svg';

const Specialty = () => {
	const [sliderN, setSliderN] = useState(1);

	const slider = [
		specialy1,
		specialy2,
		specialy1,
		specialy2,
		specialy1
	];

	const setDots = n => setSliderN(n);

	function nextSlide() {
		sliderN === 5
			? setSliderN(1)
			: setSliderN(sliderN + 1)
	};

	function prevSlide() {
		sliderN === 1
			? setSliderN(5)
			: setSliderN(sliderN - 1)
	};

	function setSlide(n) {
		return sliderN === n
			? <img onClick={() => setDots(n)} src={activeOval} alt="oval" />
			: <img onClick={() => setDots(n)} src={oval} alt="oval" />
	};

	const [slider2N, setSlider2N] = useState(1);

	const slider2 = [
		specialy2,
		specialy1,
		specialy2,
		specialy1,
		specialy2
	];

	const setDots2 = n => setSlider2N(n);

	function nextSlide2() {
		slider2N === 5
			? setSlider2N(1)
			: setSlider2N(slider2N + 1)
	};

	function prevSlide2() {
		slider2N === 1
			? setSlider2N(5)
			: setSlider2N(slider2N - 1)
	};

	function setSlide2(n) {
		return slider2N === n
			? <img onClick={() => setDots2(n)} src={activeOval} alt="oval" />
			: <img onClick={() => setDots2(n)} src={oval} alt="oval" />
	};

	return (
		<div className="specialty">
			<div className="container">
				<h1 className="head-text">Спеціальності</h1>
				<div className="slider-img" style={{ background: `url("${slider[sliderN - 1]}") no-repeat center top / cover` }}>
					<img onClick={() => prevSlide()} className="leftArrowSpecialy" src={leftArrow} alt="leftArrow" />
					<div className="dots">
						{setSlide(1)}
						{setSlide(2)}
						{setSlide(3)}
						{setSlide(4)}
						{setSlide(5)}
					</div>
					<img onClick={() => nextSlide()} className="rightArrowSpecialy" src={rightArrow} alt="rightArrow" />
				</div>
				<h2 className="sub-head-text">121 «Інженерія програмного забезпечення</h2>
				<p className="sub-main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam asperiores sequi repudiandae autem nesciunt, fuga officiis. Eius voluptatibus modi amet deleniti cupiditate odit fugit odio corrupti. Nulla nam odio numquam animi sapiente tenetur doloremque qui at minima ut quam ipsam quisquam excepturi non magni molestias fugiat modi necessitatibus, facilis expedita sunt, repellendus neque quaerat harum! Quibusdam impedit, sapiente libero eligendi voluptates alias officia facere necessitatibus enim sed quam. Alias sunt commodi ex quam ipsum neque pariatur tempora, explicabo dolores. Nobis cum sapiente illum quae, odio quaerat mollitia aspernatur quasi pariatur quam tempora delectus, quibusdam consectetur doloribus. Magni, impedit repellendus!</p>
				<div className="slider-img" style={{ background: `url("${slider2[slider2N - 1]}") no-repeat center top / cover` }}>
					<img onClick={() => prevSlide2()} className="leftArrowSpecialy" src={leftArrow} alt="leftArrow" />
					<div className="dots">
						{setSlide2(1)}
						{setSlide2(2)}
						{setSlide2(3)}
						{setSlide2(4)}
						{setSlide2(5)}
					</div>
					<img onClick={() => nextSlide2()} className="rightArrowSpecialy" src={rightArrow} alt="rightArrow" />
				</div>
				<h2 className="sub-head-text">123 "Комп'ютерна інженерія"</h2>
				<p className="sub-main-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ullam asperiores sequi repudiandae autem nesciunt, fuga officiis. Eius voluptatibus modi amet deleniti cupiditate odit fugit odio corrupti. Nulla nam odio numquam animi sapiente tenetur doloremque qui at minima ut quam ipsam quisquam excepturi non magni molestias fugiat modi necessitatibus, facilis expedita sunt, repellendus neque quaerat harum! Quibusdam impedit, sapiente libero eligendi voluptates alias officia facere necessitatibus enim sed quam. Alias sunt commodi ex quam ipsum neque pariatur tempora, explicabo dolores. Nobis cum sapiente illum quae, odio quaerat mollitia aspernatur quasi pariatur quam tempora delectus, quibusdam consectetur doloribus. Magni, impedit repellendus!</p>
			</div>
		</div>
	)
}

export default Specialty;