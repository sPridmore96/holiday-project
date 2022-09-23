import React, { useState, useEffect } from 'react';
import './Calender.scss';
import createDaysFunction from '../../assets/daysOfTheYear';
import Carousel from '../Carousel/Carousel';

const Calender = ({ holidayData }) => {
  const currentDate = new Date();
  const [calenderYear, setCalenderYear] = useState(currentDate.getFullYear());
  const [counter, setCounter] = useState(currentDate.getMonth())
  const [eachMonthsDays, setTestChange] = useState();
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
      const {
        dayStart,
        monthStart,
        dayFinish,
        monthFinish,
      } = holiday;

      const EachDayJSX = allMonthsWithDaysArr.map(
        (monthWithDays, monthlyIndexInt) => {
          if (monthStart === monthlyIndexInt && monthStart === monthFinish) {
            return monthWithDays.map((day, index) => {
              if (day >= dayStart + 1 && day <= dayFinish + 1) {
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
          } else if (monthStart !== monthFinish) {
            if (monthStart === monthlyIndexInt) {
              return monthWithDays.map((day, index) => {
                if (day >= dayStart + 1) {
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
            if (monthFinish === monthlyIndexInt) {
              return monthWithDays.map((day, index) => {
                if (day <= dayFinish + 1) {
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
        }
      );
      setTestChange(EachDayJSX);
    });
  };


  const handleMonthArrJSX = () => {
    createCalender()
    console.log(counter);
    const monthJSX = months.map((eachMonth, index) => {
          return (<p key={index}>{eachMonth}</p>);
    })
    setCalenderYear(monthJSX)
  }
  useEffect(() => {
    handleMonthArrJSX()
  }, [holidayData]);


  return (
    <div className="calender">
      <h2 className="calender__year">{calenderYear[counter]}</h2>
      {eachMonthsDays && (
        <Carousel
        counter={counter}
        setCounter={setCounter}
          startPosition={currentDate.getMonth()}
          title={calenderYear}
          titleToSet={setCalenderYear}
          givenArr={eachMonthsDays}
        />
      )}
    </div>
  );
};
export default Calender;
