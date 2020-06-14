import React, { useState, Fragment } from 'react';
import './FinancialReport.css';

const FinancialReport = ({ data, addLink, admin }) => {
    const [form, setForm] = useState({
        financial_text: '',
        financial_link: ''
    });

    const onChange = e => setForm({ ...form, [e.target.id]: e.target.value });

    const AddLink = () => {
        if (form.financial_text !== '' && form.financial_link !== '') {
            addLink({ link: form.financial_link, text: form.financial_text });
            form.financial_link = '';
            form.financial_text = '';
        }
        else {
            console.log('incorrect data');
        }
    };

    return (
        <div className="financial-report">
            <div className="container">
                <h1 className="head-text">Фінансова звітність</h1>
                <div className="financial-report-list">
                    {data.map((el, i) => (
                        <a key={i} className="link-to-document" href={el.link}>{el.text}</a>
                    ))}
                </div>
                {admin && <Fragment>
                    <p className="sub-head-text">Добавити посилання</p>
                    <div className="financial-report__add-link">
                        <div className="financial-report__add-link__text">
                            <span>Text</span>
                            <input id="financial_text" placeholder="text" type="text" onChange={onChange} />
                        </div>
                        <div className="financial-report__add-link__link">
                            <span>Link</span>
                            <input id="financial_link" placeholder="link" type="text" onChange={onChange} />
                        </div>
                        <button onClick={AddLink} className="financial-report__add-link__submit">Добавити</button>
                    </div>
                </Fragment>}
            </div>
        </div>
    )
}

export default FinancialReport;