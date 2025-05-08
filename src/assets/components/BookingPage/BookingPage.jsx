import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api';
import FAQ from './FAQ';
import BookingForm from './BookingForm'; // Ensure BookingForm is imported

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const updateAvailableTimes = async (dateStr) => {
    try {
      const times = await fetchAPI(new Date(dateStr));
      console.log('Fetched times:', times);
      setAvailableTimes(times || []);
    } catch (err) {
      console.error('Error fetching times:', err);
      setAvailableTimes([]);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
    updateAvailableTimes(today);
  }, []);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    updateAvailableTimes(newDate);
  };

  return (
    <main className="">
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        submitAPI={submitAPI}
      />
      <FAQ />
    </main>
  );
};

export default BookingPage;
