import React, { useEffect } from 'react';
import './Home.scss';
import Calender from '../../components/Calender/Calender';

const Home = ({ allMonthsWithDaysArr, holidayDataArr, dataLoaded }) => {
  return (
    <div className="home">
      <h1 className="home__title">Your Yearly Holiday Calender</h1>
      <Calender dataLoaded={dataLoaded} holidayDataArr={holidayDataArr} fullYearArr={allMonthsWithDaysArr}/>
    </div>
  );
};

export default Home;
