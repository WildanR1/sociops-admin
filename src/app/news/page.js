"use client";
import { ButtonBigIconWidth } from "@/components/atoms";
import DefaultTemplate from "@/components/template/DefaultTemplate.template";
import React from "react";
import { FaNewspaper, FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='grid grid-cols-2 gap-[25px] text-Gray-800'>
          <ButtonBigIconWidth
            icon={
              <div className='flex'>
                <FaNewspaper
                  size={100}
                  className='text-error-400 mx-auto mb-3 group-hover:text-Gray-50'
                />
                <FaPlus className='text-error-400 mx-auto mb-3 group-hover:text-Gray-50' />
              </div>
            }
            title='Tulis berita'
            link='/news/createNews'
          />
          <ButtonBigIconWidth
            icon={
              <FaNewspaper
                size={100}
                className='text-error-400 mx-auto mb-3 group-hover:text-primary-600'
              />
            }
            title='List berita'
            link='/news/listNews'
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default page;