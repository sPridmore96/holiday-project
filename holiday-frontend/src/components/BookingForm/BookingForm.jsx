import React, { useState, useEffect } from 'react';
import './BookingForm.scss';
import Button from '../Button/Button';

const BookingForm = ({ daysForEachMonth, months, dataLoaded, setDataLoaded }) => {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [yearsArr, setYearsArr] = useState([]);

  const createYearsArr = () => {
    let i = 0;
    const yearsArrTemp = [];
    while (i <= 5) {
      yearsArrTemp.push(currentDate.getFullYear() + i);
      i++;
    }
    setYearsArr(yearsArrTemp);
  };

  useEffect(() => {
    createYearsArr();
  }, []);

  const getSelectedMonth = (event) => {
    setSelectedMonth(months.indexOf(event.target.value) + 1);
  };

  const handleFormSubmit = async (event) => {
    const monthStart =
      months.indexOf(event.target.children[0].children[3].value) + 1;
    const monthFinish =
      months.indexOf(event.target.children[1].children[3].value) + 1;
    event.preventDefault();


    const bodyForPostReq =  JSON.stringify({
      dayStart: parseInt(event.target.children[0].children[4].value),
      monthStart: monthStart,
      yearStart: parseInt(event.target.children[0].children[5].value),
      dayFinish: parseInt(event.target.children[1].children[4].value),
      monthFinish: monthFinish,
      yearFinish: parseInt(event.target.children[1].children[5].value),
      title: event.target[6].value,
      holidayInfo: event.target[7].value,
    });
    let headersList = {
      'Content-Type': 'application/json',
    };

    let response = await fetch('http://localhost:8080/holidays', {
      method: 'POST',
      body: bodyForPostReq,
      headers: headersList,
    });
    let data = await response.text();

    alert(data)
  };

  //   console.log(daysForEachMonth[selectedMonth - 1]);
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="form__dropdown-containers">
        <label className="form__label" htmlFor="">
          Pick a start month,
        </label>
        <label className="form__label" htmlFor="">
          day
        </label>
        <label className="form__label" htmlFor="">
          and year
        </label>
        <select className="form__options" onClick={getSelectedMonth}>
          {months.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
        <select className="form__options--date">
          {daysForEachMonth &&
            daysForEachMonth[selectedMonth - 1].map((eachDay, index) => {
                if(eachDay === currentDate.getDate()){
                    return <option selected="selected" key={index}>{eachDay}</option>
                } else {
                    return <option key={index}>{eachDay}</option>;
                }
            })}
        </select>
        <select className="form__options--date" name="" id="">
          {yearsArr.map((eachYear, index) => {
            return <option key={index}>{eachYear}</option>
          })}
        </select>
      </div>
      <div className="form__dropdown-containers">
        <label className="form__label" htmlFor="">
          Pick a finish month,
        </label>
        <label className="form__label" htmlFor="">
          day
        </label>
        <label className="form__label" htmlFor="">
          and year
        </label>
        <select className="form__options" onClick={getSelectedMonth}>
          {months.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
        <select className="form__options--date" id="">
          {daysForEachMonth &&
            daysForEachMonth[selectedMonth - 1].map((eachDay, index) => {
                if(eachDay === currentDate.getDate()){
                    return <option selected key={index}>{eachDay}</option>
                } else {
                    return <option key={index}>{eachDay}</option>;
                }
            })}
        </select>
        <select className="form__options--date" name="" id="">
          {yearsArr.map((eachYear, index) => {
            return <option key={index}>{eachYear}</option>
          })}
        </select>
      </div>
      <label htmlFor="">Enter The title for your holiday</label>
      <input type="text" />
      <label htmlFor="">Add any additional info</label>
      <input type="text" />
      <Button buttonText="Submit" />
    </form>
  );
};

export default BookingForm;
