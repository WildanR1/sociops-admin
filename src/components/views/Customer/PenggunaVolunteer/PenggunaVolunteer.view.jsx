import {
  Button,
  ButtonBack,
  TableV3Cell,
  TableV3Header,
  TableV3Row,
} from "@/components/atoms";
import { TableV3 } from "@/components/organisms";
import { DefaultTemplate } from "@/components/template";
import Image from "next/image";

const PenggunaVolunteer = () => {
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Pengguna Volunteer</div>
      </div>
      <div>
        <TableV3
          header={
            <>
              <TableV3Header title='No' className='w-[5%]' />
              <TableV3Header
                title='Nama Pengguna'
                className='w-[27%] text-left'
              />
              <TableV3Header title='Program' className='w-[33%] text-left' />
              <TableV3Header title='Periode' className='w-[20%] text-left' />
              <TableV3Header title='Status' className='w-[15%]' />
            </>
          }
        >
          <TableV3Row>
            <TableV3Cell className='font-semibold'>
              <div className='text-center'>1</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex items-center'>
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
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='line-clamp-3'>
                #AksiPeduliJakarta, lakukan aksi bersama
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div>4 Juni 2023 - 12 Juni 2023</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex justify-center'>
                <Button variant='success-600' text='Aktif' size={"medium"} />
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='font-semibold'>
              <div className='text-center'>2</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex items-center'>
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
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='line-clamp-3'>
                #AksiPeduliJakarta, lakukan aksi bersama
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div>4 Juni 2023 - 12 Juni 2023</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex justify-center'>
                <Button variant='success-600' text='Aktif' size={"medium"} />
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='font-semibold'>
              <div className='text-center'>3</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex items-center'>
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
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='line-clamp-3'>
                #AksiPeduliJakarta, lakukan aksi bersama
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div>4 Juni 2023 - 12 Juni 2023</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex justify-center'>
                <Button variant='success-600' text='Aktif' size={"medium"} />
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='font-semibold'>
              <div className='text-center'>4</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex items-center'>
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
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='line-clamp-3'>
                #AksiPeduliJakarta, lakukan aksi bersama
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div>4 Juni 2023 - 12 Juni 2023</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex justify-center'>
                <Button variant='success-600' text='Aktif' size={"medium"} />
              </div>
            </TableV3Cell>
          </TableV3Row>
          <TableV3Row>
            <TableV3Cell className='font-semibold'>
              <div className='text-center'>5</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex items-center'>
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
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='line-clamp-3'>
                #AksiPeduliJakarta, lakukan aksi bersama
              </div>
            </TableV3Cell>
            <TableV3Cell>
              <div>4 Juni 2023 - 12 Juni 2023</div>
            </TableV3Cell>
            <TableV3Cell>
              <div className='flex justify-center'>
                <Button variant='success-600' text='Aktif' size={"medium"} />
              </div>
            </TableV3Cell>
          </TableV3Row>
        </TableV3>
      </div>
    </DefaultTemplate>
  );
};

export default PenggunaVolunteer;
