import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Stopwatch from './Components/StopWatch';
import Timer from './Components/Timer';
import Clock from './Components/Clock';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
