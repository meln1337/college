import React, { Fragment } from 'react'
import './PartnersBlock.css'
const epam = './epam-systems-logo-vector.svg'
const gs = './logo-gs.svg'
const nix = './nix-logo.svg'
const sim = './Simcorp_logo.svg'
const kpi = './NTU_KhPI_Logo_ru_trans-300x300.png'
const kire = './unnamed.png'
const kai = './1200px-Эмблема_ХАИ.png'
const knure = './logo-khnadu.png'

export default ({ type }) => (
    <div className="partners-block padd-block">
        {type === 1 &&
            <Fragment>
                <img src={kpi} alt="img" />
                <img src={kire} alt="img" />
                <img src={kai} alt="img" />
                <img src={knure} alt="img" />
            </Fragment>
        }
        {type === 2 &&
            <Fragment>
                <img src={epam} alt="img" />
                <img src={gs} alt="img" />
                <img src={nix} alt="img" />
                <img src={sim} alt="img" />
            </Fragment>
        }
    </div>
)