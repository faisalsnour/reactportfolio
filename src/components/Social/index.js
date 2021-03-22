import React from 'react'
import "./style.css"
import LinkedIn from '../Social/LinkedIn.png'
import Github from '../Social/Github.png'
import Email from '../Social/Email.png'


function Social() {
    return (
        <div className="middle">
            <p id="connect">Connect with me through</p>
            <div style={{ textAlign: "center" }}>
                <a href="https://www.linkedin.com/in/faisal-nour/" target="_blank" rel="noreferrer"><img width="23px" height="23px" src={LinkedIn} alt="linkedIn button" /></a>
                <a href="https://github.com/faisalsnour" target="_blank" rel="noreferrer"><img width="23px" height="23px" src={Github} alt="linkedIn button" /></a>
                <a href="mailto:faisalskhalifa@gmail.com" target="_blank" rel="noreferrer"><img width="23px" height="23px" src={Email} alt="linkedIn button" /></a>
            </div>
        </div>
    )
}

export default Social