import { Outlet } from "react-router-dom";
import Header from "../header/Header";
export default function Layout() {
  return (
    <div className="flex flex-col justify-between h-full px-[10%] py-[5%]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
