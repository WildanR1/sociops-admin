import { useSelector } from "react-redux";

export const useDetailNews = () =>
  useSelector((state) => state.news.newsDetail);
