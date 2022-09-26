import React, {useState} from 'react'
import "./HolidayOverlay.scss"
import Button from '../Button/Button';

const HolidayOverlay = ({clickedHolidayInfo, overlayActive, handleHolidayClicked, months}) => {


const {dayStart, dayFinish, monthStart,monthFinish, title, holidayInfo} = clickedHolidayInfo;

  return (
    <div className={overlayActive ? "overlay" : "overlay--hidden"}>
        <button onClick={handleHolidayClicked} className='overlay__close'>X</button>
        <h2 className='overlay__title'>{title}</h2>
        <div className='overlay__dates'>
        <p >Holiday Starts : {dayStart} {months[monthStart -1]}</p>
        <p >Holiday Finishes : {dayFinish} {months[monthFinish -1]}</p>
        </div>
        <p className='overlay__info'>{holidayInfo}</p>
        <Button buttonText="Edit Holiday?"/>
        <Button buttonText="Delete Holiday?"/>
    </div>
  )
}

export default HolidayOverlay