import React from 'react'
import './style.css'

function Home() {
    return (
        <div id="hero">
            <div id="knowMore" className="row">
                <div className="col-7 col-xl-11">
                    <h2>Faisal Nour</h2>
                    <p>A Front-end Developer and Certified Professional in Accessibility Core Competencies</p>
                    <a href="#aboutMe" id="btnKnowMore" type="button" className="btn btn-primary" onmouseout="changeDefault()" onmouseover="changeTxt()">Know more</a>
                </div>
            </div>
        </div>
        // <!--end of hero image section-- >
        // <br>
        //     <br>
        //         <br>
        //             <p style="text-align: center;"><img src="Assets/square.png" width="30px" height="30px"><img src="Assets/square.png" width="30px" height="30px"><img src="Assets/square.png" width="30px" height="30px"></p>
        //                 <br>
        //                     <br>
        //                         <div id="aboutMe" style="background-color:#454647 ;">
        //                             <div class="container" style="background-color: #454647;"> <!--About me container starts here-->
        //     <div class="row">
        //                                     <div id="cardOne" class="card col-12 col-lg-6 col-xl-6" style="margin-top: 20px; margin-bottom: 20px; height: auto; background-color: #454647; border: none; color: white;">
        //                                         <div class="card-body">
        //                                             <h1 style="display: inline; font-size:4rem; margin: 0; top: 50%; left: 50%; position: absolute; -ms-transform: translate(-50%,-50%); transform: translate(-50%, -50%);">ABOUT</h1>
        //                                         </div>
        //                                     </div> <!--end of first card-->
        //         <div id="cardTwo" class="card col-12 col-lg-6 col-xl-6" style=" background-color: #454647; color: white; border: none;">
        //                                         <div class="card-body mt-5" style=" margin: 0; font-family: Arial, Helvetica, sans-serif;" >
        //                                             <p style="display: inline;" >Faisal is a Front-end Developer and Certified Professional in
        //                                             Accessibility Core Competencies CPACC with experience in designing, developing,
        //                                             and testing websites and web-applications.
        //                                             He has BSc in Information Technology & Computing with practical knowledge in web accessibility to
        //                                             develop and implement responsive, modern, and accessible visual designs.
        //                                             He also has professional and post-graduate certifciates and currently enrolled in
        //                                             Coding Bootcamp at the University of Toronto
        //                 </p>
        //                                             <p>
        //                                                 <ul>
        //                                                     <li>York University IEP Bridging Program in System Analysis</li>
        //                                                     <li>Immigration Practitioner Diploma</li>
        //                                                     <li>Certified Professional in Accessibility Core Competencies </li>
        //                                                     <li>Adobe Certified Expert - Business Practitioner</li>
        //                                                 </ul>
        //                                             </p>
        //                                             <p>Faisal has solid knowledge about HTML5, CSS, SASS, GIT, SQL, JavaSript, BootStrap, React JS,
        //                     Express.JS, RESTful API, Adobe Experience Manager, Agile Development, Jira, Adobe Photoshop, InVision and Sketch</p>

        //                                             <p style="margin-top: 10px; font-weight:bold; text-decoration: underline;"><a id="pdfResume" href="Assets/resumeFaisalNour.pdf" download="FaisalNour-Resume">Click to download PDF resume</a></p>
        //                                         </div>
        //                                     </div> <!--end of second card-->
        //     </div> <!--end of about me row-->
        // </div> <!--End of About me container-->
    )
}

export default Home