import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import './CourseModal.css'

function calcUnit (i, course, part) {
    if (part == 121) {
        return course * (i + 1)
    }
    else {
        return course * (i + 1) + 12
    }
}

const CourseModal = ({ data, course, part }) => {
    debugger
    return (
        <div className="course-modal">
            <div className="container">
                <div className="padd-block course-modal_padd-block">
                <p className="main-text">{course} курс</p>
                    {Object.keys(data).map((unit, i) => (
                        <div key={i} className="padd-block course__padd-block">
                            <p className="sub-main-text course-name">П-{unit}</p>
                            <Link target="_blank" to={`/modal/unit/${calcUnit(i, course, part)}`} className="button">Перейти</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }, { match }) => ({
    data: languageReducer[languageReducer.from].coursePage[match.params.part][match.params.course],
    course: match.params.course,
    part: match.params.part
})

export default withRouter(connect(mapStateToProps, null)(CourseModal))