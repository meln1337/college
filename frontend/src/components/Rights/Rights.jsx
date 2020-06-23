import React, { useState, Fragment } from 'react'
import './Rights.css'

export default ({ data, admin, addRight }) => {
    const [form, setForm] = useState({
        link: '',
        text: ''
    })

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const add = () => addRight(form)

    return (
        <div className="rights">
            <div className="container">
                <h1 className="head-text">Правова інформація</h1>
                <div className="rights-list">
                    {data.map((el, i) => (
                        <a key={i} className="link-to-document" href={`\\${el.link}`}>{el.text}</a>
                    ))}
                    {admin && <Fragment>
                        <p className="sub-head-text">Add</p>
                        <div className="financial-report__add-link">
                        <div className="financial-report__add-link__text">
                            <span>Text</span>
                            <input id="financial_text" name="text" placeholder="text" type="text" value={form.text} onChange={onChange} />
                        </div>
                        <div className="financial-report__add-link__link">
                            <span>Link</span>
                            <input id="financial_link" name="link" placeholder="link" type="text" value={form.link} onChange={onChange} />
                        </div>
                        <button className="financial-report__add-link__submit" onClick={add}>add</button>
                        </div>
                        </Fragment>}
                </div>
            </div>
        </div>
    )
}