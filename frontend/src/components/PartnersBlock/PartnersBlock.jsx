import React, { Fragment } from 'react'
import './PartnersBlock.css'
import cam from '../../public/university-of-cambridge-logo@logotyp.us.svg'
import harvard from '../../public/harvard-university-logo@logotyp.us.svg'
import nor from '../../public/northwestern-university-logo@logotyp.us.svg'
import code from '../../public/codecademy-logo@logotyp.us.svg'
import hmh from '../../public/hmh-logo@logotyp.us.svg'
import nex from '../../public/nexford-logo@logotyp.us.svg'
import epam from '../../public/epam-systems-logo-vector.svg'
import gs from '../../public/logo-gs.svg'
import gl from '../../public/GlobalLogic-Logo-Gray.png'
import nix from '../../public/nix-logo.svg'
import sim from '../../public/Simcorp_logo.svg'
import microsoft from '../../public/microsoft-logo@logotyp.us.svg'

export default ({ type }) => (
    <div className="partners-block padd-block">
        {type === 1 &&
            <Fragment>
                <img src={cam} alt="img" />
                <img src={harvard} alt="img" />
                <img src={nor} alt="img" />
                <img src={code} alt="img" />
                <img src={hmh} alt="img" />
                <img src={nex} alt="img" />
            </Fragment>
        }
        {type === 2 &&
            <Fragment>
                <img src={epam} alt="img"></img>
                <img src={gs} alt="img"></img>
                <img src={gl} alt="img"></img>
                <img src={nix} alt="img"></img>
                <img src={sim} alt="img"></img>
                <img src={microsoft} alt="img"></img>
            </Fragment>
        }
    </div>
)