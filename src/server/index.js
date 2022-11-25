import axios from "axios";

const config = {
  baseURL: "https://164.92.171.28/",
};

export const api = axios.create(config);
