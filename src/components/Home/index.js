import React from 'react'
import './style.css'
import Foooter from '../Foooter'
import { Link } from "react-router-dom";




class Home extends React.Component {

    changeDefault = () => {
        document.querySelector('#btnKnowMore').innerHTML = "Know more"
    }

    changeTxt = () => {
        document.querySelector('#btnKnowMore').innerHTML = "Know more >"
    }

    render() {

        return (
            <>
                <div id="hero">
                    <div id="knowMore" className="row">
                        <div className="col-7 col-xl-11">
                            <h2>Faisal Nour</h2>
                            <p>A Front-end Developer and Certified Professional in Accessibility Core Competencies</p>
                            <Link to="/about" id="btnKnowMore" type="button" className="btn btn-primary" onmouseout={this.changeDefault} onmouseover={this.changeTxt}>Know more</Link>
                        </div>
                    </div>
                </div>
                {/* <Foooter /> */}
            </>
        )
    }
}

export default Home