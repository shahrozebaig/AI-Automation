import axios from "axios";
const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
export const submitLead = async (data) => {
  return API.post("/submit-lead", data);
};