import Image from "next/image";
import React from "react";
import newsImage from "../../../../public/news.png";
import { Button } from "..";

const TableV2Row = ({ no, nama, deskripsi, tanggal }) => {
  return (
    <div className='flex rounded-xl p-5 text-center drop-shadow-custom bg-Gray-25 mb-2.5'>
      <div className='w-[67px] p-[18.5px] flex items-center'>{no}</div>
      <div className='w-[421px] flex'>
        <Image
          className='rounded-[20px]'
          width={124}
          height={106}
          src={newsImage}
          alt='news'
        ></Image>
        <p className='text-justify font-medium text-base p-[23px]'>{nama}</p>
      </div>
      <div className='w-[400px] text-justify font-normal text-base flex items-center'>
        <div className='line-clamp-3'>{deskripsi}</div>
      </div>
      <div className='p-[18.5px] flex justify-center items-center ml-7'>
        <Button
          className='w-[130px] h-[40px] text-base'
          variant='success-500'
          text={tanggal}
        />
      </div>
    </div>
  );
};

export default TableV2Row;
