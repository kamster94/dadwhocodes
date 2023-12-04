import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className='flex flex-col items-center'>
        © Dad Who Codes {currentYear > 2023 ? `2023-${currentYear}` : '2023'}
      </div>
    </footer>
  );
};

export default Footer;
