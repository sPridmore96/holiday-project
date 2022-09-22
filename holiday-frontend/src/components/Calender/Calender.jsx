import React, { useState, useEffect } from 'react';
import './Calender.scss';
import createDaysFunction from '../../assets/daysOfTheYear';
import Carousel from '../Carousel/Carousel';

const Calender = ({ holidayData }) => {
  const currentDate = new Date();
  const [calenderYear, setCalenderYear] = useState(currentDate.getFullYear());
  const [yearlyCalender, setYearlyCalender] = useState();
  const [currentHolidays, setCurrentHolidays] = useState([]);
  const [testChange, setTestChange] = useState();
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
        title,
        holidayInfo,
        dayStart,
        monthStart,
        yearStart,
        dayFinish,
        monthFinish,
        yearFinish,
      } = holiday;

      const EachDayJSX = allMonthsWithDaysArr.map(
        (monthWithDays, monthlyIndexInt) => {
          if (monthStart === monthlyIndexInt && monthStart === monthFinish) {
            return monthWithDays.map((day, index) => {
              if (day >= dayStart + 1 && day <= dayFinish + 1) {
                // console.log(day);
                // console.log(monthlyIndexInt);
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
            // console.log(`${monthFinish} finish`);
            // console.log(`${monthStart} start`);
            // console.log(`${monthlyIndexInt} index`);
            if (monthStart === monthlyIndexInt) {
              return monthWithDays.map((day, index) => {
                if (day >= dayStart + 1) {
                  // console.log(day);
                  // console.log(monthlyIndexInt);
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
                  // console.log(monthlyIndexInt);
                  // console.log(day);
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
        setTestChange(EachDayJSX)
      });
  };
console.log(testChange);
  const handleCalenderColoring = () => {
    createCalender();
    holidayData.forEach((holiday) => {
      const {
        title,
        holidayInfo,
        dayStart,
        monthStart,
        yearStart,
        dayFinish,
        monthFinish,
        yearFinish,
      } = holiday;

      const monthlyJSX = (
        <>
          <div className="calender__month">
            {months.map((month, monthlyIndexString) => {
              let monthStringJSX = null;
              if (monthlyIndexString === currentDate.getMonth) {
                return (monthStringJSX = (
                  <p key={monthlyIndexString}>{month}</p>
                ));
              }
              return monthStringJSX;
            })}
          </div>
          <div className="calender__day-container">
            {testChange}
            </div>
        </>
      );
      setYearlyCalender(monthlyJSX);
    });
  };
  useEffect(() => {
    handleCalenderColoring();
  }, [holidayData]);

  return (
    <div className="calender">
      <h2 className="calender__year">{calenderYear}</h2>
      {yearlyCalender && (
        <Carousel
          startPosition={currentDate.getMonth()}
          title={calenderYear}
          titleToSet={setCalenderYear}
          givenArr={yearlyCalender}
        />
      )}
    </div>
  );
};
export default Calender;
