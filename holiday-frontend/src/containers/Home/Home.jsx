import React, { useEffect } from 'react';
import './Home.scss';
import Calender from '../../components/Calender/Calender';

const Home = ({
  holidayData,
  allMonthsWithDaysArr,
  holidayDataArr,
  dataLoaded,
  setDataLoaded,
  calenderYear,
  setCalenderYear,
}) => {
  return (
    <div className="home">
      <h1 className="home__title">Your Yearly Holiday Calender</h1>
      <Calender
      setDataLoaded={setDataLoaded}
      holidayData={holidayData}
        dataLoaded={dataLoaded}
        holidayDataArr={holidayDataArr}
        fullYearArr={allMonthsWithDaysArr}
        calenderYear={calenderYear}
        setCalenderYear={setCalenderYear}
      />
    </div>
  );
};

export default Home;
