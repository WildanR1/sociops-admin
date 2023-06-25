"use client";
import { Button, ButtonBack, TableV1Row } from "@/components/atoms";
import { TableV1 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import { useUserToken } from "@/config/redux/user/userSelector";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PengajuanProgramFundraising = () => {
  const token = useUserToken();
  const router = useRouter();
  const [listFundraising, setListFundraising] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: currentPage + 1,
          page_size: 5,
          type: "FUNDRAISING",
          status: "PENDING",
          sort: "created_at_asc",
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = response.data;
      setListFundraising(res.data);
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
          variant='warning'
          deskripsi='Data tidak tersedia'
        />,
      );
    }
    return rows;
  };

  const handleDetail = (id) => {
    router.push(`/fundraising/${id}`);
  };

  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>Permintaan Pengajuan Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='warning'
          header1='No'
          header2='Nama Program'
          header3='Deskripsi'
          header4='Tanggal diajukan'
          header5='Detail'
        >
          {listFundraising.length > 0 ? (
            listFundraising.map((fundraising, index) => (
              <TableV1Row
                key={fundraising.id}
                variant='warning'
                no={(currentPage + 1) * 5 - 5 + (index + 1)}
                nama={fundraising.title}
                deskripsi={fundraising.description}
                tanggal={moment(fundraising.created_at).format("D MMM YYYY")}
                button={
                  <Button
                    text='Lihat Detail'
                    variant='warning-400'
                    fontSize='medium'
                    size='medium'
                    width={"w-full"}
                    onClick={() => handleDetail(fundraising.id)}
                  />
                }
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

export default PengajuanProgramFundraising;
