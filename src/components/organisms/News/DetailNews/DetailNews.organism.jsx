"use client";

import { DefaultTemplate } from "@/components/template";
import { ButtonBack } from "@/components/atoms";
import Image from "next/image";
import News from "../../../../../public/news.png";
import useDetailNewsModel from "./DetailNews.organismModel";
import moment from "moment";

const DetailNews = ({ id }) => {
  const useModel = useDetailNewsModel({ id });

  const time = moment(useModel.news.created_at);
  const formatTime = time.format("DD MMMM YYYY");

  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[53px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Lihat berita</div>
      </div>
      <div className=' rounded-lg cursor-pointer'>
        <Image
          className='object-center object-cover w-[1096] h-[360px]'
          src={useModel.src ? useModel.news.photo_url : News}
          alt='news'
          onError={() => useModel.setSrc(false)}
        />
      </div>
      <div className='font-bold text-4xl mt-[32px]'>{useModel.news.title}</div>
      <div className='text-lg mt-[32px] mb-[16px]'>
        By : {useModel.news.author}
      </div>
      <div className='text-lg mb-[16px] font-light'>{formatTime}</div>
      <p className='text-xl text-justify'>{useModel.news.description}</p>
    </DefaultTemplate>
  );
};

export default DetailNews;
