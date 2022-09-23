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

      // for (let i = 0; i < EachDayJSX.length - 1; i++) {
    //   for (let j = 0; j < EachDayJSX[i].length; j++) {
    //     for (let k = 0; k < EachDayJSX[i][j].length; k++) {
    //         const newarr = [...new Set([...EachDayJSX[i][j][k], ...EachDayJSX[i + 1][j][k]])];
    //         console.log(newarr);
    //     }
    //   }
    // }

    

    // let testFinalArr = EachDayJSX[0].concat(EachDayJSX[1]);
    // const test = testFinalArr.map(arr => {
    //   return arr.map(arr1 => {
    //     console.log(arr1 );
        // return [...new Set(arr1)]
    //   })
    // })
    // console.log(testFinalArr);
    // testFinalArr = testFinalArr.filter((item) => {
    //   return (item.filter((days, index) => {
    //     return (item.indexOf(days.props.className) === index)
    //   }))
    // })
    // console.log(testFinalArr);
    // testFinalArr.indexOf(item) === index

    // let testFinalArr = EachDayJSX[0].filter(x => EachDayJSX[1].indexOf(x) === -1);
    

    //     const wrapper = () => {
    //       let test = null;
    //       let test2 = null;
    //       let arr3 = [];
    //       let arr4 = [];
    //       for (let i = 0; i < EachDayJSX.length; i++) {
    //         for (let x = 0; x < EachDayJSX[i].length; x++) {
    //           if (arr4.indexOf(EachDayJSX[i][x] == -1)) {
    //             arr4.push(EachDayJSX[i][x]);
    //           }
    //         }
    //         arr3.push(arr4);
    //       }
    //       for (let j = 0; j < EachDayJSX.length; j++) {
    //         for (let k = 0; k < EachDayJSX[1].length; k++) {
    //           if (arr4.indexOf[EachDayJSX[j][k] == -1]) {
    //             arr4.push(EachDayJSX[j][k]);
    //           }
    //         }
    //         if (arr3[j] == -1) {
    //           arr3.push(arr4)
    //         }
    //       }
    // console.log(arr4);
    //       // console.log(testFinalArr);
    //       setDaysForEachMonth(arr4);
    //     };
    //     wrapper();

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
