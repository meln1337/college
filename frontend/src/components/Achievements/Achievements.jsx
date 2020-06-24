import React from 'react'
import './Achievements.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Achievements = ({ lan }) => {
    return (
        <div className="achievments">
            <div className="container">
                <h1 className="head-text">{lan.head}</h1>
                <p className="sub-main-text">{lan.textF}</p>
                <p className="sub-main-text">{lan.textS}</p>
                <p className="main-text">{lan.sub}</p>
                {lan.years.map((el, i) => (
                    <div className="padd-block ach-padd-block" key={i}>
                        <p className="main-text">{el.yearText}</p>
                        <Link className="button" to={`/achievementsModal?year=${el.year}`}>{el.go}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }) => ({
    lan: languageReducer[languageReducer.from].achievements
})

export default connect(mapStateToProps, null)(Achievements)