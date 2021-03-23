import React from 'react'
// import TourismApp from '../Project/TourismApp.png'
import './style.css'

function Project(props) {
    return (
        <>
            <div>
                <div class="row">
                    <div id="projectOnePicCard" className="card col-12 col-lg-8 col-xl-8" style={{ color: "white", margin: "0px", border: "none" }}>
                        <div id="cardBodyOne" className="card-body" style={{ margin: "0px" }}>
                            <img id="Tourism App picture" alt="toursim application" src={props.image} style={{ maxWidth: "100%", maxHeight: "100%", margin: "0px" }} />
                        </div>
                    </div>
                    {/* <!--end of projectOnePicCard--> */}
                    <div id="projectOneDesCard" className="card col-12 col-lg-4 ol-xl-4" style={{ margin: "0px", color: "black", border: "none" }}>
                        <div className="card-body mt-5" style={{ margin: "0", fontFamily: "Arial, Helvetica, sans-serif" }} >
                            <p style={{ color: "black", fontWeight: "bold" }}>{props.name}</p>
                            <p>{props.description} </p>
                            <p style={{ color: "black", fontWeight: "bold" }}>Deployed version: <a href={props.deployed} rel="noreferrer" target="_blank" >Here</a></p>
                            <p style={{ color: "black", fontWeight: "bold" }}>GitHub repository: <a href={props.repository} rel="noreferrer" target="_blank">Here</a></p>

                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    {/* <!--end of projectOneDesCard--> */}
                </div>
                {/* <!--end of project one row--> */}
            </div>
            <div class="container" style={{ borderBottom: "1px solid grey", marginTop: "15px" }}>
            </div>
        </>
    )
}

export default Project