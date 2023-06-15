"use client";
import { ButtonBack, TableV2Row } from "@/components/atoms";
import { DefaultTemplate } from "@/components/template";
import newsImage from "../../../../public/news.png";
import ReactPaginate from "react-paginate";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useUserToken } from "@/config/redux/user/userSelector";
import moment from "moment";

export const metadata = {
  title: "News - List News",
};

const ListNews = () => {
  const token = useUserToken();
  const [listNews, setListNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.API_URL}/news`, {
        params: {
          page: currentPage + 1,
          page_size: 5,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = response.data;
      setListNews(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [token, currentPage]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = 10;
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>List berita</div>
      </div>
      <div className='flex justify-center'>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <div className='w-[1096px] lg:w-full'>
            <div className='flex bg-error-400 rounded-xl p-5 text-center text-white mb-2.5 drop-shadow-custom'>
              <div className='w-[67px]'>No</div>
              <div className='w-[421px]'>Nama program</div>
              <div className='w-[400px]'>Deskripsi</div>
              <div className='w-[212px] flex-1'>Tanggal</div>
            </div>
            {listNews?.map((news, index) => {
              return (
                <TableV2Row
                  no={(currentPage + 1) * 5 - 5 + (index + 1)}
                  imgsrc={newsImage}
                  rounded='rounded-[20px]'
                  nama={news.title}
                  deskripsi={news.description}
                  tanggal={moment(news.created_at).format("D MMM YYYY")}
                  btnvariant='success-500'
                  key={news.id}
                />
              );
            })}
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
                // pageLinkClassName="join-item btn"
                previousClassName='join-item btn btn-square btn-outline'
                // previousLinkClassName="join-item btn"
                nextClassName='join-item btn btn-square btn-outline'
                // nextLinkClassName="join-item btn btn-outline"
                breakLabel='...'
                breakClassName='join-item btn btn-square btn-outline'
                // breakLinkClassName="join-item btn btn-outline"
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default ListNews;
