import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { login } from "@/config/redux/user/userSlice";
import { getUserInfo } from "@/config/redux/user/userThunk";
import { useEffect } from "react";
import { useUserToken } from "@/config/redux/user/userSelector";

const useFormSignInModel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useUserToken();

  useEffect(() => {
    token.length !== 0 ? router.push("/dashboard") : null;
  }, [router, token.length]);

  const schemaSignIn = Yup.object({
    email: Yup.string()
      .min(6, "Minimal 2 karakter")
      .max(25, "Email tidak boleh melebihi 25 karakter")
      .email("Email tidak valid")
      .required("Email tidak boleh kosong"),
    password: Yup.string()
      .min(8, "Minimal 8 karakter")
      .required("Password tidak boleh kosong"),
  });

  const handleLogin = async (adminData) => {
    try {
      const reqSignIn = await axios.post(
        `${process.env.API_URL}/auth/signin`,
        adminData,
      );
      const resSingIn = await reqSignIn.data;
      const accessToken = resSingIn.data.access_token;

      dispatch(login(accessToken));
      dispatch(getUserInfo({ accessToken }));

      router.push("/dashboard");
      toast("Selamat datang admin", { type: "success" });
    } catch (error) {
      toast("email atau password salah", { type: "error" });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schemaSignIn,
    onSubmit: (values) => {
      handleLogin(values);
      formik.resetForm();
    },
  });
  return { formik };
};

export default useFormSignInModel;
