import { ButtonBigIcon, ProgramItem } from "@/components/atoms";
import { NewProgram } from "@/components/molecules";
import { FakeStatistic } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import {
  FaClipboardList,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaUserPlus,
} from "react-icons/fa";

const Fundraising = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-[30px]'>
        <div className='grid grid-cols-4 gap-[25px] text-Gray-800'>
          <ButtonBigIcon
            icon={
              <FaUserPlus
                size={100}
                className='text-Orange-400 mx-auto mb-3 group-hover:text-Gray-50'
              />
            }
            title='Permintaan Pengajuan Program'
            link='/fundraising/pengajuan-program'
          />
          <ButtonBigIcon
            icon={
              <FaClipboardList
                size={100}
                className='text-Orange-400 mx-auto mb-3 group-hover:text-primary-600'
              />
            }
            title='List Program'
            link='/fundraising/list-program'
          />
          <ButtonBigIcon
            icon={
              <FaUserCheck
                size={100}
                className='text-Orange-400 mx-auto mb-3'
              />
            }
            title='Riwayat Program'
            link='/fundraising/riwayat-program'
          />
          <ButtonBigIcon
            icon={
              <FaMoneyCheckAlt
                size={100}
                className='text-Orange-400 mx-auto mb-3'
              />
            }
            title='Transaksi'
            link='/fundraising/transaksi'
          />
        </div>
        <FakeStatistic title='Fundraising statistics' />
        <div className='grid grid-cols-2'>
          <NewProgram title='Permintan Program Baru'>
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
          <NewProgram title='Program Baru'>
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
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Fundraising;
