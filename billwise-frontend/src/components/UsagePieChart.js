import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function UsagePieChart({ bill }) {

    if (!bill) return null;

    const usedUnits = bill.totalUnits || 0;
    const remainingUnits = Math.max(0, 100 - usedUnits);

    const data = [
        {
            name: "Used Units",
            value: usedUnits
        },
        {
            name: "Remaining Estimate",
            value: remainingUnits
        }
    ];

    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div className="chart-card">

            <h3>⚡ Electricity Usage</h3>

            <PieChart width={350} height={300}>

                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={index}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />

            </PieChart>

        </div>
    );
}

export default UsagePieChart;