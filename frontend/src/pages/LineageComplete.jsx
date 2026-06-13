import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const LineageComplete = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C4A3E] via-[#8B9D83] to-[#C9A961] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lineage-hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M40 10 L60 40 L40 70 L20 40 Z" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lineage-hero-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 text-base px-6 py-3">
            ☪️ The Golden Chain (Silsila-e-Aliya)
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shimmer" 
            style={{ fontFamily: 'Playfair Display, serif' }}>
            The Complete Sacred Lineage
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            From Hazrat Abdul Muttalib to the Present Day
            <br />
            <span className="text-[#FFD700] font-semibold">An Unbroken Spiritual Chain</span>
          </p>
        </div>
      </section>

      {/* Main Lineage Content */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Top Name - HAZRAT ABDUL MUTTALIB */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#C9A961] to-[#8B9D83] px-12 py-6 rounded-2xl shadow-gold-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
                HAZRAT ABDUL MUTTALIB
              </h2>
            </div>
          </div>

          {/* Connecting Arrow */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-12 h-12 text-[#C9A961] animate-bounce" strokeWidth={3} />
          </div>

          {/* First Lineage Image (Page 19 - Numbers 81-107) */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-gold-lg overflow-hidden border-4 border-[#C9A961]">
              <img 
                src="https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/txwl2y50_Screenshot%20%282173%29.png"
                alt="Sacred Lineage Part 1 - Numbers 81 to 107"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Connecting Arrow between images */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-10 h-10 text-[#C9A961]" strokeWidth={3} />
          </div>

          {/* Second Lineage Image (Page 20 - Numbers 108-131) */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-gold-lg overflow-hidden border-4 border-[#C9A961]">
              <img 
                src="https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/v6b8ox8j_Screenshot%20%282174%29.png"
                alt="Sacred Lineage Part 2 - Numbers 108 to 131"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Note Section */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/50 backdrop-blur-sm border-2 border-[#C9A961] rounded-xl px-8 py-6">
              <p className="text-lg text-[#2C4A3E] font-semibold mb-2">
                📖 Complete Lineage Documentation
              </p>
              <p className="text-base text-[#6B6B6B]">
                This blessed chain represents the unbroken spiritual succession from Hazrat Abdul Muttalib to the present day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Dua */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#2C4A3E] to-[#8B9D83]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            May Allah Bless This Sacred Chain
          </h3>
          <p className="text-xl leading-relaxed opacity-90">
            We pray for the acceptance of this lineage and ask Allah to shower His blessings upon all the blessed saints in this golden chain.
          </p>
          <p className="text-2xl mt-6 font-arabic">
            اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ
          </p>
        </div>
      </section>
    </div>
  );
};

export default LineageComplete;
