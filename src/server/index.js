import axios from "axios";

const config = {
  baseURL: "https://salty-island-00589.herokuapp.com/courses",
};

export const api = axios.create(config);
