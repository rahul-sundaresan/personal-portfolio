import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <nav id="nav-wrap" className={styles.navWrap} >
            <ul id="nav" className="nav">
                <li><Link to="/"  activeStyle={{color: "orange"}} >Home</Link></li>
                <li><Link to="/#resume" activeStyle={{color: "orange"}}>Resume</Link></li>
                <li><Link to="/#contact" activeStyle={{color: "orange"}}>Contact</Link></li>
            </ul>
        </nav>
    );
}
