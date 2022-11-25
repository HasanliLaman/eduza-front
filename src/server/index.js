import axios from "axios";

const config = {
  baseURL: "https://salty-island-00589.herokuapp.com",
};

export const api = axios.create(config);
