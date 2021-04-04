import { useState } from 'react';

const Stopwatch = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [count, setCount] = useState(0);

  const toggleCounter = () => setIsStarted(!isStarted);
  const reset = () => {
    setIsStarted(false);
    setCount(0);
  };

  const handleClock = () => {
    if (isStarted) {
      setCount((prevState) => prevState + 1);
    }
  };

  // let's actually make the clock work ⏰

  return (
    <div className="stopwatch">
      <h2>Stop Watch</h2>
      <span className="stopwatch-time">{count}</span>
      <button type="button" onClick={toggleCounter}>
        {isStarted ? 'Stop' : 'Start'}
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
