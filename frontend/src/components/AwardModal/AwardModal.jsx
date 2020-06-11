import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './AwardModal.css';

const Award = ({ data }) => (
    <div className="award-modal">
        <div className="container">
            <div className="padd-block">
                <p className="main-text">{data.year} рік</p>
                <div className="award-grid">
                    <div className="award-images">
                        <img src={data.img1} alt="img1" />
                        <img src={data.img2} alt="img2" />
                    </div>
                    <div className="award-block">
                        <div className="award-logo">
                            <div className="logo">
                                <h1 className="logo-text">хпкк</h1>
                            </div>
                            <div className="stick">|<span>Харківський патенто-комп'ютерний коледж</span></div>
                        </div>
                        <p className="award__sub-head-text">Нагорода</p>
                        <p className="award-text">{data.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = ({ languageReducer }, { match }) => ({
    data: languageReducer[languageReducer.from].awardPage[match.params.year]
})

export default withRouter(connect(mapStateToProps, null)(Award));