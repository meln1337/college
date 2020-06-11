import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './Footer.css'
import call from '../../public/call-answer.svg'
import mail from '../../public/mail.svg'
import pin from '../../public/pin.svg'
import facebook from '../../public/facebook.svg'
import twitter from '../../public/twitter.svg'
import instagram from '../../public/instagram.svg'

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
                        <img src={facebook} alt="icon"/>
                        <img src={twitter} alt="icon"/>
                        <img src={instagram} alt="icon"/>
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
        {/* <div className="container footer-container-mobile">
            <div className="footer-content">
                <div className="footer-contact">
                    <h4>{data[data.from].footer.contactsText}</h4>
                    <p>{data[data.from].footer.telephoneNumber}</p>
                    <p>{data[data.from].footer.email}</p>
                    <p>{data[data.from].footer.street}</p>
                    <div className="footer-icons">
                        {data[data.from].footer.footerIcons.map((el, i) => (
                            <Fragment key={i}>
                                <img src={el.src} alt={el.alt} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className="footer-HKFK">
                    {data[data.from].footer.footerHFKF.map((el, i) => (
                        <p key={i}><strong>{el[0]}</strong>{el[1]}</p>
                    ))}
                </div>
            </div>
        </div>
        <div className="mobile-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.305041021312!2d36.24226703208847!3d50.00563753299264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0dc50500105%3A0xd04c4435619d3fe5!2z0KXQsNGA0YzQutC-0LLRgdC60LjQuSDQv9Cw0YLQtdC90YLQvdC-LdC60L7QvNC_0YzRjtGC0LXRgNC90YvQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2sua!4v1585130810418!5m2!1sru!2sua" width="100%" height="100%" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
        </div> */}
    </footer>
)
    }

const mapStateToProps = ({ languageReducer }) => ({
    data: languageReducer[languageReducer.from].footerPage
})

export default connect(mapStateToProps, null)(Footer)