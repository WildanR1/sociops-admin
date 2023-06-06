"use client";

import { useUser } from "@/config/redux/user/userSelector";

const HeaderGreetingText = () => {
  const user = useUser();
  return (
    <div className='flex flex-col items-start'>
      <p className='font-black md:flex hidden'>Halo, {user.Name}</p>
      <p className='md:flex hidden'>Selamat pagi!</p>
    </div>
  );
};

export default HeaderGreetingText;
