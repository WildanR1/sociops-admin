import Image from "next/image";

import { Button } from "..";

const TableV2Row = ({
  no,
  nama,
  comunity,
  comunitydesc,
  deskripsi,
  tanggal,
  rounded,
  imgsrc,
  btnvariant,
}) => {
  return (
    <div className='flex rounded-xl p-5 text-center drop-shadow-custom bg-Gray-25 mb-2.5'>
      <div className='w-[67px] p-[18.5px] flex items-center'>{no}</div>
      <div className='w-[421px] flex'>
        <Image
          className={rounded}
          width={124}
          height={106}
          src={imgsrc}
          alt='news'
        ></Image>
        <div className='justify-center p-[23px]'>
          <p className='text-justify font-medium text-base'>{nama}</p>
          <p className='text-justify font-medium text-3xl'>{comunity}</p>
          <p className='text-justify font-light text-lg'>{comunitydesc}</p>
        </div>
      </div>
      <div className='w-[400px] text-justify font-normal text-base flex items-center'>
        <div className='line-clamp-3'>{deskripsi}</div>
      </div>
      <div className='p-[18.5px] flex flex-1 justify-center items-center'>
        <Button variant={btnvariant} text={tanggal} size='detail-button' />
      </div>
    </div>
  );
};

export default TableV2Row;
