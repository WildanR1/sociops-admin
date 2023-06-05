import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { login } from "@/config/redux/user/userSlice";

const useFormSignInModel = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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
      const req = await axios.post(
        `${process.env.API_URL}/auth/signin`,
        adminData,
      );
      const res = await req.data;
      const accessToken = res.data.access_token;
      dispatch(login(accessToken));

      router.push("/dashboard");
      toast("Berhasil masuk", { type: "success" });
    } catch (error) {
      toast("Username atau password salah", { type: "error" });
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
