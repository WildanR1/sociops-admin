"use client";
import { Button, InputText } from "@/components/atoms";
import React from "react";

const SignIn = () => {
  return (
    <div className='bg-primary-200 min-h-screen flex justify-center items-center'>
      <div className='w-[560px] h-[516px] bg-primary-500 rounded-[48px] px-16 pb-16 pt-11 flex flex-col items-center'>
        <div className='text-[56px] mb-2 text-white'>Login</div>
        <div className='text-xl mb-8 text-white'>Please enter your detail</div>
        <div className='mb-4 w-full'>
          <InputText
            className='w-full'
            type='text'
            placeholder='Username'
            variant='text'
          />
        </div>
        <div className='mb-10 w-full'>
          <InputText
            className='w-full'
            type='password'
            placeholder='Password'
          />
        </div>
        <div className='w-full'>
          <Button
            type='submit'
            text='Login'
            variant='primary-800'
            width='full'
            className='p-6'
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
