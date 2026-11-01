import {

    Chart as ChartJS,

    CategoryScale,

    LinearScale,

    BarElement,

    Title,

    Tooltip,

    Legend

} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(

    CategoryScale,

    LinearScale,

    BarElement,

    Title,

    Tooltip,

    Legend

);

function BarChart({ bills }) {

    const data={

        labels:bills.map(

            bill=>bill.statementMonth

        ),

        datasets:[

            {

                label:"Monthly Bills",

                data:bills.map(

                    bill=>bill.billAmount

                ),

                backgroundColor:"#2563eb"

            }

        ]

    };

    return <Bar data={data}/>;

}

export default BarChart;