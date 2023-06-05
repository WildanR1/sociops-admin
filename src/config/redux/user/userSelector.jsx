const { useSelector } = require("react-redux");

export const useUserIsLoginSelector = () =>
  useSelector((state) => state.user.type);
