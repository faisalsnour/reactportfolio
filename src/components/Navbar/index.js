import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFFFFF;" }}>
                <div className="container-fluid">
                    {/* <a id="navbar-brand" className="navbar-brand" href="index.html"><img id="logo" src="Assets/logo.png" style="top: 5px; left: 5px;" width="40px" height="40px"></a> */}
                    {/* <!-- <a href="#"><img id="logo" src="Assets/icon.png" style="position: fixed; top: 5px; left: 5px;" width="50px" height="50px">Hello</a> --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" dir="rtl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                    Contact
                                    </Link>
                                {/* <a id="btnContact" className="nav-link active coloredbutton" aria-current="page" href="#contactMe">Contact</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/recentprojects" className={location.pathname === "/recentprojects" ? "nav-link active" : "nav-link"}>
                                    Recent Projects
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                                    About
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                    Home
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* </nav> <!--end of navbar--> */}
        </div>
    )
}

export default Navbar