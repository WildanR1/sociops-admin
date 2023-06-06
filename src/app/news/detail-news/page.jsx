import { DefaultTemplate } from "@/components/template";
import Image from "next/image";
import newsImage from "../../../../public/news.png";
import { ButtonBack } from "@/components/atoms";

export const metadata = {
  title: "News - Detail News",
};

const page = () => {
  return (
    <DefaultTemplate>
      <div className='flex items-center mb-[53px]'>
        <div className='pr-4'>
          <ButtonBack />
        </div>
        <div className='text-4xl'>Detail berita</div>
      </div>
      <Image src={newsImage} alt='news'></Image>
      <div className='font-bold text-4xl mt-[32px]'>
        Seru! Salurkan Donasi Alat Kesenian untuk Anak-anak Desa <br />
        Wagir
      </div>
      <div className='text-lg mt-[32px] mb-[16px]'>By : Nailul Izah</div>
      <div className='text-lg mb-[16px] font-light'>23 Mei 2023</div>
      <p className='text-xl text-justify'>
        Proin et euismod diam. Duis fermentum felis nisi, ut lobortis lectus
        mollis non. Integer pellentesque erat eu diam pharetra auctor id et
        nulla. Nam sodales arcu nec blandit fringilla. Ut vitae ligula vel
        lectus ultrices tempus ut id sem. Etiam egestas lacus scelerisque augue
        congue, sed rutrum sem lobortis. Pellentesque vel enim ante. Quisque
        hendrerit lobortis neque, ac tempor dui elementum vel. Duis Proin et
        euismod diam. Duis fermentum felis nisi, ut lobortis lectus mollis non.
        Integer pellentesque erat eu diam pharetra auctor id et nulla. Nam
        sodales arcu nec blandit fringilla. Ut vitae ligula vel lectus ultrices
        tempus ut id sem. Etiam egestas lacus scelerisque augue congue, sed
        rutrum sem lobortis. Pellentesque vel enim ante. Quisque hendrerit
        lobortis neque, ac tempor dui elementum vel. Duis
      </p>
    </DefaultTemplate>
  );
};

export default page;
