import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function PieChart({ bills }) {

    const data = {

        labels: bills.map(
            bill => bill.statementMonth
        ),

        datasets: [

            {

                label: "Bill Amount",

                data: bills.map(
                    bill => bill.billAmount
                ),

                backgroundColor: [

                    "#2563eb",
                    "#16a34a",
                    "#ea580c",
                    "#7c3aed",
                    "#dc2626",
                    "#0891b2",
                    "#14b8a6",
                    "#f59e0b"

                ]

            }

        ]

    };

    return <Pie data={data} />;

}

export default PieChart;