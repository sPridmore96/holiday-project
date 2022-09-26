import React from 'react';
import BookingForm from '../../components/BookingForm/BookingForm';
import './BookingOverlay.scss';

const BookingOverlay = ({ BookingOverlayActive, daysForEachMonth, months, handleHolidayClicked }) => {
  return (
    <div
      className={
        BookingOverlayActive ? 'booking-overlay' : 'booking-overlay--hidden'
      }
    >
        <button onClick={handleHolidayClicked}>X</button>
      <BookingForm daysForEachMonth={daysForEachMonth} months={months} />
    </div>
  );
};

export default BookingOverlay;
