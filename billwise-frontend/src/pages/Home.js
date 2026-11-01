import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
    return (
        <div className="home">

            <header className="hero">

                <h1>⚡ APDCL.BILLWISE</h1>

                <h2>Electricity Billing Management System</h2>

                <p>
                    Welcome to APDCL.BILLWISE. This system helps users upload
                    electricity bills, view billing analytics, monitor bill
                    history, generate reports, and manage electricity billing
                    information efficiently.
                </p>

                <div className="home-buttons">

                    <Link to="/dashboard">
                        <button>Go to Dashboard</button>
                    </Link>

                    <Link to="/upload">
                        <button>Upload Bill</button>
                    </Link>

                </div>

            </header>

            <footer className="home-footer">
                © 2026 APDCL.BILLWISE | Electricity Billing Management System
            </footer>

        </div>
    );
}

export default Home;