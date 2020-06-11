import React, { useEffect } from 'react'
import './Layout.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {

    useEffect(() => {
        // document.addEventListener('dblclick', (e) => {
        //     const el = e.toElement
        //     let splited = el.classList.value.split(' ')

        //     if (!(splited.indexOf('can-be-edited') !== -1 && splited.indexOf('editing') === -1)) return
        //     el.classList.add('editing')

        //     let oldInner = el.innerHTML
        //     let textareaText = oldInner
        //     el.innerHTML = `<textarea class="edited-textarea">${textareaText}</textarea>
        //                     <div class="success">
        //                         <span class="ok">зберегти</span>
        //                         <span class="cancel">відмінити</span>
        //                     </div>`

        //     let textarea = document.getElementsByClassName('edited-textarea')

        //     for (let i = 0; i < textarea.length; i++) {
        //         textarea[i].addEventListener('change', (e) => {
        //             textareaText = e.target.value
        //         })
        //     }

        //     let cancel = document.getElementsByClassName('cancel')

        //     for (let i = 0; i < cancel.length; i++) {
        //         cancel[i].addEventListener('click', (e) => {
        //             el.innerHTML = oldInner
        //             el.classList.remove('editing')
        //         })
        //     }

        //     let ok = document.getElementsByClassName('ok')

        //     for (let i = 0; i < ok.length; i++) {
        //         ok[i].addEventListener('click', (e) => {
        //             el.innerHTML = textareaText
        //             el.classList.remove('editing')
        //         })
        //     }

            // const el = e.toElement
            // let splited = el.classList.value.split(' ')

            // if (!(splited.indexOf('can-be-edited') !== -1 && splited.indexOf('editing') === -1)) return
            // el.classList.add('editing')

            // let text

            // let oldInner = el.innerHTML
            // let textareaText = oldInner
            // let formatText = textareaText.split(/<a|>|<\/a>/g)
            // let formatLinks = []
            // let formatTexts = []
            // for (let i = 0; i < formatText.length; i++) {
            //     if (i % 3 === 0 && formatText[i] !== '' && i !== 0) {
            //         formatTexts.push(formatText[i])
            //     }
            //     if ((i + 1) % 3 === 0 && formatText[i] !== '') {
            //         formatLinks.push((formatText[i].replace(/href=|"/g, '').split(' ').join('')))
            //     }
            // }

            // console.log(formatLinks)
            // console.log(formatTexts)

            // for (let i = 0; i < formatTexts.length; i++) {
            //     text += 'Посилання - ' + formatLinks[i] + '<br/>'
            //     text += 'Текст' + formatTexts[i] + '<br/>'
            // }

            // el.innerHTML = `<textarea class="edited-textarea"></textarea>
            //                 <div class="success">
            //                     <span class="ok">зберегти</span>
            //                     <span class="cancel">відмінити</span>
            //                 </div>`

            // let textareaClass = document.getElementsByClassName('edited-textarea')[0]

            // textareaClass.innerHTML = text

            // console.log(text)

            // let textarea = document.getElementsByClassName('edited-textarea')

            // for (let i = 0; i < textarea.length; i++) {
            //     textarea[i].addEventListener('change', (e) => {
            //         textareaText = e.target.value
            //     })
            // }

            // let cancel = document.getElementsByClassName('cancel')

            // for (let i = 0; i < cancel.length; i++) {
            //     cancel[i].addEventListener('click', (e) => {
            //         let newInner = 
            //         el.innerHTML = oldInner
            //         el.classList.remove('editing')
            //     })
            // }

            // let ok = document.getElementsByClassName('ok')

            // for (let i = 0; i < ok.length; i++) {
            //     ok[i].addEventListener('click', (e) => {
            //         el.innerHTML = textareaText
            //         el.classList.remove('editing')
            //     })
            // }
        // })
    }, [])

    return (
        <div className="Layout">
            <Header />
            <main >
                {children}
            </main>
            <Footer />
        </div>
    )
}


export default Layout