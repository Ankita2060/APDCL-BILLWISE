import React from "react";

function Allnsights({ bill }) {

    if (!bill) {
        return <p>No bill data available</p>;
    }


    let insight = "";


    if (bill.totalUnits > 300) {

        insight = "High electricity consumption detected. Try reducing unnecessary usage.";

    }
    else if (bill.totalUnits < 100) {

        insight = "Low electricity consumption. Usage is under control.";

    }
    else {

        insight = "Electricity consumption is normal.";

    }



    return (

        <div className="ai-table">

            <table>

                <tbody>

                <tr>
                    <td>Consumption Status</td>
                    <td>{insight}</td>
                </tr>


                <tr>
                    <td>Units Consumed</td>
                    <td>{bill.totalUnits} kWh</td>
                </tr>


                <tr>
                    <td>Bill Amount</td>
                    <td>₹ {bill.billAmount}</td>
                </tr>


                <tr>
                    <td>Average Cost</td>
                    <td>
                        ₹ {(bill.billAmount / bill.totalUnits).toFixed(2)} / unit
                    </td>
                </tr>


                </tbody>

            </table>

        </div>

    );
}

export default Allnsights;