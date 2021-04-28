import React from 'react'
import "./style.css"

function Foter() {
    return (
        <>
            <div id="upperFooter" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div style={{ textAlign: "center", marginBottom: "15px", marginTop: "15px" }}>
                                <p style={{ marginBottom: "15px" }}>Connect with me through</p>
                                <ul style={{ padding: "0px" }}>
                                    <li style={{ display: "inline-flex", marginRight: "10px" }}><a aria-label="linkedIn" href="https://www.linkedin.com/in/faisal-nour/" target="_blank" rel="noreferrer" className="button_social"><i id="linkedinlogo" className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i> </a></li>
                                    <li style={{ display: "inline-flex", marginRight: "10px" }}><a aria-label="Github" name="github" href="https://github.com/faisalsnour" target="_blank" rel="noreferrer" className="button_social"><i id="githublogo" className="fab fa-github fa-2x" aria-hidden="true"></i> </a></li>
                                    <li style={{ display: "inline-flex", marginRight: "10px" }}><a aria-label="Email" name="email" href="mailto:faisalskhalifa@gmail.com" target="_blank" rel="noreferrer" className="button_social"><i id="twitterlogo" className="fas fa-envelope fa-2x" aria-hidden="true"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer" style={{ textAlign: "center" }}>
                <div id="copyright" >&#169;2021 Faisal Nour. All Rights Reserved</div>
            </div>
        </>
    )
}

export default Foter