import { useSelector } from "react-redux";

export const useDetailVolunteer = () =>
  useSelector((state) => state.volunteer.volunteerDetail);
