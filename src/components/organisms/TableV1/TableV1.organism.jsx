import React from "react";

const TableV1 = ({ variant, children }) => {
  let bgHeader;
  if (variant) {
    switch (variant) {
      case "primary":
        bgHeader = "bg-blue-gray-600";
        break;
      case "warning":
        bgHeader = "bg-warning-400";
        break;
      default:
        bgHeader = "bg-blue-gray-600";
        break;
    }
  }
  return (
    <table className='table-auto'>
      <thead>
        <tr className={`${bgHeader || "bg-blue-gray-600"} text-white text-xl`}>
          <th className='w-1/12 p-5'>No</th>
          <th className='w-3/12 p-5'>Nama Program</th>
          <th className='w-4/12 p-5'>Deskripsi</th>
          <th className='w-3/12 p-5'>Tanggal Diajukan</th>
          <th className='w-1/12 p-5'>Lihat</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableV1;
