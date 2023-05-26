"use client";
import DefaultTemplate from "@/components/template/DefaultTemplate.template";
import React from "react";
import "./Dashboard.style.css";
import {
  FaArchive,
  FaChalkboardTeacher,
  FaCoins,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { FakeStatistic } from "@/components/organisms";
import { ButtonBigIcon } from "@/components/atoms";

const Dashboard = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='grid grid-cols-4 gap-[25px] text-Gray-800'>
          <ButtonBigIcon
            icon={
              <FaChalkboardTeacher
                size={100}
                className='text-primary-600 mx-auto mb-3 group-hover:text-Gray-50'
              />
            }
            title='Customers'
            link='/customer'
          />
          <ButtonBigIcon
            icon={
              <FaCoins
                size={100}
                className='text-warning-400 mx-auto mb-3 group-hover:text-primary-600'
              />
            }
            title='Fundraising'
            link='/fundraising'
          />
          <ButtonBigIcon
            icon={
              <FaHandHoldingHeart
                size={100}
                className='text-blue-gray-600 mx-auto mb-3'
              />
            }
            title='Volunteer'
            link='/volunteer'
          />
          <ButtonBigIcon
            icon={
              <FaArchive size={100} className='text-error-400 mx-auto mb-3' />
            }
            link='/news'
            title='News'
          />
        </div>
        <FakeStatistic title='Customer statistics' />
        <FakeStatistic title='Fundraising statistics' />
        <FakeStatistic title='Volunteer statistics' />
      </div>
    </DefaultTemplate>
  );
};

export default Dashboard;
