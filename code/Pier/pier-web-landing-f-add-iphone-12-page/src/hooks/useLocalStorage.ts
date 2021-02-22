import { useState, useEffect } from "react";
import isRunningOnClient from "../helpers/isRunningOnClient";

const getItemFromStore = (key, initialValue) => {
  if (!isRunningOnClient()) return initialValue;
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

const useLocalStorage = (key: string, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    setStoredValue(getItemFromStore(key, initialValue));
  }, [initialValue, key]);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error("Error to save localstorage");
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
