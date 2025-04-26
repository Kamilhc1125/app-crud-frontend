import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => { 
    return JSON.parse(
      localStorage.getItem(key) || 
      JSON.stringify(initialValue)) 
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;