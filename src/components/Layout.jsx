import NavBar from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-28 pb-6">
        <div className="border mx-auto w-full max-w-7xl px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
