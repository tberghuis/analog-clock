import { useState, useEffect } from "react";

const dateToTimeObject = date => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hours, minutes, seconds };
};

const getTime = () => dateToTimeObject(new Date());

export const useTime = () => {
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
};
