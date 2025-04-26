import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = () => {
  
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error)
    }
  );

  let controller = new AbortController()

  useEffect(() => {
      return () => controller?.abort()
  }, [])

  const fetchData = async({url, method, data = {}, params = {}}) => {

    setLoading(true);

    controller.abort();
    controller = new AbortController();

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal
      });
      setResponse(result.data);
    } catch (error) {

      if(axios.isCancel(error)) {
        console.log("Request cancelled", error.message)
      } else {
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData }

}

export default useAxios;
