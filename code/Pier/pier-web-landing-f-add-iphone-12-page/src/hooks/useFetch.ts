import { useState, useEffect } from "react";

const useFetch = (url: string, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          ...options,
          body: JSON.stringify(options.body),
        });
        const json = await res.json();
        setResponse(json?.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { response, error, isLoading };
};

export default useFetch;
