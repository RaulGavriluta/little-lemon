import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, label }) => {
  return (
    <Link
      to={to}
      className='py-4 px-6 rounded-md font-bold text-black bg-[#F4CE14] hover:bg-black hover:text-white hover:shadow-2xl hover:transition-all duration-300'>
      {label}
    </Link>
  );
};

export default Button;
