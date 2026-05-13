import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const sidebarToggle = useSelector((store) => store.app.isSidebarOpen);
  return (
    <div className="flex w-full">
      {sidebarToggle && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
