import React from 'react';
import './Galery.css';
import photoGalery from '../../public/photo-galery.png';
import arrowPointToRightNonActive from '../../public/arrow-point-to-right-non-active.svg';
import arrowPointToRightActive from '../../public/arrow-point-to-right-active.svg';
import arrowPointToRightNonActive2 from '../../public/arrow-point-to-right-non-active2.svg'
import galeryFull from '../../public/galery-full1.png';
import galeryFull2 from '../../public/galery-full2.png';
import galeryFull3 from '../../public/galery-full3.png';
import galeryFull4 from '../../public/galery-full4.png';

class Galery extends React.Component {
    render() {
        return (
            <div className="galery">
                <div className="container">
                    <h1 className="head-text">Фотогалерея</h1>
                    <div className="padd-block photo-list-wrapper">
                        <div className="photo-list">
                            <p className="main-text">Міжнародна конференція</p>
                            <div className="photo-list__block">
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRightLeft" src={arrowPointToRightNonActive} alt="arrowPointToRightNonActive" />
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRight" src={arrowPointToRightActive} alt="arrowPointToRightActive" />
                            </div>
                        </div>
                        <img src={galeryFull} alt="galeryFull" className="galery-full" />
                    </div>
                    <div className="padd-block photo-list-wrapper">
                        <div className="photo-list">
                            <p className="main-text">Фотозвіт з конкурсу з української мови</p>
                            <div className="photo-list__block">
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRightLeft" src={arrowPointToRightNonActive} alt="arrowPointToRightNonActive" />
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRight" src={arrowPointToRightNonActive2} alt="arrowPointToRightActive" />
                            </div>
                        </div>
                        <img src={galeryFull2} alt="galeryFull" className="galery-full" />
                    </div>
                    <div className="padd-block photo-list-wrapper">
                        <div className="photo-list">
                            <p className="main-text">Фотозвіт з конкурсу з програмування</p>
                            <div className="photo-list__block">
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRightLeft" src={arrowPointToRightNonActive} alt="arrowPointToRightNonActive" />
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRight" src={arrowPointToRightActive} alt="arrowPointToRightActive" />
                            </div>
                        </div>
                        <img src={galeryFull3} alt="galeryFull" className="galery-full" />
                    </div>
                    <div className="padd-block photo-list-wrapper">
                        <div className="photo-list">
                            <p className="main-text">Фотозвіт з конкурсу з математики</p>
                            <div className="photo-list__block">
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRightLeft" src={arrowPointToRightNonActive} alt="arrowPointToRightNonActive" />
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img src={photoGalery} alt="photoGalery"/>
                                <img className="arrowToRight" src={arrowPointToRightActive} alt="arrowPointToRightActive" />
                            </div>
                        </div>
                        <img src={galeryFull4} alt="galeryFull" className="galery-full" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Galery
