import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
    FaFileInvoiceDollar,
    FaRupeeSign,
    FaChartLine
} from "react-icons/fa";

import "../styles/dashboard.css";

function Reports() {

    const [bills, setBills] = useState([]);

    useEffect(() => {
        loadBills();
    }, []);

    const loadBills = async () => {
        const response = await axios.get("http://localhost:8080/api/bills");
        setBills(response.data);
    };

    const totalBills = bills.length;

    const totalAmount = bills.reduce(
        (sum, bill) => sum + (bill.billAmount || 0),
        0
    );

    const average =
        totalBills > 0 ? totalAmount / totalBills : 0;

    return (

        <div className="container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <h2>Reports</h2>

                <div className="cards">

                    <div className="card">

                        <div className="card-icon blue">
                            <FaFileInvoiceDollar />
                        </div>

                        <h4>Total Bills</h4>

                        <h2>{totalBills}</h2>

                    </div>

                    <div className="card">

                        <div className="card-icon green">
                            <FaRupeeSign />
                        </div>

                        <h4>Total Amount</h4>

                        <h2>₹ {totalAmount.toFixed(2)}</h2>

                    </div>

                    <div className="card">

                        <div className="card-icon orange">
                            <FaChartLine />
                        </div>

                        <h4>Average Bill</h4>

                        <h2>₹ {average.toFixed(2)}</h2>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Reports;