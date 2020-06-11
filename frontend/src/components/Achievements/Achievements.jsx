import React from 'react'
import './Achievements.css'
import { Link } from 'react-router-dom'

class achievements extends React.Component {
    state = {
        data: [
            {
                year: "2020",
                link: ""
            }, {
                year: "2020",
                link: ""
            }, {
                year: "2020",
                link: ""
            },
        ]
    }
    render() {
        return (
            <div className="achievments">
                <div className="container">
                    <h1 className="head-text">Досягнення коледжу</h1>
                    <p className="sub-main-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className="main-text">Останні досягнення</p>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2019 рік</p>
                        <Link className="button" to="/">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2018 рік</p>
                        <Link className="button" to="/">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2017 рік</p>
                        <Link className="button" to="/">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2016 рік</p>
                        <Link className="button" to="/">Перейти</Link>
                    </div>
                    <div className="padd-block ach-padd-block">
                        <p className="main-text">2015 рік</p>
                        <Link className="button" to="/">Перейти</Link>
                    </div>
                </div>
            </div>
        )

    }
}

export default achievements