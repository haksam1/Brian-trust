import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { MobileHeader } from "./MobileHeader";
import { Footer } from "./Footer";

export const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <MobileHeader />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <Outlet />
        {!isHomePage && <Footer />}
      </div>
    </div>
  );
};