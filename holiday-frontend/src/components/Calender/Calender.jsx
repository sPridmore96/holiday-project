import React, { useState, useEffect } from 'react';
import './Calender.scss';
import createDaysFunction from '../../assets/daysOfTheYear';
import Carousel from '../Carousel/Carousel';

const Calender = ({ holidayData }) => {
  const currentDate = new Date();
  const [calenderYear, setCalenderYear] = useState(currentDate.getFullYear());
  const [monthlyTitles, setMonthlyTitles] = useState();
  const [counter, setCounter] = useState(currentDate.getMonth());
  const [daysForEachMonth, setDaysForEachMonth] = useState();
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

  const allMonthsWithDaysArr = months.map((monthString) =>
    createDaysFunction(monthString, calenderYear)
  );

  const createCalender = () => {
     holidayData.map((holiday) => {
      const { dayStart, monthStart, dayFinish, monthFinish } = holiday;

      const EachDayJSX = allMonthsWithDaysArr.map((monthWithDays, monthlyIndexInt) => {
        if (
          monthStart - 1 === monthlyIndexInt &&
          monthStart - 1 === monthFinish - 1
        ) {
          return monthWithDays.map((day, index) => {
            if (day >= dayStart && day <= dayFinish) {
              return (
                <span key={index} className="calender__each-day--bookedDay">
                  {day}
                </span>
              );
            }
            return (
              <span key={index} className="calender__each-day">
                {day}
              </span>
            );
          });
        } else if (monthStart - 1 !== monthFinish - 1) {
          if (monthStart - 1 === monthlyIndexInt) {
            return monthWithDays.map((day, index) => {
              if (day >= dayStart) {
                return (
                  <span key={index} className="calender__each-day--bookedDay">
                    {day}
                  </span>
                );
              } else {
                return (
                  <span key={index} className="calender__each-day">
                    {day}
                  </span>
                );
              }
            });
          }
          if (monthFinish - 1 === monthlyIndexInt) {
            return monthWithDays.map((day, index) => {
              if (day <= dayFinish) {
                return (
                  <span key={index} className="calender__each-day--bookedDay">
                    {day}
                  </span>
                );
              } else {
                return (
                  <span key={index} className="calender__each-day">
                    {day}
                  </span>
                );
              }
            });
          }
        }
        return monthWithDays.map((day, index) => {
          return (
            <span key={index} className="calender__each-day">
              {day}
            </span>
          );
        });
      });
      setDaysForEachMonth(EachDayJSX)
    });
  };

  const handleMonthArrJSX = () => {
    createCalender();

    const monthJSX = months.map((eachMonth, index) => {
      return <p key={index}>{eachMonth}</p>;
    });
    setMonthlyTitles(monthJSX);
  };
  useEffect(() => {
    handleMonthArrJSX();
  }, [holidayData]);

  return (
    <div className="calender">
      <h2 className="calender__year">{calenderYear}</h2>
      {monthlyTitles && (
        <span className="calender__month">{monthlyTitles[counter]}</span>
      )}
      {daysForEachMonth && (
        <Carousel
          counter={counter}
          setCounter={setCounter}
          startPosition={currentDate.getMonth()}
          title={calenderYear}
          titleToSet={setCalenderYear}
          givenArr={daysForEachMonth}
        />
      )}
    </div>
  );
};
export default Calender;
