import React, { useState, Fragment } from 'react';
import './FinancialReport.css';

const FinancialReport = ({ data, addLink, admin, uploadFile }) => {
    debugger
    const [form, setForm] = useState('');

    const [file, setFile] = useState({})

    const upload = () => {
        console.log(file)
        uploadFile({ file, text: form })
    }

    // const onChange = e => setForm({ ...form, [e.target.id]: e.target.value });

    // const AddLink = () => {
    //     if (form.financial_text !== '' && form.financial_link !== '') {
    //         addLink({ link: form.financial_link, text: form.financial_text });
    //         form.financial_link = '';
    //         form.financial_text = '';
    //     }
    //     else {
    //         console.log('incorrect data');
    //     }
    // };

    return (
        <div className="financial-report">
            <div className="container">
                <h1 className="head-text">Фінансова звітність</h1>
                <div className="financial-report-list">
                    {data.map((el, i) => (
                        <a key={i} className="link-to-document" href={`/api/uploads/${el.link}`}>{el.text}</a>
                    ))}
                </div>
                {admin && <Fragment>
                    <p className="sub-head-text">Добавити документ</p>
                    <p>text</p>
                    <input type="text" placeholder="text" value={form.financial_text} onChange={e => setForm(e.target.value)} />
                    <div className="financial-report__add-link">
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                        <button onClick={upload} className="financial-report__add-link__submit">send file</button>
                    </div>
                </Fragment>}
            </div>
        </div>
    )
}

export default FinancialReport;