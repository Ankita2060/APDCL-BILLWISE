import axios from "axios";

const API_URL = "http://localhost:8080/api/bills";

export const getBills = () => {
    return axios.get(API_URL);
};