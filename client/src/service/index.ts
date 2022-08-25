import axios, { AxiosError, AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3500",
});
axiosInstance.interceptors.request.use((request: any) => {
  console.log(request);
  //   request.headers.authorization = getToken();
  return request;
});



export default axiosInstance;
