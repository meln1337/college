import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { parse } from 'qs'
import './Zaminy.css'
const back = './back.svg';

const ZaminyModal = ({ data, course, from }) => {
    debugger
    return (
        <div className="course-modal">
            <div className="container">
                <div className="padd-block course-modal_padd-block">
                    <Link className="back-to-news" to="/replacements"><img src={back} alt="back" /></Link>
                    {from === 'UA' ? <p className="main-text">{course} курс</p> : <p className="main-text">{course} course</p>}
                    {Object.keys(data).map((unit, i) => (
                        <div key={i} className="padd-block course__padd-block">
                            {from === 'UA' ? <p className="sub-main-text course-name">П-{unit}</p> : <p className="sub-main-text course-name">Group {unit}</p>}
                            {from === 'UA' ? <Link to={data[unit]} className="button">Перейти</Link> : <Link to={data[unit]} className="button">Go</Link>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }, { location }) => {
    const { course, part } = parse(location.search, {
        ignoreQueryPrefix: true
    });

    return {
        data: languageReducer[languageReducer.from].zaminyPage[part][course],
        course,
        part,
        from: languageReducer.from
    };
}

export default withRouter(connect(mapStateToProps, null)(ZaminyModal))