import React from 'react'
import './ZNO.css'
import zno from '../../public/YouTube Player_ F1.png'

export default () => {
    return (
        <div className="ZNO">
            <div className="container">
                <h1 className="head-text">Пробне ЗНО 2020 року</h1>
                <div className="zno-padd-block padd-block">
                    <h3 className="padd-block-head">Пробне ЗНО</h3>
                    <div className="video-zno">
                        <img src={zno} alt="video-zno" />
                    </div>
                </div>

                <div className="zno-padd-block padd-block">
                    <h3 className="padd-block-head">Реєстрація на ЗНО 2020 року</h3>
                    <div className="video-zno">
                        <img src={zno} alt="video-zno" />
                    </div>
                </div>
            </div>
        </div>
    )
}