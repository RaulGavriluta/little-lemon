import React from 'react'

const BookingForm = () => {
  return (
    <>
        <form className='px-60 py-20 space-y-6 bg-[#495E57]'>
            <div>
                <label htmlFor="res-date" className='block text-white'>Choose date</label>
                <input type="date" id="res-date" required className='w-full p-2 border rounded-md bg-[#EDEFEE]' />
            </div>

            <div>
                <label htmlFor="res-time" className='block text-white'>Choose time</label>
                <select id="res-time" className='w-full p-2 border rounded-md bg-[#EDEFEE]'>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
            </div>

            <div>
                <label htmlFor="guests" className='block text-white'>Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" className='w-full p-2 border rounded-md bg-[#EDEFEE]' />
            </div>

            <div>
                <label htmlFor="occasion" className='block text-white'>Occasion</label>
                <select id="occasion" className='w-full p-2 border rounded-md bg-[#EDEFEE] '>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Make Your Reservation" className='py-4 px-6 rounded-md font-bold text-black bg-[#F4CE14] hover:bg-black hover:text-white hover:shadow-2xl hover:transition-all duration-300 cursor-pointer' />
            </div>
        </form>
    </>
  )
}

export default BookingForm
