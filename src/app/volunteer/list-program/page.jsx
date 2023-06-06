import { DefaultTemplate } from "@/components/template";
import { TableV1 } from "@/components/organisms";
import { ButtonBack, TableV1Row } from "@/components/atoms";

export const metadata = {
  title: "Volunter - List Program",
};

const ListProgram = () => {
  return (
    <DefaultTemplate>
      <div className='mb-[7px] pb-4 flex items-center'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='font-medium text-2xl'>List Program</div>
      </div>
      <div className='pt-4 overflow-x-scroll md:overflow-auto'>
        <TableV1
          variant='primary'
          header1='No'
          header2='Nama program'
          header3='Deskripsi'
          header4='Tanggal'
          header5='Lokasi'
        >
          <TableV1Row
            variant='primary'
            no='1'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
          <TableV1Row
            variant='primary'
            no='2'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
          <TableV1Row
            variant='primary'
            no='3'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
          <TableV1Row
            variant='primary'
            no='4'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
          <TableV1Row
            variant='primary'
            no='5'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
          <TableV1Row
            variant='primary'
            no='6'
            nama='#JustDoIt, Lakukan Olahraga dengan Nyaman Bersama Kami'
            deskripsi='Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non. Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit lobortis neque, ac tempor dui elementum vel. Duis '
            tanggal='6 Mei 2023 - 13 Mei 2023'
            button='Jakarta'
          />
        </TableV1>
      </div>
    </DefaultTemplate>
  );
};

export default ListProgram;
