import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="p-2 w-full">
      <div className="flex">
        <div>
          <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-full mr-2">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
