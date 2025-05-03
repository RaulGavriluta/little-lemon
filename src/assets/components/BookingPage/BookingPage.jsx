import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api'; // Import both fetchAPI and submitAPI
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import FAQ from './FAQ';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  // Function to fetch times from the global API
  const updateAvailableTimes = async (dateStr) => {
    try {
      const times = await fetchAPI(new Date(dateStr)); // Use fetchAPI here
      console.log('Fetched times:', times);
      setAvailableTimes(times || []);
    } catch (err) {
      console.error('Error fetching times:', err);
      setAvailableTimes([]);
    }
  };

  // Initialize on page load
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
    updateAvailableTimes(today); // Fetch available times for today's date
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    updateAvailableTimes(newDate); // Fetch available times for the new selected date
  };

  return (
    <main>
      <section className="grid grid-cols-3 gap-4 px-60 py-5">
        {availableTimes.length > 0 ? (
          availableTimes.map((time, idx) => (
            <BookingSlot key={idx} time={time} status="available" />
          ))
        ) : (
          <p className="text-center col-span-3 text-red-500">No available times.</p>
        )}
      </section>

      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        submitAPI={submitAPI} // Pass submitAPI as a prop to BookingForm
      />

      <FAQ />
    </main>
  );
};

export default BookingPage;
