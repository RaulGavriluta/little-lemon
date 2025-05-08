import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-10 sm:px-30 lg:px-60">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      <div className="max-w-4xl mx-auto">
        <div className="border-b border-gray-300 py-4">
          <div 
            className="cursor-pointer text-lg font-semibold"
            onClick={() => toggleAnswer(0)}
          >
            How can I make a reservation?
          </div>
          {activeIndex === 0 && (
            <div className="text-sm text-brand-black mt-2">
              You can make a reservation online via our website, or by calling us directly. We recommend booking in advance for your preferred time slot.
            </div>
          )}
        </div>

        <div className="border-b border-gray-300 py-4">
          <div 
            className="cursor-pointer text-lg font-semibold"
            onClick={() => toggleAnswer(1)}
          >
            What is your cancellation policy?
          </div>
          {activeIndex === 1 && (
            <div className="text-sm text-brand-black mt-2">
              You can cancel your reservation up to 24 hours before your scheduled time without any penalty. Cancellations made within 24 hours will incur a small fee.
            </div>
          )}
        </div>

        {/* Întrebarea 3 */}
        <div className="border-b border-gray-300 py-4">
          <div 
            className="cursor-pointer text-lg font-semibold"
            onClick={() => toggleAnswer(2)}
          >
            What are your operating hours?
          </div>
          {activeIndex === 2 && (
            <div className="text-sm text-brand-black mt-2">
              Our restaurant is open every day from 11:00 AM to 10:00 PM. We are closed on public holidays.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
