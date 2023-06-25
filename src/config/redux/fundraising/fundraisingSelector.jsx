import { useSelector } from "react-redux";

export const useDetailFundraising = () =>
  useSelector((state) => state.fundraising.fundraisingDetail);

export const useRiwayatProgramFundraising = () =>
  useSelector((state) => state.fundraising.riwayatProgramFundraising);

export const useRiwayatProgramFundraisingType = () =>
  useSelector((state) => state.fundraising.type);
