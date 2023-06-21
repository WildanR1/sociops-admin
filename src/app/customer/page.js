import { ButtonBigIcon, ProgramItem } from "@/components/atoms";
import { NewProgram } from "@/components/molecules";
import { Statistic } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
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
            link='/customer/daftar-akun-pengguna'
          />
          <ButtonBigIcon
            icon={
              <FaUsers size={100} className='text-primary-600 mx-auto mb-3' />
            }
            title='Pengguna Fundraising'
            link='/customer/pengguna-fundraising'
          />
          <ButtonBigIcon
            icon={
              <FaUserFriends
                size={100}
                className='text-primary-600 mx-auto mb-3'
              />
            }
            title='Pengguna Volunteer'
            link='/customer/pengguna-volunteer'
          />
        </div>
        <div className='overflow-x-scroll lg:overflow-x-visible'>
          <Statistic variant='customer' />
        </div>
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
