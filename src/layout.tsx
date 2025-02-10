import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="text-red-500 underline">
      Hello world
      <Outlet />
    </div>
  );
}

export default Layout;
