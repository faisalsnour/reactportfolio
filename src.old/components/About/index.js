import React from 'react'
import './style.css'
// import Foooter from '../Foooter'
import Square from '../Square'
import Resume from '../About/Resume.pdf'


function About() {
    return (
        <>
            <div id="content" class="card-body"  >
                <p style={{ display: "inline;" }} >Faisal is a Front-end Developer and Certified Professional in
                Accessibility Core Competencies CPACC with experience in designing, developing,
                and testing websites and web-applications.
                He has BSc in Information Technology & Computing with practical knowledge in web accessibility to
                develop and implement responsive, modern, and accessible visual designs.
                He also has professional and post-graduate certifciates and currently enrolled in
                Coding Bootcamp at the University of Toronto
                        </p>
                <p>
                    <ul>
                        <li>York University IEP Bridging Program in System Analysis</li>
                        <li>Immigration Practitioner Diploma</li>
                        <li>Certified Professional in Accessibility Core Competencies </li>
                        <li>Adobe Certified Expert - Business Practitioner</li>
                    </ul>
                </p>
                <p>Faisal has solid knowledge about HTML5, CSS, SASS, GIT, SQL, JavaSript, BootStrap, React JS,
                            Express.JS, RESTful API, Adobe Experience Manager, Agile Development, Jira, Adobe Photoshop, InVision and Sketch</p>
                <p style={{ marginTop: "10px", marginLeft: "0px", fontWeight: "bold", textDecoration: "underline" }}><a id="pdfResume" href={Resume} download="FaisalNour-Resume">Download resume</a></p>

            </div>
            <Square />
            {/* <Foooter style={{ position: "fixed" }} /> */}
        </>
    )
}

export default About
