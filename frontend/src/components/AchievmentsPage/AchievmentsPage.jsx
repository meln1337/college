import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { parse } from 'qs'
import './AchievmentsPage.css'
const back = './back.svg'

function createMarkup(text) {
    return {__html: text};
  }

const AchievmentsPage = ({ data }) => (
    <div className="achievments-modal">
        <div className="container">
            <div className="padd-block">
                <Link className="back-to-news" to="/achievements"><img src={back} alt="back" /></Link>
                <div className="ach">
                    <p className="sub-head-text">{data.head}</p>
                    {data.text.map((_el, index) => (
                        <div key={index} dangerouslySetInnerHTML={createMarkup(_el)}></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = ({ languageReducer }, { location }) => {
    const { year } = parse(location.search, {
        ignoreQueryPrefix: true
    })

    return {
        data: languageReducer[languageReducer.from].achievementsPage[parseInt(year)]
    }
}

export default withRouter(connect(mapStateToProps, null)(AchievmentsPage))