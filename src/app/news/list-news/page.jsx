import { ButtonBack, TableV2Row } from "@/components/atoms";
import { DefaultTemplate } from "@/components/template";
import newsImage from "../../../../public/news.png";

const listNews = () => {
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>List berita</div>
      </div>
      <div className='flex bg-error-400 rounded-xl p-5 text-center text-white mb-2.5 drop-shadow-custom'>
        <div className='w-[67px]'>No</div>
        <div className='w-[421px]'>Nama program</div>
        <div className='w-[400px]'>Deskripsi</div>
        <div className='w-[212px]'>Tanggal</div>
      </div>
      <TableV2Row
        no='1'
        imgsrc={newsImage}
        rounded='rounded-[20px]'
        nama='Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa Wagir'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='23 Mei 2023'
        btnvariant='success-500'
      />
      <TableV2Row
        no='2'
        imgsrc={newsImage}
        rounded='rounded-[20px]'
        nama='Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa Wagir'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='23 Mei 2023'
        btnvariant='success-500'
      />
      <TableV2Row
        no='3'
        imgsrc={newsImage}
        rounded='rounded-[20px]'
        nama='Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa Wagir'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='23 Mei 2023'
        btnvariant='success-500'
      />
      <TableV2Row
        no='4'
        imgsrc={newsImage}
        rounded='rounded-[20px]'
        nama='Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa Wagir'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='23 Mei 2023'
        btnvariant='success-500'
      />
      <TableV2Row
        no='5'
        imgsrc={newsImage}
        rounded='rounded-[20px]'
        nama='Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa Wagir'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='23 Mei 2023'
        btnvariant='success-500'
      />
    </DefaultTemplate>
  );
};

export default listNews;
