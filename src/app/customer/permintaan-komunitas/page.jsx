import { ButtonBack, TableV2Row } from "@/components/atoms";
import { DefaultTemplate } from "@/components/template";
import SepatuNike from "../../../../public/SepatuNike.png";

const PermintaanKomunitas = () => {
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[40px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>List permintaan komunitas</div>
      </div>
      <div className='flex bg-primary-600 rounded-xl p-5 text-center text-white mb-2.5 drop-shadow-custom'>
        <div className='w-[67px]'>No</div>
        <div className='w-[421px]'>Nama program</div>
        <div className='w-[400px]'>Deskripsi</div>
        <div className='w-[212px]'>Tanggal</div>
      </div>
      <TableV2Row
        no='1'
        imgsrc={SepatuNike}
        rounded='rounded-[200px]'
        comunity='Capstone12'
        comunitydesc='Jakarta'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='6 Mei 2023'
        btnvariant='primary-600'
      />
      <TableV2Row
        no='2'
        imgsrc={SepatuNike}
        rounded='rounded-[200px]'
        comunity='Capstone12'
        comunitydesc='Jakarta'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='6 Mei 2023'
        btnvariant='primary-600'
      />
      <TableV2Row
        no='3'
        imgsrc={SepatuNike}
        rounded='rounded-[200px]'
        comunity='Capstone12'
        comunitydesc='Jakarta'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='6 Mei 2023'
        btnvariant='primary-600'
      />
      <TableV2Row
        no='4'
        imgsrc={SepatuNike}
        rounded='rounded-[200px]'
        comunity='Capstone12'
        comunitydesc='Jakarta'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='6 Mei 2023'
        btnvariant='primary-600'
      />
      <TableV2Row
        no='5'
        imgsrc={SepatuNike}
        rounded='rounded-[200px]'
        comunity='Capstone12'
        comunitydesc='Jakarta'
        deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis'
        tanggal='6 Mei 2023'
        btnvariant='primary-600'
      />
    </DefaultTemplate>
  );
};

export default PermintaanKomunitas;
