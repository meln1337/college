import React from 'react'
import './ZNO.css'

export default () => {
    return (
        <div className="ZNO">
            <div className="container">
                <h1 className="head-text">ЗНО 2020 року</h1>
                <div className="zno-padd-block padd-block">
                    <h3 className="padd-block-head">ЗНО</h3>
                    <div className="video-zno">
                        <div className="video">
                            <iframe width="1280" height="627" src="https://www.youtube.com/embed/LoDWywv1iW4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}