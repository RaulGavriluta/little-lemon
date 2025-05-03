import React from 'react';

const BookingSlot = ({ time, status, onClick }) => {
  return (
    <div
      className={`w-full px-6 py-4 flex justify-between items-center ${status === 'booked' ? 'bg-red-500' : 'bg-[#495E57]'} text-white rounded-md cursor-pointer`}
      onClick={onClick}
    >
      <span>{time}</span>
      <span>{status === 'booked' ? 'Booked' : 'Available'}</span>
    </div>
  );
};

export default BookingSlot;
