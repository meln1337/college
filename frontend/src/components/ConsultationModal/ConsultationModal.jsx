import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './ConsultationModal.css';
const edit = './edit.svg';
const back = './back.svg';
const deleteIcon = './delete.svg';
const plus = './plus.svg';

export default ({ data, group, changeConsultation, admin }) => {
    debugger
    const [active, setActive] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });

    const [scheduleList, setScheduleList] = useState(data);

    const changeScheduleFunc = i => {
        changeConsultation({ id: scheduleList[i]._id, date: scheduleList[i].date, day: scheduleList[i].day, text: scheduleList[i].text, group });
        setActive({ ...active, [i]: false });
    }

    const changeFunc = (i, e) => { debugger; setScheduleList({ ...scheduleList, [i]: { ...scheduleList[i], [e.target.id]: e.target.value } }); console.log(scheduleList) }

    const changeText = (i, e, index) => {
        let newArr = [...scheduleList[i].text];
        newArr[index] = e.target.value;
        setScheduleList({ ...scheduleList, [i]: { ...scheduleList[i], text: newArr } })
    }

    const deleteFunc = (i, index) => {
        let newArr = [...scheduleList[i].text];
        newArr.splice(index, 1);
        setScheduleList({ ...scheduleList, [i]: { ...scheduleList[i], text: newArr } });
    }

    const addFunc = i => {
        let newArr = [...scheduleList[i].text];
        newArr.push('введіть назву');
        setScheduleList({ ...scheduleList, [i]: { ...scheduleList[i], text: newArr } });
        console.log(scheduleList)
    }

    return (
        <div className="unit-modal">
            <div className="container">
                <div className="padd-block">
                    <Link className="back-to-news" to="/consultation"><img src={back} alt="back" /></Link>
                    <p className="unit-modal__head">Група - {group}</p>
                    <div className="unit-schedule-block">
                        {admin ?
                            data.map((el, i) => {
                                return !active[i] ? (
                                    <div className="unit-item padd-block" key={i}>
                                        <img src={edit} alt="edit" className="edit" onClick={() => {
                                            setActive({ ...active, [i]: true })
                                            console.log(active)
                                        }} />
                                        <p className="unit-item__date">{el.date}</p>
                                        <p className="unit-item__day">{el.day}</p>
                                        <div className="unit-schedule">
                                            {el.text.length === 0
                                                ?
                                                <p className="unit-no-consultation">Консультацій немає</p>
                                                :
                                                el.text.map((sch, index) => (
                                                    <p className="unit-schedule__text" key={index}>
                                                        <span className="unit__schedule__text-medium">{sch}</span>
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : <div className="unit-item padd-block" key={i}>
                                        <img src={edit} alt="edit" className="edit" onClick={() => {
                                            setActive({ ...active, [i]: false })
                                            console.log(active)
                                        }} />
                                        <input className="unit-item__date edited-input" id="date" value={scheduleList[i].date} onChange={e => changeFunc(i, e)} />
                                        <input className="unit-item__day edited-input" id="day" value={scheduleList[i].day} onChange={e => changeFunc(i, e)} />
                                        <div className="unit-schedule">
                                            {scheduleList[i].text.length === 0
                                                ?
                                                <div className="unit-no-consultation">
                                                    <p>Замін немає</p>
                                                    <p onClick={() => addFunc(i)}>Добавити</p>
                                                </div>
                                                :
                                                <Fragment>
                                                    {
                                                        scheduleList[i].text.map((sch, index) => (
                                                            <p className="unit-schedule__text" key={index}>
                                                                <input className="unit__schedule__text-medium edited-input" onChange={e => changeText(i, e, index)} value={sch} /><img src={deleteIcon} onClick={() => deleteFunc(i, index)} />
                                                            </p>
                                                        ))
                                                    }
                                                    <img onClick={() => addFunc(i)} className="plus" src={plus} alt="plus" />
                                                </Fragment>
                                            }
                                        </div>
                                        <div className="unit-buttons">
                                            <button className="unit-buttons__save" onClick={() => changeScheduleFunc(i)}>зберегти</button>
                                            <button className="unit-buttons__cancel" onClick={() => { setActive({ ...active, [i]: false }); setScheduleList(data) }}>відмінити</button>
                                        </div>
                                    </div>
                            })
                            : data.map((el, i) => (
                                <div className="unit-item padd-block" key={i}>
                                    <p className="unit-item__date">{el.date}</p>
                                    <p className="unit-item__day">{el.day}</p>
                                    <div className="unit-schedule">
                                        {el.text.length === 0
                                            ?
                                            <p className="unit-no-consultation">Консультацій немає</p>
                                            :
                                            el.text.map((sch, index) => (
                                                <p className="unit-schedule__text" key={index}>
                                                    <span className="unit__schedule__text-medium">{sch}</span>
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}