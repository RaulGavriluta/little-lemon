// BookingList.jsx
import React from 'react';
import BookingSlot from './BookingSlot';

const BookingList = ({ availableTimes, bookedTimes, onBookTime }) => {
  return (
    <div className="px-60 ">
      {availableTimes.map((time, index) => {
        const status = bookedTimes.includes(time) ? 'booked' : 'available';
        return (
          <BookingSlot
            key={index}
            time={time}
            status={status}
            onClick={() => onBookTime(time)}
          />
        );
      })}
    </div>
  );
};

export default BookingList;
