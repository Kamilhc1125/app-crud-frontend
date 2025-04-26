import { useEffect, useRef, useState } from "react";

const Timer = () => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Timer: {time} seconds</div>
}

export default Timer;
