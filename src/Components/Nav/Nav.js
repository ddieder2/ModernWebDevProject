import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <ul className="nav">
                <li><Link to="/">Game</Link></li>
                <li><Link to="/rules">Rules</Link></li>
            </ul>
        </header>
    );
}

export default Nav;