const { useSelector } = require("react-redux");

export const useUserToken = () => useSelector((state) => state.user.token);

export const useUser = () => useSelector((state) => state.user.user);

export const usePenggunaVolunteer = () =>
  useSelector((state) => state.user.penggunaVolunteer);

export const usePenggunaVolunteerType = () =>
  useSelector((state) => state.user.type);

export const useDaftarPengguna = () =>
  useSelector((state) => state.user.daftarAkunPengguna);

export const useTypeDaftarAkunPengguna = () =>
  useSelector((state) => state.user.typeDaftarAkunPengguna);

export const usePenggunaFundraising = () =>
  useSelector((state) => state.user.penggunaFundraising);

export const usePenggunaFundraisingType = () =>
  useSelector((state) => state.user.type);
