import React from "react";

const ButtonBigIconWidth = ({ title, icon, link }) => {
  return (
    <a
      href={link}
      className='bg-Gray-50 rounded-[15px] drop-shadow-custom p-4 hover:bg-Gray-200 transition duration-300 ease-out'
    >
      <div className='text-center text-4xl flex items-center justify-center'>
        {/* size icon 100px */}
        <div className='mr-4'>{icon}</div>
        <div>{title}</div>
      </div>
    </a>
  );
};

export default ButtonBigIconWidth;
