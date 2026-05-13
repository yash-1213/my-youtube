import { useDispatch } from "react-redux";
import { SIDEBAR_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { toggleSidebar } from "../utils/appSlice";
import Search from "./Search";

const Head = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="flex px-5 py-3 shadow-md justify-between">
      <div className="flex items-center">
        <img className="h-8 cursor-pointer" alt="menu" src={SIDEBAR_ICON} onClick={handleSidebar} />
        <a href="/">
          <img className="h-8 mx-6" alt="youtube-logo" src={YOUTUBE_LOGO} />
        </a>
      </div>
      <div className="text-center w-2/5">
        <Search />
      </div>
      <div className="">
        <img className="h-10" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
