import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const LineageComplete = () => {
  // Middle section data (84-127) - Sequential saints
  const middleLineage = [
    { num: 84, name: 'Hazrat Imam Hussain' },
    { num: 85, name: 'Hazrat Imam Zain ul Abidin' },
    { num: 86, name: 'Hazrat Imam Baqir' },
    { num: 87, name: 'Hazrat Imam Ja\'far Sadiq' },
    { num: 88, name: 'Hazrat Imam Kazim' },
    { num: 89, name: 'Hazrat Imam Musa Raza' },
    { num: 90, name: 'Hazrat Imam Taqi' },
    { num: 91, name: 'Hazrat Imam Naqi' },
    { num: 92, name: 'Hazrat Imam Hassan Askari' },
    { num: 93, name: 'Peer Syed Ismail Shah' },
    { num: 94, name: 'Peer Syed Haji Shah' },
    { num: 95, name: 'Peer Syed Ahmad Shah' },
    { num: 96, name: 'Peer Syed Ghani Shah' },
    { num: 97, name: 'Peer Syed Noor Ghazi Shah' },
    { num: 98, name: 'Peer Syed Ahmad Shah' },
    { num: 99, name: 'Peer Syed Ata ul Din Shah' },
    { num: 100, name: 'Peer Syed Hussain Shah' },
    { num: 101, name: 'Peer Syed Noor ul Din Shah' },
    { num: 102, name: 'Peer Syed Mangal Shah' },
    { num: 103, name: 'Peer Syed Mahmood Shah' },
    { num: 104, name: 'Peer Syed Waris Shah' },
    { num: 105, name: 'Peer Syed Ahmad Shah' },
    { num: 106, name: 'Peer Syed Hashir Shah' },
    { num: 107, name: 'Peer Syed Nasim Shah' },
    { num: 108, name: 'Peer Syed Ishaq Shah' },
    { num: 109, name: 'Peer Syed Jamal ul Din Shah' },
    { num: 110, name: 'Peer Syed Fazle Ali Shah' },
    { num: 111, name: 'Peer Syed Jamil Shah' },
    { num: 112, name: 'Peer Syed Mahmood Shah Warfta' },
    { num: 113, name: 'Peer Syed Noorgul Shah' },
    { num: 114, name: 'Peer Syed Shah Mohd Ziyaat' },
    { num: 115, name: 'Peer Syed Sharaf ud Din' },
    { num: 116, name: 'Peer Syed Maulana Shah Wahid' },
    { num: 117, name: 'Peer Syed Jamal Shah' },
    { num: 118, name: 'Peer Syed Halal Shah' },
    { num: 119, name: 'Peer Syed Asghar Ali Shah' },
    { num: 120, name: 'Peer Syed Ghulam Yahya Shah' },
    { num: 121, name: 'Peer Syed Muhammad Shaikh Shah' },
    { num: 122, name: 'Peer Syed Wilayat Ullah Shah' },
    { num: 123, name: 'Peer Syed Hasan Askari Shah' },
    { num: 124, name: 'Peer Syed Takna Shah' },
    { num: 125, name: 'Peer Syed Mahboob Bakht Shah' },
    { num: 126, name: 'Peer Syed Barkat Ali Shah' },
    { num: 127, name: 'Syed Wijhat Khawar Shah' }
  ];

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

      {/* TOP PART - Family Tree with Branching (No circles, no numbers) */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-lg px-8 py-3">
              START - The Blessed Beginning
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] gradient-text-gold" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
              The Prophetic Family Tree
            </h2>
          </div>

          {/* SVG Family Tree - Simplified without circles */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-[#C9A961] p-12 md:p-16 overflow-x-auto">
            <svg viewBox="0 0 800 550" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Hazrat Abdul Muttalib - Top */}
              <text x="400" y="50" textAnchor="middle" fill="#2C4A3E" fontSize="20" fontWeight="bold">
                Hazrat Abdul Muttalib
              </text>

              {/* Branching Lines to Abdullah (left) and Abu Talib (right) */}
              <path d="M 400 65 Q 400 110, 250 150" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 400 65 Q 400 110, 550 150" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Abdullah - Left Branch */}
              <text x="250" y="175" textAnchor="middle" fill="#2C4A3E" fontSize="18" fontWeight="bold">
                Hazrat Abdullah
              </text>

              {/* Hazrat Abu Talib - Right Branch */}
              <text x="550" y="175" textAnchor="middle" fill="#2C4A3E" fontSize="18" fontWeight="bold">
                Hazrat Abu Talib
              </text>

              {/* Converging lines to Prophet Muhammad (PBUH) */}
              <path d="M 250 190 Q 300 230, 380 270" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 550 190 Q 500 230, 420 270" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Prophet Muhammad (PBUH) - Center */}
              <rect x="320" y="280" width="160" height="45" rx="22" fill="#2C4A3E" stroke="#FFD700" strokeWidth="3"/>
              <text x="400" y="310" textAnchor="middle" fill="#FFD700" fontSize="20" fontWeight="bold">
                Prophet Muhammad (ﷺ)
              </text>

              {/* Line down to Bibi Fatima */}
              <path d="M 400 325 L 400 380" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Bibi Fatima - Below Prophet */}
              <text x="450" y="405" textAnchor="middle" fill="#2C4A3E" fontSize="17" fontWeight="bold">
                Hazrat Bibi Fatima
              </text>

              {/* Abdullah branch to Hazrat Ali */}
              <path d="M 250 205 Q 200 280, 270 380" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Ali - Left of Bibi Fatima */}
              <text x="270" y="405" textAnchor="middle" fill="#2C4A3E" fontSize="17" fontWeight="bold">
                Hazrat Ali
              </text>

              {/* Converging lines to Imam Hussain */}
              <path d="M 280 415 Q 330 445, 370 475" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 440 415 Q 410 445, 400 475" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Imam Hussain (AS) - Final convergence */}
              <rect x="295" y="485" width="210" height="45" rx="22" fill="#C9A961" stroke="#2C4A3E" strokeWidth="2"/>
              <text x="400" y="515" textAnchor="middle" fill="white" fontSize="19" fontWeight="bold">
                Hazrat Imam Hussain (AS)
              </text>
            </svg>
          </div>

          {/* Connecting Arrow to Middle Section */}
          <div className="flex justify-center mt-8">
            <ArrowDown className="w-12 h-12 text-[#C9A961] animate-bounce" strokeWidth={3} />
          </div>
        </div>
      </section>

      {/* MIDDLE PART - Sequential List with Corrected Arrows */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Grid Layout with Zigzag Arrows */}
          <div className="bg-white border-4 border-[#C9A961] rounded-2xl p-6 md:p-10 shadow-gold-lg relative">
            {/* Left Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {middleLineage.map((saint, index) => {
                const isLeftColumn = index % 2 === 0;
                const isLastInColumn = index === middleLineage.length - 1 || index === middleLineage.length - 2;
                
                return (
                  <div key={saint.num} className="relative">
                    <div className="flex items-center gap-4 p-4 bg-[#F5F1E8] rounded-lg">
                      <Badge className="bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-base font-bold px-4 py-2 min-w-[60px] text-center">
                        {saint.num}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-[#2C4A3E]">{saint.name}</p>
                      </div>
                    </div>

                    {/* Arrow Logic: Left column goes right, right column goes down then left */}
                    {!isLastInColumn && (
                      <div className="absolute" style={{
                        top: isLeftColumn ? '50%' : '100%',
                        [isLeftColumn ? 'right' : 'left']: isLeftColumn ? '-50px' : '50%',
                        transform: isLeftColumn ? 'translateY(-50%)' : 'translateX(-50%)'
                      }}>
                        {isLeftColumn ? (
                          <ArrowRight className="w-10 h-10 text-[#C9A961]" strokeWidth={3} />
                        ) : (
                          <ArrowDown className="w-10 h-10 text-[#C9A961]" strokeWidth={3} />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connecting Arrow to Bottom Section */}
          <div className="flex justify-center mt-8">
            <ArrowDown className="w-12 h-12 text-[#C9A961] animate-bounce" strokeWidth={3} />
          </div>
        </div>
      </section>

      {/* BOTTOM PART - Final Branching (No circles, no numbers, no END) */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Final Family Tree */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-[#C9A961] p-12 md:p-16 overflow-x-auto">
            <svg viewBox="0 0 800 480" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Peer Syed Faiz Mohy Uddin Shah - Top */}
              <text x="400" y="50" textAnchor="middle" fill="#2C4A3E" fontSize="19" fontWeight="bold">
                Peer Syed Faiz Mohy Uddin Shah
              </text>

              {/* Line down */}
              <path d="M 400 65 L 400 130" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead-bottom)"/>

              {/* Peer Syed Nazar Mohy Uddin Shah */}
              <text x="400" y="160" textAnchor="middle" fill="#2C4A3E" fontSize="18" fontWeight="bold">
                Peer Syed Nazar Mohy Uddin Shah
              </text>

              {/* Branching to two sons */}
              <path d="M 400 175 Q 400 215, 280 250" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 400 175 Q 400 215, 520 250" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Peer Syed Ishfaq Mohy Uddin Shah - Left - CURRENT SAJJADA NASHEEN */}
              <rect x="180" y="260" width="200" height="50" rx="25" fill="#2C4A3E" stroke="#FFD700" strokeWidth="4"/>
              <text x="280" y="285" textAnchor="middle" fill="#FFD700" fontSize="16" fontWeight="bold">
                Peer Syed Ishfaq
              </text>
              <text x="280" y="303" textAnchor="middle" fill="#FFD700" fontSize="16" fontWeight="bold">
                Mohy Uddin Shah
              </text>
              <text x="280" y="340" textAnchor="middle" fill="#C9A961" fontSize="13" fontWeight="bold">
                (Current Sajjada Nasheen)
              </text>

              {/* Line down from Ishfaq to next generation */}
              <path d="M 280 310 L 280 375" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead-bottom)"/>

              {/* Next Generation - Left Son */}
              <rect x="210" y="390" width="140" height="45" rx="8" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
              <text x="280" y="412" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Syed Nawazish
              </text>
              <text x="280" y="428" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
                Mohy Uddin Shah
              </text>

              {/* Syed Wajdan Mohy Uddin Shah - Right Branch */}
              <text x="520" y="285" textAnchor="middle" fill="#2C4A3E" fontSize="17" fontWeight="bold">
                Syed Wajdan
              </text>
              <text x="520" y="305" textAnchor="middle" fill="#2C4A3E" fontSize="17" fontWeight="bold">
                Mohy Uddin Shah
              </text>

              {/* Line down from Wajdan */}
              <path d="M 520 315 L 520 375" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead-bottom)"/>

              {/* Next Generation - Right Son */}
              <rect x="450" y="390" width="140" height="45" rx="8" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
              <text x="520" y="412" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                Syed Faizan
              </text>
              <text x="520" y="428" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
                Mohy Uddin Shah
              </text>

              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead-bottom" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#C9A961" />
                </marker>
              </defs>
            </svg>
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
