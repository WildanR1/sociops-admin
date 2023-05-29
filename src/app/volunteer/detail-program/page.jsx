"use client";
import React from "react";
import DefaultTemplate from "@/components/template/DefaultTemplate.template";
import { Button, ButtonBack } from "@/components/atoms";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

const DetailProgram = () => {
  return (
    <DefaultTemplate>
      <div className='grid grid-cols-1 gap-8'>
        <div className='flex items-center'>
          <div className='pr-4'>
            <ButtonBack />
          </div>
          <div className='font-medium text-2xl'>Detail Program</div>
        </div>
        <div>
          <div className='rounded-[32px]'>
            <Image
              src='/exampleDetailProgram.png'
              alt='image detail program'
              className='block mx-auto'
              width={1096}
              height={360}
            />
          </div>
        </div>
        {/* Judul */}
        <div className='font-semibold text-4xl'>Indonesia Peduli Bencana</div>
        {/* Keterangan */}
        <div>
          <div className='mb-6 grid grid-cols-2 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Organizer
              </div>
              <div className='text-xl'>Muhammad rifki muzakki</div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Lokasi program
              </div>
              <div className='text-xl'>Jakarta, Indonesia</div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 text-center'>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Periode program
              </div>
              <div className='text-xl'>6 Mei 2023 - 13 Mei 2023</div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Hashtag
              </div>
              <div className='text-xl'>#JustDoIt</div>
            </div>
            <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl'>
              <div className='mb-4 text-primary-700 font-semibold text-lg'>
                Kategori
              </div>
              <div className='text-xl'>Lainnya</div>
            </div>
          </div>
        </div>
        {/* Tentang */}
        <div>
          <div className='font-semibold text-3xl mb-4'>Tentang Campaign</div>
          <div className='text-justify text-xl'>
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis
            Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
            mollis non. Integer pellentesque erat eu diam pharetra auctor id et
            nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
            lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque
            augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante.
            Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis{" "}
          </div>
        </div>
        <div className='border-primary-700 border-2 bg-primary-25 py-10 px-8 rounded-2xl flex items-center flex-col w-[424px]'>
          <div className='mb-4 text-primary-700 font-semibold text-lg'>
            Video Promosi
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <Button
                variant='primary-600'
                text='justdoit video promosi.mp4'
                className='p-2 border-black border-2'
              />
            </div>
            <div>
              <Button
                variant='primary-600'
                text={<HiDownload size={24} className='text-white' />}
                className='p-[11px] border-black border-2'
              />
            </div>
          </div>
        </div>
        <div className='mt-8 flex justify-between gap-8'>
          <Button
            width='full'
            variant='primary-600'
            text='Ditolak'
            size='large'
          />
          <Button
            width='full'
            variant='primary-600'
            text='Diterima'
            size='large'
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default DetailProgram;
