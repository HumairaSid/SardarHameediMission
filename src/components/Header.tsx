import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Organization Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-lg md:text-xl font-bold leading-tight">
            Sardar Hameedi <br className="block md:hidden" />
            <span className="hidden md:inline">
              Taleemi Wa Samaji Mission
            </span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-blue-200 transition-colors">
            About Us
          </Link>
          <Link to="/mission" className="hover:text-blue-200 transition-colors">
            Mission
          </Link>
        
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-200" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/aboutus" className="block hover:text-blue-200" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/mission" className="block hover:text-blue-200" onClick={toggleMenu}>
            Mission
          </Link>
          <Link to="/gallery" className="block hover:text-blue-200" onClick={toggleMenu}>
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
}
