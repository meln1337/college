import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Modal = ({ data, from, type }) => {
    debugger

    return (
        <div className="modal">
                <div className="container">
                    {type === 'response'}
                </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }, { match }) => ({
    from: languageReducer.from,
    data: languageReducer[languageReducer.from].modal[match.params.type],
    type: match.params.type
})

export default withRouter(connect(mapStateToProps, null)(Modal))