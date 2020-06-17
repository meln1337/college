import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './Footer.css'
const call = './call-answer.svg'
const mail = './mail.svg'
const pin = './pin.svg'
const instagram = './instagram.svg'

const Footer = ({ data }) => {
    return (
    <footer className="footer">
        <div className="container footer-container">
            <div className="footer-content">
                <div className="footer-contact">
                    <p className="footer-contact-text">{data.contactsText}</p>
                    <p><img src={call} alt="icon" /><a href={`tel:${data.telephoneNumberCall}}`}>{data.telephoneNumber}</a></p>
                    <p><img src={mail} alt="icon" />{data.email}</p>
                    <p><img className="pin" src={pin} alt="icon" />{data.street}</p>
                    <div className="footer-icons">
                        <Link target="_blank" to="\https://www.instagram.com/khpcc_kh/?hl=ru"><img src={instagram} alt="icon"/></Link>
                    </div>
                </div>
                <div className="footer-HKFK">
                    {data.footerHFKF.map((el, i) => (
                        <p key={i}><strong>{el[0]}</strong>{el[1]}</p>
                    ))}
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.305041021312!2d36.24226703208847!3d50.00563753299264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0dc50500105%3A0xd04c4435619d3fe5!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQv9Cw0YLQtdC90YLQvdC-LdC60L7QvNC_0YzRjtGC0LXRgNC90YvQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2sua!4v1585130810418!5m2!1sru!2sua" width="100%" height="100%" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </div>
    </footer>
)
    }

const mapStateToProps = ({ languageReducer }) => ({
    data: languageReducer[languageReducer.from].footerPage
})

export default connect(mapStateToProps, null)(Footer)