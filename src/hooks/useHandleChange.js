import { useState } from "react";

const useHandleChange = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  return { values, setValues, handleChange };
};

export default useHandleChange;