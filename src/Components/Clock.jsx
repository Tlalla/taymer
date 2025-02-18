import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div style={styles.container}>
      <h1>Saat</h1>
      <p style={styles.time}>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </p>
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

export default Clock;
