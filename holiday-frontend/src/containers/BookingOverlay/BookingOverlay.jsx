import React from 'react';
import BookingForm from '../../components/BookingForm/BookingForm';
import './BookingOverlay.scss';

const BookingOverlay = ({
  BookingOverlayActive,
  daysForEachMonth,
  months,
  handleHolidayClicked,
  dataLoaded,
  setDataLoaded,
}) => {
  return (
    <div
      className={
        BookingOverlayActive ? 'booking-overlay' : 'booking-overlay--hidden'
      }
    >
      <button className="booking-overlay__close" onClick={handleHolidayClicked}>
        X
      </button>
      <BookingForm
        setDataLoaded={setDataLoaded}
        dataLoaded={dataLoaded}
        daysForEachMonth={daysForEachMonth}
        months={months}
      />
    </div>
  );
};

export default BookingOverlay;
