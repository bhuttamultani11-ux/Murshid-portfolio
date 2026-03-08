import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Biography', path: '/about' },
    { name: 'Global Mission', path: '/work' },
    { name: 'Teachings', path: '/teachings' },
    { name: 'Sacred Lineage', path: '/lineage' },
    { name: 'Literature', path: '/literature' },
    { name: 'Gallery', path: '/gallery' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#8B9D83] border-opacity-20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl font-bold text-[#2C4A3E]" style={{ fontFamily: 'Crimson Text, serif' }}>
              Darbar-e-Aliya
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-[#2C4A3E] text-white'
                    : 'text-[#6B6B6B] hover:bg-[#F5F1E8] hover:text-[#2C4A3E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Darbar e Aliya Button - Prominent */}
            <Button 
              asChild
              className="ml-4 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] hover:from-[#8B9D83] hover:to-[#C9A961] text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://www.babarkatbafaiz.com" target="_blank" rel="noopener noreferrer">
                Darbar e Aliya
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2C4A3E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#8B9D83] border-opacity-20">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-[#2C4A3E] text-white'
                      : 'text-[#6B6B6B] hover:bg-[#F5F1E8] hover:text-[#2C4A3E]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Darbar e Aliya Button - Mobile */}
              <Button 
                asChild
                className="mt-4 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] hover:from-[#8B9D83] hover:to-[#C9A961] text-white font-semibold py-3 shadow-lg w-full"
              >
                <a href="https://www.babarkatbafaiz.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Darbar e Aliya
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
