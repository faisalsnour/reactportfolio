import React from 'react'
import './style.css'
import Social from '../Social'

function Foooter() {
    return (
        <div className="footer" style={{ textAlign: "center" }}>
            <Social />
            <p style={{ marginTop: "10px" }} >&#169;2021 Faisal Nour. All Rights Reserved</p>
        </div>
    )
}

export default Foooter