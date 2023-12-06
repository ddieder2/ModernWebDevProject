import {React} from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../Auth/AuthService";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const logOutHandler = () => {
        if (logOutUser()) {
            navigate('/auth')
        }
    }
    return (
        <header>
            <ul className="nav">
                <li><Link to="/">Game</Link></li>
                <li><Link data-cy="leaderboard-nav"to='/leaderboard'>Leaderboard</Link></li>
                <li><Link to="/rules">Rules</Link></li>
                <li><Link data-cy="profile-nav" to="/profile">Profile</Link></li>
                <li><button className="btn btn-link" onClick={()=>logOutHandler()} >Logout</button></li>
            </ul>
        </header>
    );
}

export default Nav;