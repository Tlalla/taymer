import React, { useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const handleStartStop = () => {
    setRunning(!running);
  };

  React.useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={styles.container}>
      <h1>Saniyəölçən</h1>
      <p style={styles.time}>{time}s</p>
      <button onClick={handleStartStop}>
        {running ? 'Dayandır' : 'Başla'}
      </button>
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

export default Stopwatch;
