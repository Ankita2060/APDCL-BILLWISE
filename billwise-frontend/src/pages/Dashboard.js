import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


import Allnsights from "../components/Allnsights";

import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";

import UsagePieChart from "../components/UsagePieChart";

import BillCounter from "../components/BillCounter";
import BillHistoryChart from "../components/BillHistoryChart";



import {
    FaFileInvoiceDollar,
    FaRupeeSign,
    FaCalculator,
    FaUser,
    FaBolt,
    FaCalendarAlt
} from "react-icons/fa";


import "../styles/dashboard.css";


function Dashboard() {


    const [bills, setBills] = useState([]);
    const [latestBill, setLatestBill] = useState(null);
    const [historyBills, setHistoryBills] = useState([]);
    



    useEffect(() => {

        loadBills();

    }, []);


    const loadBills = async () => {

        try {

            // Load all bills
            const response = await axios.get(
                "http://localhost:8080/api/bills"
            );

            setBills(response.data);

            // Load latest bill
            const latestResponse = await axios.get(
                "http://localhost:8080/api/bills/latest"
            );

            setLatestBill(latestResponse.data);
            const history = JSON.parse(localStorage.getItem("billHistory"));
            setHistoryBills(history || []);

        } catch (error) {
            console.error(error);
        }

    };


            // Load last 6 months history of current consumer




    const totalBills = latestBill ? 1:0;



    const totalAmount = latestBill ? latestBill.billAmount || 0 : 0;



    const averageBill =latestBill ? (latestBill.billAmount || 0) / 2 : 0;



    return (

        <div className="container">


            <Sidebar />


            <div className="main-content">


                <Navbar />


                <h2>
                    Dashboard Overview
                </h2>




                {/* SUMMARY CARDS */}

                <div className="cards">
                    <div className="card">

                        <div className="card-icon darkblue">
                            <FaUser />
                        </div>

                        <h4>Consumer No.</h4>

                        <h2>
                            {latestBill?.consumerNumber || "-"}
                        </h2>

                    </div>

                    <div className="card">
                        <div className="card-icon blue">
                            <FaFileInvoiceDollar/>
                        </div>

                        <h4>Total Bills</h4>
                        <h2>{totalBills}</h2>

                    </div>



                    <div className="card">

                        <div className="card-icon green">
                            <FaRupeeSign/>
                        </div>

                        <h4>Total Amount</h4>

                        <h2>
                            ₹ {latestBill?.billAmount || 0}
                        </h2>

                    </div>



                    <div className="card">

                        <div className="card-icon orange">
                            <FaCalculator/>
                        </div>

                        <h4>Average Bill</h4>

                        <h2>
                            ₹ {averageBill}
                        </h2>

                    </div>



                    <div className="card">

                        <div className="card-icon purple">
                            <FaUser/>
                        </div>

                        <h4>Consumer</h4>

                        <h2>
                            {latestBill?.consumerName || "-"}
                        </h2>

                    </div>



                    <div className="card">

                        <div className="card-icon red">
                            <FaBolt/>
                        </div>

                        <h4>Provider</h4>

                        <h2>
                            {latestBill?.providerName || "-"}
                        </h2>

                    </div>




                    <div className="card">

                        <div className="card-icon cyan">
                            <FaCalendarAlt/>
                        </div>


                        <h4>
                            Statement Month
                        </h4>


                        <h2>
                            {latestBill?.statementMonth || "-"}
                        </h2>

                    </div>


                </div>





                {/* NEW COUNTERS */}

                <BillCounter
                    bill={latestBill}
                />





                {/* NEW CHARTS */}

                <div className="chart-container">


                    <div className="chart-card">

                        <h3>
                            ⚡ Usage Analysis
                        </h3>


                        <UsagePieChart
                            bill={latestBill}
                        />

                    </div>
                    <div className="chart-card">
                        <h3>Last 6 Months History</h3>

                            <BillHistoryChart bills={historyBills} />

                        </div>

                    </div>







                {/* BILL TREND + AI */}

                <div className="chart-container">






                    <div className="chart-card">

                        <h3>
                            AI Insights
                        </h3>


                        <Allnsights
                            bill={latestBill}
                        />

                    </div>



                </div>







                {/* EXISTING CHARTS */}

                <div className="chart-container">


                    <div className="chart-card">


                        <h3>
                            Monthly Comparison
                        </h3>


                        <BarChart
                            bills={bills}
                        />


                    </div>




                    <div className="chart-card">


                        <h3>
                            Bill Distribution
                        </h3>


                        <PieChart
                            bills={bills}
                        />


                    </div>



                </div>








                {/* RECENT BILLS */}

                <div className="table-card">


                    <h3>
                        Recent Bills
                    </h3>



                    <table className="report-table">


                        <thead>

                        <tr>

                            <th>ID</th>
                            <th>Consumer</th>
                            <th>Provider</th>
                            <th>Month</th>
                            <th>Amount</th>

                        </tr>

                        </thead>



                        <tbody>


                        {

                            bills.length > 0 ?

                                bills.map((bill)=>(


                                    <tr key={bill.id}>


                                        <td>
                                            {bill.id}
                                        </td>


                                        <td>
                                            {bill.consumerName}
                                        </td>


                                        <td>
                                            {bill.providerName}
                                        </td>


                                        <td>
                                            {bill.statementMonth}
                                        </td>


                                        <td>
                                            ₹ {bill.billAmount}
                                        </td>


                                    </tr>


                                ))

                                :


                                <tr>

                                    <td
                                        colSpan="5"
                                        style={{
                                            textAlign:"center"
                                        }}
                                    >

                                        No Bills Found

                                    </td>

                                </tr>


                        }



                        </tbody>


                    </table>



                </div>



            </div>


        </div>

    );

}


export default Dashboard;