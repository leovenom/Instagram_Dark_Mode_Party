import { useState, useCallback } from "react";

const useToggle = (initialState = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
};

export default useToggle;
