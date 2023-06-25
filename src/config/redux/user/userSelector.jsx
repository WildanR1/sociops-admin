const { useSelector } = require("react-redux");

export const useUserToken = () => useSelector((state) => state.user.token);

export const useUser = () => useSelector((state) => state.user.user);

export const useDaftarPengguna = () =>
  useSelector((state) => state.user.daftarAkunPengguna);

export const useTypeDaftarAkunPengguna = () =>
  useSelector((state) => state.user.typeDaftarAkunPengguna);
