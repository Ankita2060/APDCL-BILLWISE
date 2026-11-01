import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function BillHistoryChart({ bills }) {

    if (!bills || bills.length === 0) {
        return (
            <div className="chart-card">
                <h3>Last 6 Statements History</h3>
                <p>No bill history available.</p>
            </div>
        );
    }

    const chartData = bills.map(item => ({
        month: item.statement,
        units: Number(item.units),
        amount: Number(item.billAmount)
    }));

    return (
        <div className="chart-card">

            <h3> Last 6 Statements History</h3>

            <ResponsiveContainer width="100%" height={450}>

                <BarChart data={bills}
                          barCategoryGap="20%">


                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                        type="monotone"
                        dataKey="units"
                        name="Consumption(units)"
                        fill="#1976d2"
                        barSize={50}
                        maxBarSize={50}
                    />
                    <Bar
                        type="monotone"
                        dataKey="amount"
                        name="Bill Amount"
                        fill="#2e7d32"
                        barSize={50}
                        maxBarSize={50}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}

export default BillHistoryChart;