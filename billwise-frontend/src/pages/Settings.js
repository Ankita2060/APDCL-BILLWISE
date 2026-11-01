import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Settings() {
    return (
        <div className="container">
            <Sidebar />

            <div className="main-content">
                <Navbar />

                <h2>Settings</h2>

                <div className="card">
                    <h3>Application Settings</h3>

                    <p><b>Application:</b> BillWise</p>
                    <p><b>Version:</b> 1.0</p>
                    <p><b>Provider:</b> APDCL</p>
                    <p><b>Theme:</b> Light</p>

                    <button className="upload-btn">
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;