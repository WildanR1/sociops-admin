"use client";
import DefaultTemplate from "@/components/template/DefaultTemplate.template";
import React from "react";
import newsImage from "../../../../public/news.png";
import Image from "next/image";
import { Button } from "@/components/atoms";

const createNews = () => {
  return (
    <DefaultTemplate>
      <div className='text-4xl mb-[53px]'>Tulis berita</div>
      <Image src={newsImage} alt='news'></Image>
      <div className='font-bold text-4xl mt-[32px]'>
        Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa <br />
        Wagir
      </div>
      <div className='text-lg mt-[32px] mb-[16px]'>By : Nailul Izah</div>
      <p className='text-xl text-justify'>
        Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
        mollis non. Integer pellentesque erat eu diam pharetra auctor id et
        nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
        lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue
        congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque
        hendrerit lobortis neque, ac tempor dui elementum vel. Duis Proin et
        euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non.
        Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam
        sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices
        tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed
        rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit
        lobortis neque, ac tempor dui elementum vel. Duis
      </p>
      <div className='mt-[147px] flex justify-between gap-8'>
        <Button
          width='full'
          variant='primary-600'
          text='Batalkan'
          size='large'
        />
        <Button width='full' variant='primary-600' text='Upload' size='large' />
      </div>
    </DefaultTemplate>
  );
};

export default createNews;
