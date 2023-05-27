import Image from "next/image";
import React from "react";

const ProgramItem = ({ title, deskripsi, linkImage, variant }) => {
  if (variant) {
    switch (variant) {
      case "netral":
        variant = "text-Gray-500";
        break;
      case "label-primary":
        variant = "bg-primary-500 text-white rounded-[50px] py-[3px] px-[10px]";
        break;
      case "label-error":
        variant = "bg-error-400 text-white rounded-[50px] py-[3px] px-[10px]";
        break;
      default:
        variant = "text-Gray-500";
        break;
    }
  }
  return (
    <div className='flex items-center'>
      <div>
        <Image
          alt='image program'
          src={linkImage}
          width={40}
          height={40}
          className='rounded-[15px] mr-[10px] bg-top bg-cover'
        />
      </div>
      <div className='flex flex-col'>
        <div className='text-sm font-medium text-Gray-800'>{title}</div>
        <div className='flex'>
          <div className={`text-xs ${variant || "text-Gray-500"}`}>
            {deskripsi}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramItem;
