import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { parse } from 'qs'
import './ResponseModal.css'
import tail from '../../public/Tail.svg'
const back = './back.svg';

const ResponseModal = ({ data }) => {
    return (
        <div className="modal">
            <div className="container">
                <div className="response-padd-block padd-block">
                    <Link className="back-to-news" to="/about"><img src={back} alt="back"/></Link>
                    <p className="main-text">Відгук випускника</p>
                    <div className="response-block">
                        <p className="response-text">{data.text}</p>
                        <img className="tail" src={tail} alt="tail" />
                    </div>
                    <div className="response-bottom">
                        <img src={data.img} alt="photo" />
                        <div className="fio-and-desc">
                            <p>Ім'я Прізвище</p>
                            <p>опис Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius beatae ipsam iusto atque voluptatibus optio cumque quas iure fuga.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ languageReducer }, { location }) => {
    debugger
    const { post } = parse(location.search, {
        ignoreQueryPrefix: true
    })

    return {
        data: languageReducer[languageReducer.from].responsePage[parseInt(post) - 1]
    }
}

export default withRouter(connect(mapStateToProps, null)(ResponseModal))