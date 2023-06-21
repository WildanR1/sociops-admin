"use client";
import { DefaultTemplate } from "@/components/template";
import { TableV1 } from "@/components/organisms";
import { ButtonBack, TableV1Row } from "@/components/atoms";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import ReactPaginate from "react-paginate";

export const metadata = {
  title: "Volunter - List Program",
};

const ListProgram = () => {
  const token = useUserToken();
  const [listVolunteer, setListVolunteer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: currentPage + 1,
          page_size: 5,
          type: "VOLUNTEER",
          status: "ACCEPTED",
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = response.data;
      setListVolunteer(res.data);
    } catch (error) {
      throw error;
    }
  }, [token, currentPage]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = 10;

  const renderTableKosong = () => {
    const rows = [];
    for (let i = 0; i < 5; i++) {
      rows.push(
        <TableV1Row
          key={i}
          variant='primary'
          deskripsi='Data tidak tersedia'
        />,
      );
    }
    return rows;
  };

  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>List Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='primary'
          header1='No'
          header2='Nama program'
          header3='Deskripsi'
          header4='Tanggal'
          header5='Lokasi'
        >
          {listVolunteer.length > 0 ? (
            listVolunteer.map((volunteer, index) => (
              <TableV1Row
                key={volunteer.id}
                variant='primary'
                no={(currentPage + 1) * 5 - 5 + (index + 1)}
                nama={volunteer.title}
                deskripsi={volunteer.description}
                tanggal={
                  moment(volunteer.start_date).format("D MMM YYYY") +
                  " - " +
                  moment(volunteer.end_date).format("D MMM YYYY")
                }
                button={volunteer.location}
              />
            ))
          ) : (
            <>{renderTableKosong()}</>
          )}
        </TableV1>
        <div className='flex justify-center mt-4'>
          <ReactPaginate
            pageCount={pageCount} // Jumlah total halaman
            pageRangeDisplayed={3} // Jumlah halaman yang ditampilkan
            marginPagesDisplayed={2} // Jumlah halaman di sekitar halaman aktif yang ditampilkan
            onPageChange={handlePaginate} // Fungsi yang dipanggil saat halaman berubah
            containerClassName='join'
            activeClassName='btn-active'
            nextLabel='>>'
            previousLabel='<<'
            pageClassName='join-item btn btn-square btn-outline'
            pageLinkClassName='w-full h-full flex justify-center items-center'
            previousClassName='join-item btn btn-square btn-outline'
            previousLinkClassName='w-full h-full flex justify-center items-center'
            nextClassName='join-item btn btn-square btn-outline'
            nextLinkClassName='w-full h-full flex justify-center items-center'
            breakLabel='...'
            breakClassName='join-item btn btn-square btn-outline'
            breakLinkClassName='w-full h-full flex justify-center items-center'
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default ListProgram;
