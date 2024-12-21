import React, { useState, useEffect } from "react";

const PomodoroTimer = ({ workMinutes = 25, breakMinutes = 5 }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsWorkMode((prevMode) => !prevMode);
      setTimeLeft((isWorkMode ? breakMinutes : workMinutes) * 60);
    }
  }, [timeLeft, isWorkMode, workMinutes, breakMinutes]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center w-full mt-5 rounded-3xl p-6 bg-base-300 border-gray-300">
      <h1 className="text-xl font-bold text-gray-100">
        {isWorkMode ? "Work Time" : "Break Time"}
      </h1>
      <h2 className="text-xl font-mono text-zinc-200 bg-blue-950 p-2 rounded-md my-2">
        {formatTime(timeLeft)}
      </h2>
      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="btn btn-primary btn-sm"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(isWorkMode ? workMinutes * 60 : breakMinutes * 60);
          }}
          className="btn btn-error btn-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
