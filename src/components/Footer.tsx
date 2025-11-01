import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-400 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold">Sardar Hameedi Taleemi Wa Samaji Mission</h2>
          <p className="text-sm text-blue-100">Together we make a difference</p>
        </div>
         <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold"> 196,Chilla Amroha, U.P, 244221</h2>
          <p className="text-sm text-blue-100">+91-9719308437</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.facebook.com/sardarhameedi" aria-label="Facebook" className="hover:text-blue-200 transition-colors">
            <Facebook size={20} />
          </a>
         
          <a href="https://www.youtube.com/@sardarhameedimission5379" aria-label="Youtube" className="hover:text-blue-200 transition-colors">
            <Youtube size={20} />
          </a>
          
        </div>
        
        

        <div className="text-sm text-blue-100 text-center md:text-right">
          © {new Date().getFullYear()} NonProfit Organization. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
