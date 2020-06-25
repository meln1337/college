import React from 'react'
import './ZNO.css'
import { connect } from 'react-redux'

const ZNO = ({ lan }) => {
    return (
        <div className="ZNO">
            <div className="container">
                <h1 className="head-text">{lan.head}</h1>
                <div className="zno-padd-block padd-block">
                    <h3 className="padd-block-head">{lan.text}</h3>
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

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].znoPage
})

export default connect(mapStateToProps, null)(ZNO)