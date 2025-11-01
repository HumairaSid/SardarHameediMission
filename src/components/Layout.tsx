import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);

  // Show or hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScroll(true);
      else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto bg-white shadow-sm rounded-lg p-6">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Layout;
