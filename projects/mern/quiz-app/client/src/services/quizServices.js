import axios from "./axios";

export async function getCurrentQuizes() {
  const response = await axios.get("/quizes");
  return response;
}
