import axios from "axios";

const instance = axios.create({
  baseURL: "https://quiz-app-servr.herokuapp.com/",
  //proxy: 4000,
});

const setToken = async (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.dafaults.headers.common["Authentication"];
  }
};

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
  setToken,
};
