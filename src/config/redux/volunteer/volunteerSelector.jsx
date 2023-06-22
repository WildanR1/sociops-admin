import { useSelector } from "react-redux";

export const useDetailVolunteer = () =>
  useSelector((state) => state.volunteer.volunteerDetail);

export const useRiwayatProgramVolunteer = () =>
  useSelector((state) => state.volunteer.riwayatProgramVolunteer);

export const useRiwayatProgramVolunteerType = () =>
  useSelector((state) => state.volunteer.type);
