import {
  ButtonBack,
  TableV3Cell,
  TableV3Header,
  TableV3Row,
} from "@/components/atoms";
import { TableV3 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import Image from "next/image";

const DaftarAkunPengguna = () => {
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Daftar Akun Pengguna</div>
      </div>
      <div>
        <TableV3
          className='w-1/2'
          header={
            <>
              <TableV3Header title='No' className='w-[10%]' />
              <TableV3Header title='Nama Pengguna' className='text-left' />
            </>
          }
        >
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>1</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>2</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>3</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>4</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>5</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='text-center font-semibold'>6</TableV3Cell>
            <TableV3Cell className='flex items-center'>
              <div>
                <Image
                  alt='profile image'
                  src='/exampleProfile.png'
                  width={40}
                  height={40}
                  className='rounded-[15px] object-top mr-[35px]'
                />
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-Gray-800'>
                  Benny Chagur
                </div>
                <div className='flex'>
                  <div className='text-xs text-Gray-500'>Member</div>
                </div>
              </div>
            </TableV3Cell>
          </TableV3Row>
        </TableV3>
      </div>
    </DefaultTemplate>
  );
};

export default DaftarAkunPengguna;
