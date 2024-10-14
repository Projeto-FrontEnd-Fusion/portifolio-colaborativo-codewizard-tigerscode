import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        await axios
          .get(url, {
            timeout: 5000,
          })
          .then((response) => setResponse(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    fecthData();
  }, [url]);

  return { response };
}
