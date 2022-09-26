import React, { useState, useEffect } from 'react';
import './Calender.scss';
import createDaysFunction from '../../assets/daysOfTheYear';
import Carousel from '../Carousel/Carousel';

const Calender = ({ holidayDataArr, fullYearArr, dataLoaded }) => {
  const currentDate = new Date();
  const [monthlyTitles, setMonthlyTitles] = useState();
  const [counter, setCounter] = useState(currentDate.getMonth());
  const [daysForEachMonth, setDaysForEachMonth] = useState();
  const [calenderYear, setCalenderYear] = useState(currentDate.getFullYear());
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

  const createCalender = () => {
    let i = 0;
    const calenderArr = fullYearArr.map((eachMonth, monthIndex) => {
      return eachMonth.map((eachDay, index) => {
        let EachDayJSX;
        console.log(i);
        console.log(holidayDataArr.length -1);
        if (i <= holidayDataArr.length -1) {
          if (holidayDataArr[i][1] === monthIndex + 1) {
            if (eachDay === holidayDataArr[i][0]) {
              i++;
              console.log(`index of ${i}`);
              EachDayJSX = (
                <span key={index} className="calender__each-day--bookedDay">
                  {eachDay}
                </span>
              );

              return EachDayJSX;
            } else {
              EachDayJSX = (
                <span key={index} className="calender__each-day">
                  {eachDay}
                </span>
              );
              return EachDayJSX;
            }
          } else {
            EachDayJSX = (
              <span key={index} className="calender__each-day">
                {eachDay}
              </span>
            );
            return EachDayJSX;
          }
        } else {
          EachDayJSX = (
            <span key={index} className="calender__each-day">
              {eachDay}
            </span>
          );
          return EachDayJSX;
        }
      });
    });
    setDaysForEachMonth(calenderArr);
  };

  const handleMonthArrJSX = () => {
    const monthJSX = months.map((eachMonth, index) => {
      return <p key={index}>{eachMonth}</p>;
    });
    setMonthlyTitles(monthJSX);
  };

  useEffect(() => {
    createCalender();
    handleMonthArrJSX();
  }, [dataLoaded]);

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
