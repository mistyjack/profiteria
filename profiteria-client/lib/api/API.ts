import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

class API {
  get(url: string, config?: AxiosRequestConfig) {
    return axiosClient.get(url, config);
  }

  post(url: string, options: any, config?: AxiosRequestConfig) {
    return axiosClient.post(url, options, config);
  }

  patch(url: string, options: any, config?: AxiosRequestConfig) {
    return axiosClient.patch(url, options, config);
  }

  put(url: string, options: any, config?: AxiosRequestConfig) {
    return axiosClient.put(url, options, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return axiosClient.delete(url, config);
  }
}

export default new API();
