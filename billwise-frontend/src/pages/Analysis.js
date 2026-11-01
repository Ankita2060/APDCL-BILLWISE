import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Analysis() {

    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        loadAnalysis();
    }, []);

    const loadAnalysis = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/analysis"
            );

            setAnalysis(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <h2>AI Electricity Bill Analysis</h2>

                {analysis ? (

                    <div className="card">

                        <h3>Latest Bill Analysis</h3>

                        <p>
                            <b>Consumer Name:</b> {analysis.consumerName}
                        </p>

                        <p>
                            <b>Bill Amount:</b> ₹ {analysis.billAmount}
                        </p>

                        <p>
                            <b>Status:</b> {analysis.status}
                        </p>

                        <p>
                            <b>AI Suggestion:</b>
                        </p>

                        <div
                            style={{
                                background: "#eef5ff",
                                padding: "15px",
                                borderRadius: "8px",
                                marginTop: "10px"
                            }}
                        >
                            {analysis.suggestion}
                        </div>

                    </div>

                ) : (

                    <p>Loading AI analysis...</p>

                )}

            </div>

        </div>
    );
}

export default Analysis;