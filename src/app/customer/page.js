"use client";
import { ButtonBigIcon, ProgramItem } from "@/components/atoms";
import { NewProgram } from "@/components/molecules";
import { FakeStatistic } from "@/components/organisms";
import DefaultTemplate from "@/components/template/DefaultTemplate.template";
import React from "react";
import {
  FaClipboardList,
  FaUserFriends,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";

const Customer = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='grid grid-cols-4 gap-[25px] text-Gray-800'>
          <ButtonBigIcon
            icon={
              <FaUserPlus
                size={100}
                className='text-primary-600 mx-auto mb-3 group-hover:text-Gray-50'
              />
            }
            title='Permintaan Komunitas'
            link='/customer/permintaan-komunitas'
          />
          <ButtonBigIcon
            icon={
              <FaClipboardList
                size={100}
                className='text-primary-600 mx-auto mb-3 group-hover:text-primary-600'
              />
            }
            title='Daftar Akun Pengguna'
            link='/fundraising/list-program'
          />
          <ButtonBigIcon
            icon={
              <FaUsers size={100} className='text-primary-600 mx-auto mb-3' />
            }
            title='Pengguna Fundraising'
            link='/fundraising/riwayat-program'
          />
          <ButtonBigIcon
            icon={
              <FaUserFriends
                size={100}
                className='text-primary-600 mx-auto mb-3'
              />
            }
            title='Pengguna Volunteer'
            link='/fundraising/transaksi'
          />
        </div>
        <FakeStatistic title='Customer statistics' />
        <div className='grid grid-cols-3'>
          <NewProgram title='Permintan Komunitas Baru'>
            <ProgramItem
              title='Capstone12'
              deskripsi='Jakarta'
              linkImage='/SepatuNike.png'
              variant='netral'
            />
            <ProgramItem
              title='Capstone12'
              deskripsi='Jakarta'
              linkImage='/SepatuNike.png'
              variant='netral'
            />
            <ProgramItem
              title='Capstone12'
              deskripsi='Jakarta'
              linkImage='/SepatuNike.png'
              variant='netral'
            />
            <ProgramItem
              title='Capstone12'
              deskripsi='Jakarta'
              linkImage='/SepatuNike.png'
              variant='netral'
            />
          </NewProgram>
          <NewProgram title='Pengguna Baru'>
            <ProgramItem
              title='Benny Chagur'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='netral'
            />
            <ProgramItem
              title='Chynita Heree'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='netral'
            />
            <ProgramItem
              title='David Yers'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='netral'
            />
            <ProgramItem
              title='Hayder Jahid'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='netral'
            />
          </NewProgram>
          <NewProgram title='Pengguna mengikuti program'>
            <ProgramItem
              title='Benny Chagur'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='label-primary'
            />
            <ProgramItem
              title='Chynita Heree'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='label-error'
            />
            <ProgramItem
              title='David Yers'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='label-primary'
            />
            <ProgramItem
              title='Hayder Jahid'
              deskripsi='Member'
              linkImage='/exampleProfile.png'
              variant='label-error'
            />
          </NewProgram>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Customer;