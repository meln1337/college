import React from 'react'
import './Contract.css'

export default () => (
    <div className="contract">
        <div className="container">
            <h1 className="head-text">Реквізити для сплати контракту</h1>
            <div className="details-padd-block padd-block">
                <p className="padd-block-sub"><strong>Код отримувача</strong>: 123456789</p>
                <p className="padd-block-sub"><strong>Р/р отримувача</strong>: 123456789</p>
                <p className="padd-block-sub"><strong>Банк отримувача</strong>: Bank of Ukraine</p>
            </div>
        </div>
    </div>
)