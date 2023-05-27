import React from "react";
import { Button } from "..";

const TableV1Row = ({ variant, onClick, no, nama, deskripsi, tanggal }) => {
  let bgContent;
  let buttonColor;
  if (variant) {
    switch (variant) {
      case "primary":
        bgContent = "odd:bg-blue-gray-50 even:bg-blue-gray-100";
        buttonColor = "blue-gray-600";
        break;
      case "warning":
        bgContent = "odd:bg-warning-50 even:bg-warning-100";
        buttonColor = "warning-400";
        break;
      default:
        bgContent = "odd:bg-blue-gray-50 even:bg-blue-gray-100";
        buttonColor = "blue-gray-600";
        break;
    }
  }
  return (
    <tr
      className={`text-center text-Gray-900 ${
        bgContent || "odd:bg-blue-gray-50 even:bg-blue-gray-100"
      }`}
    >
      <td className='p-5 align-top font-semibold'>
        <div>{no}</div>
      </td>
      <td className='text-start align-top p-5'>
        <div className='line-clamp-3'>{nama}</div>
      </td>
      <td className='text-start p-5'>
        <div className='line-clamp-3'>{deskripsi}</div>
      </td>
      <td className='p-5 align-top'>
        <div>{tanggal}</div>
      </td>
      <td className='p-5 align-top'>
        <Button
          text='Lihat Detail'
          variant={buttonColor || "blue-gray-600"}
          width='w-full'
          fontSize='medium'
          size='medium'
          onClick={onClick}
        />
      </td>
    </tr>
  );
};

export default TableV1Row;
