import React, { useState } from 'react';

const BookingForm = ({ availableTimes, onDateChange, submitAPI }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!time) {
      alert('Please select a valid time.');
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    try {
      const isSubmitted = await submitAPI(formData); 
      if (isSubmitted) {
        setMessage(
          <p>
            Reservation successfully made!
            <br />
            Your reservation is on{' '}
            <span className="font-semibold text-brand-yellow">{date}</span>, at{' '}
            <span className="font-semibold text-brand-yellow">{time}</span>, for{' '}
            <span className="font-semibold text-brand-yellow">{guests}</span> persons.
          </p>
        );
      } else {
        setMessage('Something went wrong, please try again.');
      }
    } catch (err) {
      console.error('Error submitting reservation:', err);
      setMessage('An error occurred, please try again.');
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    onDateChange(selectedDate); 
  };

  return (
    <form onSubmit={handleSubmit} className="px-10 sm:px-30 lg:px-60 py-20 space-y-6 bg-[#495E57]">
      <div>
        <label htmlFor="res-date" className="block text-white">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          className="w-full p-2 border rounded-md bg-[#EDEFEE]"
        />
      </div>

      <div>
        <label htmlFor="res-time" className="block text-white">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded-md bg-[#EDEFEE]"
        >
          <option value="">Select a time</option>
          {availableTimes.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests" className="block text-white">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full p-2 border rounded-md bg-[#EDEFEE]"
        />
      </div>

      <div>
        <label htmlFor="occasion" className="block text-white">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full p-2 border rounded-md bg-[#EDEFEE]"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div>
        <input
          type="submit"
          value="Make Your Reservation"
          className="py-4 px-6 rounded-md font-bold text-black bg-[#F4CE14] hover:bg-black hover:text-white hover:shadow-2xl hover:transition-all duration-300 cursor-pointer"
        />
      </div>

      {/* Show success or error message */}
      {message && (
        <div className="mt-4 text-white">
          {message}
        </div>
      )}
    </form>
  );
};

export default BookingForm;
