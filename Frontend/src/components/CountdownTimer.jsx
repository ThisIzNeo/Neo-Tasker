import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // Default 5 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(5);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleSetTime = () => {
    setTimeLeft(customMinutes * 60);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full bg-gradient-to-br from-blue-500 to-blue-900">
      <h1 className="text-2xl font-bold text-gray-100">Countdown Timer</h1>
      <p className="text-4xl font-mono text-gray-200 bg-blue-900 p-1 rounded-md">
        {formatTime(timeLeft)}
      </p>
      <div className="flex">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="btn btn-primary mx-1"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(customMinutes * 60);
          }}
          className="btn btn-error mx-1"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <input
          type="number"
          value={customMinutes}
          onChange={(e) => setCustomMinutes(Number(e.target.value))}
          className="px-4 py-2 border rounded-lg text-gray-800"
          placeholder="Minutes"
        />
        <button
          onClick={handleSetTime}
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
        >
          Set Time
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
