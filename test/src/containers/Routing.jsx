import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

const Routing = () => {
  const [holidayData, setHolidayData] = useState();

  const getHolidayInfo = async () => {
    const res = await fetch(`http://localhost:8080/holidays`);
    const data = await res.json();
    setHolidayData(data)
  };
  useEffect(() => {
    getHolidayInfo();
  }, []);

  return (
    <Router>
      <Routes>
     {holidayData && <Route path="/" element={<Home holidayData={holidayData} />} />}
        <Route path='/holiday' />
      </Routes>
    </Router>
  );
};

export default Routing;
