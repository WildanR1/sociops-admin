"use client";

import { Button, InputText } from "@/components/atoms";
import useFormSignInModel from "./FormSignIn.organismModel";

const FormSignIn = () => {
  const useModel = useFormSignInModel();
  return (
    <div className='bg-primary-200 min-h-screen flex justify-center items-center'>
      <div className='w-[560px]  bg-primary-500 rounded-[48px] px-16 pb-16 pt-11 flex flex-col items-center'>
        <div className='text-[56px] mb-2 text-white'>Login</div>
        <div className='text-xl mb-8 text-white'>Please enter your detail</div>
        <form onSubmit={useModel.formik.handleSubmit}>
          <div className='mb-4  '>
            <InputText
              type='text'
              placeholder='email'
              variant='text'
              name='email'
              value={useModel.formik.values.email}
              onChange={useModel.formik.handleChange}
            />
            {useModel.formik.errors.email && useModel.formik.touched.email && (
              <small className='ml-4 error text-red-700'>
                {useModel.formik.errors.email}
              </small>
            )}
          </div>
          <div className='mb-10 w-full'>
            <InputText
              type='password'
              placeholder='Password'
              variant='password'
              name='password'
              value={useModel.formik.values.password}
              onChange={useModel.formik.handleChange}
            />
            {useModel.formik.errors.password &&
              useModel.formik.touched.password && (
                <small className='ml-4 error text-red-700'>
                  {useModel.formik.errors.password}
                </small>
              )}
          </div>
          <div className='w-medium h-[76px]'>
            <Button
              type='submit'
              text='Login'
              variant='primary-800'
              width='full'
              size='large'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignIn;
