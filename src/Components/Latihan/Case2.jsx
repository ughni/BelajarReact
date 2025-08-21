import { useRef, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <>
      <div className="m-5 ">
        <h1>Angka Bertambah {time}</h1>
        <button className="p-2 m-1 text-white rounded bg-blue-500" onClick={start}>Start</button>
        <button className="p-2 m-1 text-white rounded bg-blue-500" onClick={stop}>Stop</button>
        <button className="p-2 m-1 text-white rounded bg-blue-500" onClick={reset}>reset</button>
      </div>
    </>
  );
}
