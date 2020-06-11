import React from 'react'
import { connect } from 'react-redux'
import './StructureModal.css'

const StructureModal = ({ data }) => {
    return (
        <div className="modal">
            <div className="container">
                <div className="structure-padd-block padd-block">
                    <p className="main-text">Викладачі коледжу</p>
                    <div className="main-head">
                        <div className="front">
                            <img src={data.headMain.img} alt="head-main-img" />
                            <p className="sub-main-text">{data.headMain.fio}</p>
                            <p className="sub-text">{data.headMain.rank}</p>
                        </div>
                        <div className="back">
                            <p className="sub-main-text">{data.headMain.back}</p>
                        </div>
                    </div>
                    <div className="default-structure">
                        {data.default.map((el, i) => (
                            <div className="default-structure-icon" key={i}>
                                <div className="front">
                                    <img src={el.img} alt="default-img" />
                                    <p className="sub-main-text">{el.fio}</p>
                                    <p className="sub-text">{el.rank}</p>
                                </div>
                                <div className="back">
                                    <p className="sub-main-text">{el.back}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }) => ({
    data: languageReducer[languageReducer.from].structureModalPage
})

export default connect(mapStateToProps, null)(StructureModal)