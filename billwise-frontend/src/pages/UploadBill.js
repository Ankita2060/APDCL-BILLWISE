import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import { uploadPdf } from "../services/uploadService";

function UploadBill() {

    const [file, setFile] = useState(null);
    const [billData, setBillData] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {

        if (!file) {
            alert("Please select a PDF");
            return;
        }

        try {
            setUploading(true);
            const response = await uploadPdf(file);
            localStorage.setItem(
                "billHistory",
                JSON.stringify(response.data.history)
            );

            setBillData(response.data);

            alert("PDF uploaded successfully");

        } catch (error) {
            alert("Upload failed");
            console.error(error);
        }
        finally{
            setUploading(false);
        }
    };

    return (
        <div className="container">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <h2>Upload Electricity Bill</h2>

                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <br /><br />
                {uploading && (
                    <p style={{ color: "blue", fontWeight: "bold" }}>
                        Uploading PDF...
                    </p>
                )}

                <button onClick={handleUpload}>
                    Upload PDF
                </button>

                <br /><br />

                {billData && (

                    <div className="bill-details">

                        <h3>Extracted Bill Details</h3>

                        <table border="1" cellPadding="10">

                            <tbody>

                            <tr>
                                <td><b>Consumer Name</b></td>
                                <td>{billData.consumerName}</td>
                            </tr>

                            <tr>
                                <td><b>Consumer Number</b></td>
                                <td>{billData.consumerNumber}</td>
                            </tr>

                            <tr>
                                <td><b>Billing Month</b></td>
                                <td>{billData.billingMonth}</td>
                            </tr>

                            <tr>
                                <td><b>Total Units</b></td>
                                <td>{billData.totalUnits}</td>
                            </tr>

                            <tr>
                                <td><b>Bill Amount</b></td>
                                <td>₹ {billData.billAmount}</td>
                            </tr>

                            <tr>
                                <td><b>Meter Number</b></td>
                                <td>{billData.meterNumber}</td>
                            </tr>

                            <tr>
                                <td><b>Due Date</b></td>
                                <td>{billData.dueDate}</td>
                            </tr>

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>
    );
}

export default UploadBill;