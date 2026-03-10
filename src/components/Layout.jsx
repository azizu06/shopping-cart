import NavBar from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-shell relative min-h-screen overflow-x-clip text-slate-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute right-[-7rem] top-48 h-80 w-80 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-fuchsia-500/12 blur-3xl" />
      </div>
      <NavBar />
      <main className="relative z-10 pb-12 pt-28 sm:pt-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
