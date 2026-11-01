import axios from "axios";

const API_URL = "http://localhost:8080/api/bills/upload";

export const uploadPdf = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};