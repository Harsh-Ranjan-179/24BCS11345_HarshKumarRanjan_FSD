import { useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const format = (num) => String(num).padStart(2, "0");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {format(hours)}:
        {format(minutes)}:
        {format(seconds)}:
        {format(milliseconds)}
      </h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;