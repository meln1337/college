import React from 'react'
import './Contract.css'
import { connect } from 'react-redux'

const Contract = ({ lan }) => (
    <div className="contract">
        <div className="container">
            <h1 className="head-text">{lan.head}</h1>
            <div className="details-padd-block padd-block">
                <p className="padd-block-sub"><strong>{lan.text1Bold}</strong>: {lan.text1}</p>
                <p className="padd-block-sub"><strong>{lan.text2Bold}</strong>: {lan.text2}</p>
                <p className="padd-block-sub"><strong>{lan.text3Bold}</strong>: {lan.text3}</p>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].contractPage
})

export default connect(mapStateToProps, null)(Contract)