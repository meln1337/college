import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { parse } from 'qs'
import './CourseModal.css'
const back = './back.svg'

// function calcUnit (i, course, part) {
//     if (part == 121) {
//         return course * (i + 1)
//     }
//     else {
//         return course * (i + 1) + 12
//     }
// }

const CourseModal = ({ data, course, from }) => {
    debugger
    return (
        <div className="course-modal">
            <div className="container">
                <div className="padd-block course-modal_padd-block">
                    <Link className="back-to-news" to="/day-schedule"><img src={back} alt="back" /></Link>
                    {from === 'UA' ? <p className="main-text">{course} курс</p> : <p className="main-text">{course} course</p>}
                    {Object.keys(data).map((unit, i) => (
                        <div key={i} className="padd-block course__padd-block">
                            {from === 'UA' ? <p className="sub-main-text course-name">П-{unit}</p> : <p className="sub-main-text course-name">Group {unit}</p>}
                            <Link to={data[unit]} className="button"> {from === 'UA' ? 'Перейти' : 'Go'}</Link>
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
        data: languageReducer[languageReducer.from].coursePage[part][course],
        course,
        part,
        from: languageReducer.from
    };
}

export default withRouter(connect(mapStateToProps, null)(CourseModal))