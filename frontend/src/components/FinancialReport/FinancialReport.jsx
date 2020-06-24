import React, { useState, Fragment } from 'react';
import './FinancialReport.css';

const deleteSvg = './delete.svg';

export default ({ data, admin, uploadFile, deleteLink }) => {
    debugger
    const [form, setForm] = useState('');

    const [file, setFile] = useState({})

    const upload = () => {
        console.log(file)
        uploadFile({ file, text: form })
    }

    return (
        <div className="financial-report">
            <div className="container">
                <h1 className="head-text">Фінансова звітність</h1>
                <div className="financial-report-list">
                    {!admin ? data.map((el, i) => (
                        <a key={i} className="link-to-document" href={`/api/uploads/${el.link}`}>{el.text}</a>
                    )) :
                        data.map((el, i) => (
                            <div className="financial-flex" key={i}>
                                <a className="link-to-document" href={`/api/uploads/${el.link}`}>{el.text}</a>
                                <img onClick={() => deleteLink({ id: el._id })} src={deleteSvg} alt="delete" />
                            </div>
                        ))
                    }
                </div>
                {admin && <Fragment>
                    <p className="sub-head-text">Добавити документ</p>
                    <input className="financial-input" type="text" placeholder="text" value={form.financial_text} onChange={e => setForm(e.target.value)} />
                    <div className="financial-report__add-link">
                        <input className="financial-input-file" type="file" onChange={e => setFile(e.target.files[0])} />
                        <button onClick={upload} className="financial-report__add-link__submit">send file</button>
                    </div>
                </Fragment>}
            </div>
        </div>
    )
}