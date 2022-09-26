import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import createDaysFunction from '../assets/daysOfTheYear';

const Routing = () => {
  const currentDate = new Date();
  const [holidayData, setHolidayData] = useState([]);
  const [holidayDataArr, setHolidayDataArr] = useState([]);
  const [calenderYear, setCalenderYear] = useState(currentDate.getFullYear());
  const [dataLoaded, setDataLoaded] = useState(false)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getHolidayInfo = async () => {
    const res = await fetch(`http://localhost:8080/holidays`);
    const data = await res.json();
    setHolidayData(data);
    setDataLoaded(true)
  };

  const allMonthsWithDaysArr = months.map((monthString) =>
    createDaysFunction(monthString, calenderYear)
  );
  const handleHolidayData = () => {
    const holidayDataArrCopy = [...holidayDataArr];
    holidayData.forEach((holiday) => {
      const { dayStart, monthStart, dayFinish, monthFinish } = holiday;
      allMonthsWithDaysArr.forEach((month, monthIndex) => {
        month.forEach((day) => {
          if (monthStart === monthIndex + 1) {
            if (dayFinish < dayStart) {
              if (day >= dayStart && day <= month.length) {
                holidayDataArrCopy.push([day, monthIndex + 1]);
              }
            }
            if (day >= dayStart && day <= dayFinish) {
              holidayDataArrCopy.push([day, monthIndex + 1]);
            }
          }
          if (monthFinish === monthIndex && monthStart !== monthIndex) {
            if (day <= dayFinish) {
              holidayDataArrCopy.push([day, monthIndex]);
            }
          }
        });
      });
      setHolidayDataArr(holidayDataArrCopy);
    });

  };

  useEffect(() => {
    getHolidayInfo();
    handleHolidayData();
  }, [dataLoaded]);

  return (
    <Router>
      <Routes>
        {holidayDataArr.length !== 0 && allMonthsWithDaysArr &&(
          <Route
            path="/"
            element={
              <Home
              allMonthsWithDaysArr={allMonthsWithDaysArr}
                holidayDataArr={holidayDataArr}
                dataLoaded={dataLoaded}
              />
            }
          />
        )}
        <Route path="/holiday" />
      </Routes>
    </Router>
  );
};

export default Routing;
