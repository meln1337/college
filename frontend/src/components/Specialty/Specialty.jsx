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
				<p className="sub-main-text"> Програма спеціальності 121 «Інженерія програмного забезпечення» орієнтована на підготовку кваліфікованих фахівців в галузі інженерії програмного забезпечення, котра спрямована на розробку програмних систем, які працюють надійно та ефективно, вартість розробки та супроводу яких є доступною, і які задовольняють вимогам, висунутим до них замовниками. Сьогодні фахівці з інженерії програмного забезпечення є найбільш затребуваними на ринку праці серед інших фахівців з інформаційних технологій, вони приймають участь у розробці вітчизняних і міжнародних програмних проектів, і мають достойну оплату своєї праці. Попит на фахівців з інженерії програмного забезпечення у майбутньому буде тільки зростати.</p>
				<p className="sub-main-text">Основні спеціалізації: <br />
				&#9679; &nbsp; Прикладне програмування (з поглибленим вивченням спеціалізованих дисциплін) <br />
				&#9679; &nbsp; Web-програмування: розробка сайтів <br />
				&#9679; &nbsp; Блокчейн та прикладне програмне забезпечення
</p>
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
				<p className="sub-main-text">Технологічна сфера: знання комп’ютерів, їх збирання, тестування та ремонту, програмування, інтернет-сервісів і мобільних технологій.</p>
				<p className="sub-main-text">Математична сфера: проектування програмних додатків і розумних апаратних пристроїв, кібер-безпека, антивіруси, проектування цифрових систем на кристалах і комп’ютерних мереж.</p>
				<p className="sub-main-text"> Сфера програмування для ринку праці: C ++, Java, Python, .NET, C #, VHDL, Verilog, System C.</p>
				<p className="sub-main-text">Вміння і компетентності, якими буде володіти випускник за спеціальністю Комп’ютерна інженерія:</p>
				<p className="sub-main-text">
					1. Розробка і обслуговування систем і мереж під управлінням Windows, Unix, Linux; <br/>
					2. Створення бездротових засобів комунікації, розробка програмних продуктів за допомогою мовних засобів високого і низького рівнів C ++, С #, Java, Python, Assembler і мікромініатюрних цифрових систем на кристалах; <br/>
					3. Розробка користувальницьких і системних інтерфейсів, апаратних і програмних компіляторів, інтелектуальних систем програмування та проектування баз знань; <br/>
					4. Аналітика великих даних; <br/>
					5. Проектування хмарних сервісів і мобільних додатків, розумних пристроїв, інтегрованих з Інтернет мережами. <br/>

				</p>
			</div>
		</div>
	)
}

export default Specialty;