import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="hidden lg:flex fixed top-0 left-0 w-64 h-full bg-slate-900 text-white z-50 flex-col shadow-xl">
      <div className="p-4 text-center border-b border-slate-700">
        <img 
          src="/assets/img/badge_prev_ui.png" 
          alt="School Logo" 
          className="w-20 h-20 mx-auto rounded-full mb-4 shadow-lg border-4 border-blue-500"
        />
        <h2 className="text-lg font-bold mb-3">Brain Trust School</h2>
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
            <i className="bi bi-twitter-x text-lg"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
            <i className="bi bi-facebook text-lg"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
            <i className="bi bi-instagram text-lg"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
            <i className="bi bi-tiktok text-lg"></i>
          </a>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {[
            { path: "/", icon: "bi-house", label: "Home" },
            { path: "/about", icon: "bi-person", label: "About" },
            { path: "/services", icon: "bi-hdd-stack", label: "Services" },
            { path: "/gallery", icon: "bi-images", label: "Gallery" },
            { path: "/contact", icon: "bi-envelope", label: "Contact" }
          ].map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'hover:bg-slate-800 text-slate-300 hover:text-white hover:transform hover:scale-105'
                }`}
              >
                <i className={`bi ${item.icon} text-lg`}></i>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <div className="text-center text-slate-400 text-sm">
          <p className="mb-1">© 2025 Brain Trust School</p>
          <p>Nansana, Uganda</p>
        </div>
      </div>
    </header>
  );
};