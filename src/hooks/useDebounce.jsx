import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutId.current) {
        clearTimeout(timeOutId.current);
      }
    };
  }, []);

  const debounceCallback = (...args) => {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }

    timeOutId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceCallback;
};

export default useDebounce;
