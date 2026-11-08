
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    let timerID;

    if (isRunning && time > 0) {
      timerID = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerID);
  }, [isRunning, time]);

  const handleStart = () => {
    if (seconds === "" || Number(seconds) <= 0) {
      return;
    }

    if (time === 0) {
      setTime(Number(seconds));
    }

    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setSeconds("");
  };

  const handleChange = (e) => {
    setSeconds(e.target.value);
    setTime(Number(e.target.value) || 0);
    setIsRunning(false);
  };

  return (
    <>
      <h2>Countdown Timer</h2>

      <p>
        Set time (seconds):
        <input
          type="number"
          min="1"
          value={seconds}
          onChange={handleChange}
          disabled={isRunning}
        />
      </p>
      <h3>Time Left: {time} seconds</h3>
      <button
        disabled={isRunning || seconds === "" || Number(seconds) <= 0}
        onClick={handleStart}>Start</button>
      <button disabled={!isRunning} onClick={handleStop}>Stop</button>
      <button onClick={handleReset}> Restart</button>
    </>
  );
}

export default App;
