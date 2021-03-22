import React from 'react'
import "./style.css"
import Social from '../Social'

function Footer() {
    return (
        <>
            <div style={{ position: "absolute", left: "0", bottom: "0", right: "0", backgroundColor: "#454647" }}>
                <div id="footerInfo">
                    <Social />
                </div>
                <div id="footer" className="footer">
                    <p >&#169;2021 Faisal Nour. All Rights Reserved</p>
                </div>
            </div>



        </>
    )
}

export default Footer