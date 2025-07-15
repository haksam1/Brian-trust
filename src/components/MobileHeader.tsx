import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Header Toggle */}
      <button
        className="fixed top-4 right-4 z-50 lg:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-xl`}></i>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-slate-900 text-white z-50 transform transition-transform duration-300 lg:hidden ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 text-center border-b border-slate-700">
          <img 
            src="/assets/img/badge_prev_ui.png" 
            alt="School Logo" 
            className="w-20 h-20 mx-auto rounded-full mb-4 shadow-lg"
          />
          <h2 className="text-lg font-bold">Brain Trust School</h2>
          <div className="flex justify-center space-x-3 mt-4">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="bi bi-twitter-x text-lg"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="bi bi-facebook text-lg"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="bi bi-instagram text-lg"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              <i className="bi bi-tiktok text-lg"></i>
            </a>
          </div>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-4">
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
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <i className={`bi ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};