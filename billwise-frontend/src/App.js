import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UploadBill from "./pages/UploadBill";
import Analysis from "./pages/Analysis";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/upload" element={<UploadBill />} />

                <Route path="/analysis" element={<Analysis />} />

                <Route path="/reports" element={<Reports />} />

                <Route path="/settings" element={<Settings />} />

            </Routes>
        </Router>
    );
}

export default App;
