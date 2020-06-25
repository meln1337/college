import React, { useState, Fragment } from 'react'
import './Rights.css'

const deleteSvg = './delete.svg'

export default ({ data, admin, addRight, deleteRight, from }) => {
    const [form, setForm] = useState({
        link: '',
        text: ''
    })

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const add = () => addRight(form)

    return (
        <div className="rights">
            <div className="container">
                <h1 className="head-text">{from === 'UA' ? 'Правова інформація' : 'Legal information'}</h1>
                <div className="rights-list">
                    {admin ? data.map((el, i) => (
                        <div className="financial-flex">
                            <a key={i} className="link-to-document" href={`\\${el.link}`}>{el.text}</a>
                            <img onClick={() => deleteRight({ id: el._id })} src={deleteSvg} alt="delete" />
                        </div>
                    )) : data.map((el, i) => (
                        <a key={i} className="link-to-document" href={`\\${el.link}`}>{el.text}</a>
                    ))}
                    {admin && <Fragment>
                        <p className="sub-head-text">{from === 'UA' ? 'Добавити документ' : 'Add document'}</p>
                        <div className="financial-report__add-link">
                            <div className="financial-report__add-link__text">
                                <span>{from === 'UA' ? 'Текст' : 'Text'}</span>
                                <input id="financial_text" name="text" placeholder="text" type="text" value={form.text} onChange={onChange} />
                            </div>
                            <div className="financial-report__add-link__link">
                                <span>{from === 'UA' ? 'Посилання' : 'Link'}</span>
                                <input id="financial_link" name="link" placeholder="link" type="text" value={form.link} onChange={onChange} />
                            </div>
                            <button className="financial-report__add-link__submit" onClick={add}>{from === 'UA' ? 'Добавити' : 'Add'}</button>
                        </div>
                    </Fragment>}
                </div>
            </div>
        </div>
    )
}