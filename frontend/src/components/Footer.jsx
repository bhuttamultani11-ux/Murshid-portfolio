import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Youtube, Facebook, Instagram } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'My Work & Impact', path: '/work' },
    { name: 'Teachings', path: '/teachings' }
  ];

  const resources = [
    { name: 'Sacred Lineage', path: '/lineage' },
    { name: 'Literature', path: '/literature' },
    { name: 'Gallery', path: '/gallery' }
  ];

  const socialLinks = [
    { icon: Youtube, url: 'https://www.youtube.com/@ishfaq477/videos', label: 'YouTube' },
    { icon: Facebook, url: 'https://www.facebook.com/share/16rwS8wJh7/', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/babarkat.bafaiz', label: 'Instagram' }
  ];

  return (
    <footer className="bg-[#2C4A3E] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Syed Ishfaq Mohy Uddin Shah
            </h3>
            <p className="text-[#F5F1E8] leading-relaxed mb-6">
              Current Sajjada Nasheen of Darbar-e-Aliya Qadriya Fazliya, dedicated to spreading 
              the ancestral teachings of Sufism worldwide. Connecting hearts through love, wisdom, 
              and service to humanity.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-1" />
                <span className="text-[#F5F1E8]">
                  Kot Sharif, Samundari, Faisalabad, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#F5F1E8] hover:text-[#C9A961] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#F5F1E8] hover:text-[#C9A961] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-[#8B9D83] opacity-30 my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#F5F1E8] text-center md:text-left">
            <p className="mb-2">© {new Date().getFullYear()} Darbar-e-Aliya Qadriya Fazliya. All rights reserved.</p>
            <p className="text-sm">
              Preserving spiritual heritage and guiding seekers on the path of love.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8B9D83] rounded-full flex items-center justify-center hover:bg-[#C9A961] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
