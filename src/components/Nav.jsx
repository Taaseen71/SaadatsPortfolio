import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <div>
            <header>
                <h1>
                    Saadat Taaseen
                </h1>
                <img src="https://i.imgur.com/hBpUuTE.jpg" width="700px" alt="" />
            </header>
            <ul>
                <li><Link className="navLinks" to="/">About Me</Link></li>
                <li><Link className="navLinks" to="/my-projects">My Projects</Link></li>
                <li><Link className="navLinks" to="/contact-section">Contact Section</Link></li>
                {/* <li><Link to="/"></Link></li> */}
            </ul>
        </div>
    )
}
