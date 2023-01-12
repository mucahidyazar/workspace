import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

// instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// instance.defaults.headers.post["Contect-Type"] = "application/json";

export default instance;
