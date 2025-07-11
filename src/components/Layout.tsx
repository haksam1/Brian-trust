import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="flex-1 ml-64 flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};