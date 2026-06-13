import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8] py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h1>
          <p className="text-lg text-[#6B6B6B]">Connect with us for spiritual guidance and information</p>
        </div>

        {/* Location */}
        <Card className="mb-8 border-2 border-[#C9A961]">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#8B9D83] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2C4A3E] mb-2">Visit Us</h2>
                <p className="text-lg text-[#6B6B6B] mb-2">
                  <strong>Darbar-e-Aliya Qadriya Barakatiya</strong>
                </p>
                <p className="text-[#6B6B6B]">
                  Kot Sharif, Pakistan
                </p>
                <p className="text-sm text-[#6B6B6B] mt-4">
                  Open for spiritual gatherings and visitors. Monthly Khatam Pak held on the 11th of every lunar month.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="mb-8 border-2 border-[#8B9D83]">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-[#2C4A3E] mb-6">Connect on Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/16rwS8wJh7/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#1877F2] to-[#0C63D4] rounded-lg hover:shadow-lg transition-all group">
                <Facebook className="w-8 h-8 text-white" />
                <div className="text-white">
                  <p className="font-semibold">Facebook</p>
                  <p className="text-sm opacity-90">Follow our page</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/babarkat.bafaiz" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#E4405F] to-[#FCAF45] rounded-lg hover:shadow-lg transition-all group">
                <Instagram className="w-8 h-8 text-white" />
                <div className="text-white">
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm opacity-90">@babarkat.bafaiz</p>
                </div>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@ishfaq477/videos" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#FF0000] to-[#CC0000] rounded-lg hover:shadow-lg transition-all group">
                <Youtube className="w-8 h-8 text-white" />
                <div className="text-white">
                  <p className="font-semibold">YouTube</p>
                  <p className="text-sm opacity-90">Watch teachings</p>
                </div>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@babarkat.bafaiz" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#000000] to-[#2C2C2C] rounded-lg hover:shadow-lg transition-all group">
                <Music2 className="w-8 h-8 text-white" />
                <div className="text-white">
                  <p className="font-semibold">TikTok</p>
                  <p className="text-sm opacity-90">@babarkat.bafaiz</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Events & Gatherings */}
        <Card className="border-2 border-[#C9A961]">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Join Our Gatherings</h2>
            <div className="space-y-4 text-[#6B6B6B]">
              <div>
                <p className="font-semibold text-[#2C4A3E]">Monthly Gathering</p>
                <p>11th of every lunar month at Darbar-e-Aliya Kot Sharif</p>
              </div>
              <div>
                <p className="font-semibold text-[#2C4A3E]">Annual Events</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Urs Mubarak - February 21-22</li>
                  <li>Urs Mubarak - September 21-23</li>
                  <li>Milad Sharif - December 21-22</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;