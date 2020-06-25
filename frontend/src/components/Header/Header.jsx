import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
import { setLanguageThunk } from '../../redux/actions/language.actions';
import search from '../../public/icons8-search.svg'
import arrow from '../../public/arrow-point-to-right.svg'

const Header = ({ data, setLanguage, from }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [searching, setSearching] = useState(false);
    const [firstLayer, setFirstLayer] = useState(true);
    const [searchText, setSearchText] = useState('');
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, [])

    return (
        <header className="header">
            <div className="container header-container">
                <div className="left">
                    <div className="left-wrapper">
                        <div className="logo">
                            <h1 className="logo-text can-be-edited"><span className="red">{data.headerLogoLetter}</span>{data.headerLogo}</h1>
                        </div>
                        <div className="stick">|<span>{data.headerText}</span></div>
                    </div>
                    <div className="name-of-college can-be-edited">
                        {data.headerText}
                    </div>

                    <div className={showMenu ? "more menu-btn_active" : "more"} onClick={() => { setShowMenu(!showMenu); }}>
                        <span></span>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <p className="email">help@comcollege.org | <a href="tel:+380577004815">+38 057 700 4815</a></p>
                        <div className="top-right">
                            {!searching ?
                                <Fragment>
                                    {from === 'UA' ?
                                        <Fragment>
                                            <span className="language-active" onClick={() => setLanguage('UA')}>UA</span>
                                            <span className="language" onClick={() => setLanguage('EN')}>EN</span>
                                        </Fragment>
                                        : <Fragment>
                                            <span className="language" onClick={() => setLanguage('UA')}>UA</span>
                                            <span className="language-active" onClick={() => setLanguage('EN')}>EN</span>
                                        </Fragment>}
                                    <img src={search} alt="search" className="search" onClick={() => setSearching(true)} />
                                </Fragment>
                                :
                                <div className="mobile-search-wrapper">
                                    <img onClick={() => setSearching(false)} className="arrow" src={arrow} alt="back" />
                                    <img src={search} alt="search" className="search" onClick={() => setSearching(true)} />
                                    <input type="text" className="mobile-search" placeholder="Пошук" />
                                </div>
                            }
                        </div>
                    </div>
                    <hr />
                    <div className="bottom">
                        <nav>
                            {Object.keys(data.header).map((el, i) => (
                                <h1 className="can-be-edited" key={i}>{el}
                                    <div className="submenu">
                                        {data.header[el].map((_el, index) => (
                                            <Fragment key={index}>
                                                <Link to={_el.link}>{_el.label}</Link>
                                            </Fragment>
                                        ))}
                                    </div>
                                </h1>
                            ))}
                            <h1>
                                <Link className="can-be-edited" to={data.headerContacts.link}>{data.headerContacts.label}</Link>
                            </h1>
                        </nav>
                    </div>
                </div>
            </div >
            {showMenu &&
                <div className="container mobile-menu">
                    {firstLayer === true ? <div className="top">
                        <p className="email">help@comcollege.org | <a href="tel:+380577004815">+38 057 700 4815</a></p>
                        <div className="top-right">
                            {from === 'UA' ?
                                <Fragment>
                                    <span className="language-active" onClick={() => setLanguage('UA')}>UA</span>
                                    <span className="language" onClick={() => setLanguage('EN')}>EN</span>
                                </Fragment>
                                : <Fragment>
                                    <span className="language" onClick={() => setLanguage('UA')}>UA</span>
                                    <span className="language-active" onClick={() => setLanguage('EN')}>EN</span>
                                </Fragment>}
                        </div>
                    </div>
                        : <div className="back-to-menu" onClick={() => setFirstLayer(true)}><img src={arrow} alt="back" />Меню</div>
                    }
                    {firstLayer === true && <div className="mobile-search-block">
                        <div className="mobile-search-wrapper">
                            <img src={search} alt="search" className="search" onClick={() => setSearching(true)} />
                            <input type="text" className="mobile-search" placeholder="Пошук" />
                        </div>
                    </div>}
                    <nav>
                        {firstLayer === true ?
                            Object.keys(data.header).map((el, i) => (
                                <h1 className="mobile-menu-h1" key={i} onClick={() => setFirstLayer(el)}>{el}</h1>
                            ))
                            :
                            Object.keys(data.header).map((el, i) => (
                                firstLayer === el && <div key={i} className="mobile-submenu">
                                    {data.header[el].map((_el, index) => (
                                        <Fragment key={index}>
                                            <Link onClick={() => { setShowMenu(!showMenu); setFirstLayer(true); }} to={_el.link}>{_el.label}</Link>
                                        </Fragment>
                                    ))}
                                </div>
                            ))
                        }
                        {firstLayer === true && <h1>
                            <Link 
                                onClick={() => { setShowMenu(!showMenu); setFirstLayer(true); }} 
                                className="mobile-menu-h1" 
                                to={data.headerContacts.link}>{data.headerContacts.label}
                            </Link>
                        </h1>}
                    </nav>
                </div>}
        </header>
    )
}

const mapStateToProps = ({ languageReducer }) => ({
    from: languageReducer.from,
    data: languageReducer[languageReducer.from].headerPage
})

const mapDispatchToProps = {
    setLanguage: lan => setLanguageThunk(lan)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)