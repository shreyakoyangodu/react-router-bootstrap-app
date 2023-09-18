import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                    <img
            src="https://www.comtrea.org/images/shelter/ASP_Silverware.png"
            height="50px"
            class="rounded-pill"
            className="d-inline-block align-top"
            alt="Logo"
          />
                    <strong>Cloud9 Patries</strong>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;