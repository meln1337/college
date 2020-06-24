import React from 'react'
import './Work.css'
import PartnersBlock from '../PartnersBlock/PartnersBlock'
import { connect } from 'react-redux'

const Work = ({ lan }) => (
    <div className="Work">
        <div className="container">
            <h1 className="head-text">{lan.head}</h1>
            <p className="sub-main-text">{lan.textF}</p>
            <p className="sub-main-text">{lan.textS}</p>
            <p className="sub-main-text">{lan.textT}</p>
            <h1 className="head-text">{lan.bPartners}</h1>
            <PartnersBlock type={1} />
            <p className="sub-main-text">{lan.comision}</p>
            <h1 className="head-text">{lan.oPartners}</h1>
            <PartnersBlock type={2} />
        </div>
    </div>
)

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].workPage
})

export default connect(mapStateToProps, null)(Work);