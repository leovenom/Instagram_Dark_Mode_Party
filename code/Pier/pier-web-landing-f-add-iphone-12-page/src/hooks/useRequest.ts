import { useState } from "react";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlingResponse = ({ status, data, headers }) => {
    if (status >= 200 && status <= 299) {
      setResponse({ ...data, headers });
    }

    if (status >= 400) {
      throw { error: data, status };
    }
  };

  const makeRequest = async (url: string, options) => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, {
          ...options,
        });
        const data = await res.json();

        handlingResponse({ status: res.status, data, headers: res.headers });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    await fetchData();
  };
  return { response, error, isLoading, makeRequest };
};

export default useFetch;
