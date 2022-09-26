import React, { useState, useEffect } from 'react';
import './Calender.scss';
import Carousel from '../Carousel/Carousel';
import HolidayOverlay from '../HolidayOverlay/HolidayOverlay';
import BookingOverlay from '../../containers/BookingOverlay/BookingOverlay';

const Calender = ({
  holidayData,
  holidayDataArr,
  fullYearArr,
  dataLoaded,
  calenderYear,
  setCalenderYear,
  setDataLoaded
}) => {
  const currentDate = new Date();
  const [monthlyTitles, setMonthlyTitles] = useState();
  const [counter, setCounter] = useState(currentDate.getMonth());
  const [daysForEachMonth, setDaysForEachMonth] = useState();
  const [clickedDateArr, setClickedDateArr] = useState([]);
  const [clickedHolidayInfo, setClickedHolidayInfo] = useState();
  const [overlayActive, setOverlayActive] = useState(false);
  const [BookingOverlayActive, setBookingOverlayActive] = useState(false);
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

  const handleHolidayClicked = (event) => {
    if (event.target.textContent === 'X') {
      if (event.target.className === 'overlay__close') {
        setOverlayActive((overlayActive) => !overlayActive);
      } else {
        setBookingOverlayActive((BookingOverlay) => !BookingOverlay);
      }
    } else {
      let clickedDay = parseInt(event.target.textContent);
      let clickedMonthInt =
      months.indexOf(
        event.target.parentElement.parentElement.parentElement.parentElement
        .children[1].innerText
        ) + 1;
        if (event.target.className === 'calender__each-day--bookedDay') {
          holidayData.forEach((holiday) => {
            if (clickedMonthInt === holiday.monthStart) {
              if (clickedDay >= holiday.dayStart) {
                setClickedHolidayInfo(holiday);
                setOverlayActive((overlayActive) => !overlayActive);
              }
          } else {
            if (clickedMonthInt === holiday.monthFinish) {
              if (clickedDay <= holiday.dayFinish) {
                setOverlayActive((overlayActive) => !overlayActive);
                setClickedHolidayInfo(holiday);
              }
            }
          }
        });
      } else {
        setBookingOverlayActive((BookingOverlay) => !BookingOverlay);
      }
    }
  };
  console.log(overlayActive);

  const createCalender = () => {
    let i = 0;
    const calenderArr = fullYearArr.map((eachMonth, monthIndex) => {
      return eachMonth.map((eachDay, index) => {
        let EachDayJSX;
        if (i <= holidayDataArr.length - 1) {
          if (holidayDataArr[i][1] === monthIndex + 1) {
            if (eachDay === holidayDataArr[i][0]) {
              i++;
              EachDayJSX = (
                <span
                  onClick={handleHolidayClicked}
                  key={index}
                  className="calender__each-day--bookedDay"
                >
                  {eachDay}
                </span>
              );

              return EachDayJSX;
            } else {
              EachDayJSX = (
                <span
                  onClick={handleHolidayClicked}
                  key={index}
                  className="calender__each-day"
                >
                  {eachDay}
                </span>
              );
              return EachDayJSX;
            }
          } else {
            EachDayJSX = (
              <span
                onClick={handleHolidayClicked}
                key={index}
                className="calender__each-day"
              >
                {eachDay}
              </span>
            );
            return EachDayJSX;
          }
        } else {
          EachDayJSX = (
            <span
              onClick={handleHolidayClicked}
              key={index}
              className="calender__each-day"
            >
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
      {clickedHolidayInfo && (
        <HolidayOverlay
          handleHolidayClicked={handleHolidayClicked}
          overlayActive={overlayActive}
          clickedHolidayInfo={clickedHolidayInfo}
          months={months}
        />
      )}
      <BookingOverlay
      setDataLoaded={setDataLoaded}
      dataLoaded={dataLoaded}
        handleHolidayClicked={handleHolidayClicked}
        BookingOverlayActive={BookingOverlayActive}
        months={months}
        daysForEachMonth={daysForEachMonth}
      />
    </div>
  );
};
export default Calender;
