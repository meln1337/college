import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './UnitModal.css';

function isEmpty (obj) {
    return JSON.stringify(obj) === '{}';
}

const UnitModal = ({ data, subgroup }) => {
    debugger;
    return (
        <div className="unit-modal">
            <div className="container">
                <div className="padd-block">
                    <p className="unit-modal__head">П-{subgroup}</p>
                    <div className="unit-schedule-block">
                        {data.map((el, i) => (
                            <div className="unit-item" key={i}>
                                <p className="unit-item__date">{el.date}</p>
                                <p className="unit-item__day">{el.day}</p>
                                <div className="unit-schedule">
                                    {isEmpty(el.schedule)
                                    ? 
                                        <p className="unit-no-consultation">Консультацій немає</p>
                                    :
                                        Object.keys(el.schedule).map((sch, index) => (
                                            <p className="unit-schedule__text" key={index}><span className="unit__schedule__text-medium">{sch} година: </span>{el.schedule[sch]}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }, { match }) => ({
    data: languageReducer[languageReducer.from].unitPage[match.params.subgroup],
    subgroup: match.params.subgroup
})

export default withRouter(connect(mapStateToProps, null)(UnitModal))