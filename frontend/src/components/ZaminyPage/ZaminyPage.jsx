import React, { useState } from 'react';
import './ZaminyPage.css';
const edit = './edit.svg';

export default ({ data, course, group, changeZaminy }) => {
    const [active, setActive] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });

    const [zaminyList, setZaminyList] = useState(data)

    const changeZaminyFunc = i => {
        changeZaminy({ id: zaminyList[i]._id, date: zaminyList[i].date, day: zaminyList[i].day, text: zaminyList[i].text, course, group });
        setActive({ ...active, [i]: false });
    }

    const changeFunc = (i, e) => { debugger; setZaminyList({ ...zaminyList, [i]: { ...zaminyList[i], [e.target.id]: e.target.value } }); console.log(zaminyList) }

    const changeText = (i, e, index) => {
        let newArr = [...zaminyList[i].text];
        newArr[index] = e.target.value;
        setZaminyList({ ...zaminyList, [i]: { ...zaminyList[i], text: newArr } })
    }

    const deleteFunc = (i, index) => {
        let newArr = [...zaminyList[i].text];
        newArr.splice(index, 1);
        setZaminyList({ ...zaminyList, [i]: { ...zaminyList[i], text: newArr } });
    }

    const addFunc = i => {
        let newArr = [...zaminyList[i].text];
        newArr.push('введіть назву');
        setZaminyList({ ...zaminyList, [i]: { ...zaminyList[i], text: newArr } });
        console.log(zaminyList)
    }

    return (
        <div className="unit-modal">
            <div className="container">
                <div className="padd-block">
                    <p className="unit-modal__head">Курс - {course} &nbsp; Група - {group}</p>
                    <div className="unit-schedule-block">
                        {data.map((el, i) => {
                            return !active[i] ? <div className="unit-item padd-block" key={i}>
                                <img src={edit} alt="edit" className="edit" onClick={() => {
                                    setActive({ ...active, [i]: true })
                                    console.log(active)
                                }} />
                                <p className="unit-item__date">{el.date}</p>
                                <p className="unit-item__day">{el.day}</p>
                                <div className="unit-schedule">
                                    {el.text.length === 0
                                        ?
                                        <p className="unit-no-consultation">Замін немає</p>
                                        :
                                        el.text.map((sch, index) => (
                                            <p className="unit-schedule__text" key={index}>
                                                <span className="unit__schedule__text-medium">{sch}</span>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div> :
                                <div className="unit-item padd-block" key={i}>
                                    <img src={edit} alt="edit" className="edit" onClick={() => {
                                        setActive({ ...active, [i]: false })
                                        console.log(active)
                                    }} />
                                    <input className="unit-item__date" id="date" value={zaminyList[i].date} onChange={e => changeFunc(i, e) } />
                                    <input className="unit-item__day" id="day" value={zaminyList[i].day} onChange={e => changeFunc(i, e) } />
                                    <div className="unit-schedule">
                                        {zaminyList[i].text.length === 0
                                            ?
                                            <div className="unit-no-consultation">
                                                <p>Замін немає</p>
                                                <p onClick={() => addFunc(i)}>Добавити</p>
                                            </div>
                                            :
                                            zaminyList[i].text.map((sch, index) => (
                                                <p className="unit-schedule__text" key={index}>
                                                    <input className="unit__schedule__text-medium" onChange={e => changeText(i, e, index)} value={sch} /><div onClick={() => deleteFunc(i, index)}>видалити</div>
                                                </p>
                                            ))
                                        }
                                    </div>
                                    <button onClick={() => changeZaminyFunc(i)}>зберегти</button>
                                    <button onClick={() => { setActive({ ...active, [i]: false }); setZaminyList(data) } }>відмінити</button>
                                </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}