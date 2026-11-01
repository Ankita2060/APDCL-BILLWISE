import React from "react";
import CountUp from "react-countup";

function BillCounter({ bill }) {

    if (!bill) {
        return null;
    }

    return (
        <div className="counter-container">

            <div className="counter-card">
                <h3>💰 Bill Amount</h3>
                <h1>
                    ₹
                    <CountUp
                        end={bill.billAmount || 0}
                        duration={2}
                        decimals={2}
                    />
                </h1>
            </div>

            <div className="counter-card">
                <h3>⚡ Units Used</h3>
                <h1>
                    <CountUp
                        end={bill.totalUnits || 0}
                        duration={2}
                        decimals={2}
                    />
                </h1>
            </div>

        </div>
    );
}

export default BillCounter;