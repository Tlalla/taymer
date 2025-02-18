import React, { useState } from 'react';

function Timer() {
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);

  const handleStartPause = () => {
    setRunning(!running);
  };

  const handleIncreaseTime = () => {
    if (!running) setTime((prev) => prev + 60);
  };

  React.useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      alert('Taymer bitdi!');
      setRunning(false);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  return (
    <div style={styles.container}>
      <h1>Taymer</h1>
      <p style={styles.time}>{Math.floor(time / 60)}:{time % 60}</p>
      <button onClick={handleStartPause}>
        {running ? 'Pauza' : 'Başla'}
      </button>
      {!running && <button onClick={handleIncreaseTime}>+1 dəq</button>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  time: {
    fontSize: '48px',
  },
};

export default Timer;
