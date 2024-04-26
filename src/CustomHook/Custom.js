import { useState, useEffect } from "react";

const getSavedValues = (key, initialValue) => {
  const savedValues = JSON.parse(localStorage.getItem(key));

  if (savedValues) return savedValues;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default function Custom(key, initialValue) {
  const [value, setvalue] = useState(() => {
    return getSavedValues(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setvalue];
}
