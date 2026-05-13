import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_BY_KEYWORD } from "../utils/constants";
import { useEffect } from "react";

const useSearchVideo = (searchedQuery) => {
  const dispatch = useDispatch();

  const getSearchedVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_BY_KEYWORD);
    const json = await data.json();
    console.log("json searchde voidep :", json);
  };

  useEffect(() => {
    getSearchedVideos();
  }, [searchedQuery]);
};

export default useSearchVideo;
