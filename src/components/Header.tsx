import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-64 h-full bg-slate-900 text-white z-50 flex flex-col">
      <div className="p-4 text-center border-b border-slate-700">
        <img 
          src="/src/assets/img/badge_prev_ui.png" 
          alt="School Logo" 
          className="w-20 h-20 mx-auto rounded-full mb-4 shadow-lg"
        />
        <div className="flex justify-center space-x-2 mb-4">
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <i className="bi bi-house"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <i className="bi bi-person"></i>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <i className="bi bi-hdd-stack"></i>
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <i className="bi bi-images"></i>
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};