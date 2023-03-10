import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>
{
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand"> Rohan </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                           <NavLink to="/"  className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="#myproject" className="nav-link">My Project</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="#service" className="nav-link">Service</NavLink>
                        </li>
                        
                    </ul>

                </div>
            </nav>

            
        </>
    );
}

export default Navbar;