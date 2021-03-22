import React from 'react'
import "./style.css"
import Social from '../Social'

function Footer() {
    return (
        <>
            <div style={{ backgroundColor: "#454647" }}>
                <div id="footerInfo">
                    <Social />
                </div>
                <footer>
                    <p >&#169;2021 Faisal Nour. All Rights Reserved</p>
                </footer>

            </div>
        </>
    )
}

export default Footer