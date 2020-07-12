import React, { useState, useEffect } from 'react';
import './App.scss';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const handleDate = () => {
      date.setSeconds(date.getSeconds() + 1)
    }

    let clockInterval = setInterval(handleDate, 1000);
    return () => {
      clearInterval(clockInterval);
      console.log('cleared');
    }
  }, [date])
  return (
    <div className="App">
      <h1>Synchronized Clocks</h1>
      <div className="leftDiv">
        <h1>Analog Clock</h1>
        <AnalogClock date={date} onDateChange={(dt) => setDate(dt)} />
      </div>
      <div className="rightDiv">
        <h1>Digital Clock</h1>
        <DigitalClock date={date} onDateChange={(dt) => setDate(dt)} />
      </div>
    </div>
  );
}

export default App;
