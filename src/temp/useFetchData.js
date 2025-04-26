import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    setIsLoading(true);

    axios({
      method: 'get',
      url: url,
      mode: 'no-cors'
    }).then((response) => {
      setData(response.data);
      console.log('Fetch data', response.data);
      setIsLoading(false);
    }).catch((error) => {
      
      console.log(error);
    });

    }, [data.length]);

  return {data, isLoading};
  
}

export default useFetchData;