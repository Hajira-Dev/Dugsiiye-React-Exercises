import { useState, useEffect } from "react";

const Countdown = () => {
  const [startTime, setStartTime] = useState(30);
  const [remaining, setRemaining] = useState(30);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (active && remaining > 0) {
      intervalId = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    // Cleanup: clear interval
    return () => clearInterval(intervalId);
  }, [active, remaining]);

  const onStart = () => {
    if (remaining > 0) {
      setActive(true);
    }
  };

  const onStop = () => {
    setActive(false);
  };

  const onReset = () => {
    setActive(false);
    setRemaining(startTime);
  };

  const onTimeChange = (e) => {
    const newValue = Number(e.target.value);
    setStartTime(newValue);
    setRemaining(newValue);
    setActive(false);
  };

  return (
    <div>
      <h2>Countdown Timer:</h2>
      <label>Set Time (Seconds): </label>
      <input type="number" value={startTime} onChange={onTimeChange} />
      <p>Time Left: {remaining} Seconds</p>
      <button onClick={onStart} disabled={active || remaining === 0}>
        Start
      </button>
      <button onClick={onStop} disabled={!active}>
        Stop
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Countdown;
