import { retrieveDetailVolunteer } from "@/config/redux/volunteer/volunteerThunk";
import { useDetailVolunteer } from "@/config/redux/volunteer/volunteerSelector";
import { useUserToken } from "@/config/redux/user/userSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useDetailVolunteerModel = ({ id }) => {
  const volunteer = useDetailVolunteer();
  const token = useUserToken();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveDetailVolunteer({ id, token }));
  }, [dispatch, id, token]);

  const [src, setSrc] = useState(true);

  return { src, setSrc, volunteer };
};

export default useDetailVolunteerModel;
