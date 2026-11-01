import "../styles/Navbar.css";

import {
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

function Navbar() {

    return (

        <div className="navbar">

            <div className="navbar-title">
                <h2>BillWise Dashboard</h2>
            </div>

            <div className="navbar-right">

                <div className="search-box">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search bills..."
                    />

                </div>

                <FaBell className="nav-icon" />

                <FaUserCircle className="profile-icon" />

            </div>

        </div>

    );

}

export default Navbar;