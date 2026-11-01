import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaUpload,
    FaChartBar,
    FaFileAlt,
    FaCog,
    FaBolt
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <div className="logo">

                <FaBolt className="logo-icon" />

                <h2>BillWise</h2>

            </div>

            <ul>

                <li>
                    <NavLink to="/" end>
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/upload">
                        <FaUpload />
                        <span>Upload Bill</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/analysis">
                        <FaChartBar />
                        <span>Analysis</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/reports">
                        <FaFileAlt />
                        <span>Reports</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings">
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;