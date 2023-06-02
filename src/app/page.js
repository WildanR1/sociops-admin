"use client";
import { Button, InputText } from "@/components/atoms";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "@/config/redux/user/userThunk";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(25, "email tidak boleh melebihi 25 karakter")
        .required("email harus diisi"),
      password: Yup.string()
        .min(8, "minimal 8 characters")
        .required("isikan password"),
    }),
    onSubmit: (values) => {
      // handleLogin(values.email, values.password);
      dispatch(signIn({ email: values.email, password: values.password }));
      formik.resetForm();
      router.push("/dashboard");
      toast("Berhasil Login", { type: "success" });
    },
  });
  return (
    <div className='bg-primary-200 min-h-screen flex justify-center items-center'>
      <div className='w-[560px]  bg-primary-500 rounded-[48px] px-16 pb-16 pt-11 flex flex-col items-center'>
        <div className='text-[56px] mb-2 text-white'>Login</div>
        <div className='text-xl mb-8 text-white'>Please enter your detail</div>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-4  '>
            <InputText
              type='text'
              placeholder='email'
              variant='text'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <div className='ml-4 error text-red-700'>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className='mb-10 w-full'>
            <InputText
              type='password'
              placeholder='Password'
              variant='password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className='ml-4 error text-red-700'>
                {formik.errors.password}
              </p>
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

export default SignIn;
