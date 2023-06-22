import { useSelector } from "react-redux";

export const useRiwayatProgramFundraising = () =>
  useSelector((state) => state.fundraising.riwayatProgramFundraising);

export const useRiwayatProgramFundraisingType = () =>
  useSelector((state) => state.fundraising.type);
