import React from 'react'
import './Work.css'
import PartnersBlock from '../PartnersBlock/PartnersBlock'

export default () => (
    <div className="Work">
        <div className="container">
            <h1 className="head-text">Працевлаштування</h1>
            <p className="sub-main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <h1 className="head-text">Основні партнери</h1>
            <PartnersBlock type={1} />
            <p className="sub-main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <h1 className="head-text">Комерційні партнери</h1>
            <PartnersBlock type={2} />
        </div>
    </div>
)