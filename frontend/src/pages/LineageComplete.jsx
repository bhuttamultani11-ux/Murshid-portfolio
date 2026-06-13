import React from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const LineageComplete = () => {
  // Middle section data (84-127) - Sequential saints in the silsila
  const middleLineage = [
    { num: 84, name: 'Hazrat Imam Hussain', arabic: 'حضرت امام حسین علیہ السلام' },
    { num: 85, name: 'Hazrat Imam Zain ul Abidin', arabic: 'حضرت امام زین العابدین علیہ السلام' },
    { num: 86, name: 'Hazrat Imam Baqir', arabic: 'حضرت امام باقر علیہ السلام' },
    { num: 87, name: 'Hazrat Imam Ja\'far Sadiq', arabic: 'حضرت امام جعفر صادق علیہ السلام' },
    { num: 88, name: 'Hazrat Imam Kazim', arabic: 'حضرت امام کاظم علیہ السلام' },
    { num: 89, name: 'Hazrat Imam Musa Raza', arabic: 'حضرت امام موسیٰ رضا علیہ السلام' },
    { num: 90, name: 'Hazrat Imam Taqi', arabic: 'حضرت امام تقی علیہ السلام' },
    { num: 91, name: 'Hazrat Imam Naqi', arabic: 'حضرت امام نقی علیہ السلام' },
    { num: 92, name: 'Hazrat Imam Hassan Askari', arabic: 'حضرت امام حسن عسکری علیہ السلام' },
    { num: 93, name: 'Peer Syed Ismail Shah', arabic: 'پیر سید اسماعیل شاہ صاحب' },
    { num: 94, name: 'Peer Syed Haji Shah', arabic: 'پیر سید حاجی شاہ صاحب' },
    { num: 95, name: 'Peer Syed Ahmad Shah', arabic: 'پیر سید احمد شاہ صاحب' },
    { num: 96, name: 'Peer Syed Ghani Shah', arabic: 'پیر سید غنی شاہ صاحب' },
    { num: 97, name: 'Peer Syed Noor Ghazi Shah', arabic: 'پیر سید نور غازی شاہ صاحب' },
    { num: 98, name: 'Peer Syed Ahmad Shah', arabic: 'پیر سید احمد شاہ صاحب' },
    { num: 99, name: 'Peer Syed Ata ul Din Shah', arabic: 'پیر سید عطاء الدین شاہ صاحب' },
    { num: 100, name: 'Peer Syed Hussain Shah', arabic: 'پیر سید حسین شاہ صاحب' },
    { num: 101, name: 'Peer Syed Noor ul Din Shah', arabic: 'پیر سید نور الدین شاہ صاحب' },
    { num: 102, name: 'Peer Syed Mangal Shah', arabic: 'پیر سید منگل شاہ صاحب' },
    { num: 103, name: 'Peer Syed Mahmood Shah', arabic: 'پیر سید محمود شاہ صاحب' },
    { num: 104, name: 'Peer Syed Waris Shah', arabic: 'پیر سید وارث شاہ صاحب' },
    { num: 105, name: 'Peer Syed Ahmad Shah', arabic: 'پیر سید احمد شاہ صاحب' },
    { num: 106, name: 'Peer Syed Hashir Shah', arabic: 'پیر سید ہاشر شاہ صاحب' },
    { num: 107, name: 'Peer Syed Nasim Shah', arabic: 'پیر سید نسیم شاہ صاحب' },
    { num: 108, name: 'Peer Syed Ishaq Shah', arabic: 'پیر سید اسحاق شاہ صاحب' },
    { num: 109, name: 'Peer Syed Jamal ul Din Shah', arabic: 'پیر سید جمال الدین شاہ صاحب' },
    { num: 110, name: 'Peer Syed Fazle Ali Shah', arabic: 'پیر سید فضل علی شاہ صاحب' },
    { num: 111, name: 'Peer Syed Jamil Shah', arabic: 'پیر سید جمیل شاہ صاحب' },
    { num: 112, name: 'Peer Syed Mahmood Shah Warfta', arabic: 'پیر سید محمود شاہ ورفتہ صاحب' },
    { num: 113, name: 'Peer Syed Noorgul Shah', arabic: 'پیر سید نور گل شاہ صاحب' },
    { num: 114, name: 'Peer Syed Shah Mohd Ziyaat', arabic: 'پیر سید شاہ محمد ضیاء ات صاحب' },
    { num: 115, name: 'Peer Syed Sharaf ud Din', arabic: 'پیر سید شرف الدین صاحب' },
    { num: 116, name: 'Peer Syed Maulana Shah Wahid', arabic: 'پیر سید مولانا شاہ وحید صاحب' },
    { num: 117, name: 'Peer Syed Jamal Shah', arabic: 'پیر سید جمال شاہ صاحب' },
    { num: 118, name: 'Peer Syed Halal Shah', arabic: 'پیر سید ہلال شاہ صاحب' },
    { num: 119, name: 'Peer Syed Asghar Ali Shah', arabic: 'پیر سید اصغر علی شاہ صاحب' },
    { num: 120, name: 'Peer Syed Ghulam Yahya Shah', arabic: 'پیر سید غلام یحییٰ شاہ صاحب' },
    { num: 121, name: 'Peer Syed Muhammad Shaikh Shah', arabic: 'پیر سید محمد شیخ شاہ صاحب' },
    { num: 122, name: 'Peer Syed Wilayat Ullah Shah', arabic: 'پیر سید ولایت اللہ شاہ صاحب' },
    { num: 123, name: 'Peer Syed Hasan Askari Shah', arabic: 'پیر سید حسن عسکری شاہ صاحب' },
    { num: 124, name: 'Peer Syed Takna Shah', arabic: 'پیر سید ٹکنہ شاہ صاحب' },
    { num: 125, name: 'Peer Syed Mahboob Bakht Shah', arabic: 'پیر سید محبوب بخت شاہ صاحب' },
    { num: 126, name: 'Peer Syed Barkat Ali Shah', arabic: 'پیر سید برکت علی شاہ صاحب' },
    { num: 127, name: 'Syed Wijhat Khawar Shah', arabic: 'سید وجاہت خاور شاہ صاحب' }
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
            <span className="text-[#FFD700] font-semibold">Numbers 82 to 131: An Unbroken Spiritual Chain</span>
          </p>
        </div>
      </section>

      {/* TOP PART - Family Tree with Branching (82-83) */}
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

          {/* SVG Family Tree */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-[#C9A961] p-12 md:p-16 overflow-x-auto">
            <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Hazrat Abdul Muttalib - Top (82) */}
              <g>
                <circle cx="400" cy="50" r="35" fill="#C9A961" stroke="#2C4A3E" strokeWidth="3"/>
                <text x="400" y="40" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">82</text>
                <text x="400" y="62" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">حضرت</text>
              </g>
              <text x="400" y="105" textAnchor="middle" fill="#2C4A3E" fontSize="18" fontWeight="bold">
                Hazrat Abdul Muttalib
              </text>
              <text x="400" y="125" textAnchor="middle" fill="#6B6B6B" fontSize="14" dir="rtl">
                حضرت عبد المطلب
              </text>

              {/* Branching Lines to Abdullah (left) and Abu Talib (right) */}
              <path d="M 400 85 Q 400 140, 250 180" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 400 85 Q 400 140, 550 180" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Abdullah - Left Branch */}
              <g>
                <circle cx="250" cy="200" r="30" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="250" y="207" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">حضرت</text>
              </g>
              <text x="250" y="250" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Hazrat Abdullah
              </text>
              <text x="250" y="268" textAnchor="middle" fill="#6B6B6B" fontSize="13" dir="rtl">
                حضرت عبد اللہ
              </text>

              {/* Hazrat Abu Talib - Right Branch */}
              <g>
                <circle cx="550" cy="200" r="30" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="550" y="207" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">حضرت</text>
              </g>
              <text x="550" y="250" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Hazrat Abu Talib
              </text>
              <text x="550" y="268" textAnchor="middle" fill="#6B6B6B" fontSize="13" dir="rtl">
                حضرت ابو طالب
              </text>

              {/* Converging lines to Prophet Muhammad (PBUH) */}
              <path d="M 250 230 Q 300 270, 380 310" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 550 230 Q 500 270, 420 310" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Prophet Muhammad (PBUH) - Center (83) */}
              <g>
                <circle cx="400" cy="330" r="40" fill="#2C4A3E" stroke="#FFD700" strokeWidth="4"/>
                <text x="400" y="325" textAnchor="middle" fill="#FFD700" fontSize="22" fontWeight="bold">83</text>
                <text x="400" y="345" textAnchor="middle" fill="#FFD700" fontSize="14" fontWeight="bold">ﷺ</text>
              </g>
              <text x="400" y="390" textAnchor="middle" fill="#2C4A3E" fontSize="20" fontWeight="bold">
                Prophet Muhammad (ﷺ)
              </text>
              <text x="400" y="410" textAnchor="middle" fill="#C9A961" fontSize="16" dir="rtl" fontWeight="bold">
                محمد رسول اللہ
              </text>

              {/* Line down to Bibi Fatima */}
              <path d="M 400 370 L 400 440" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead)"/>

              {/* Hazrat Bibi Fatima - Below Prophet */}
              <g>
                <circle cx="400" cy="460" r="28" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="400" y="467" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">حضرت</text>
              </g>
              <text x="400" y="505" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Hazrat Bibi Fatima
              </text>
              <text x="400" y="523" textAnchor="middle" fill="#6B6B6B" fontSize="13" dir="rtl">
                حضرت فاطمہ الزہرا
              </text>

              {/* Abdullah branch to Hazrat Ali */}
              <path d="M 250 275 Q 200 350, 280 440" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Ali - Left of Bibi Fatima */}
              <g>
                <circle cx="280" cy="460" r="28" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="280" y="467" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">حضرت</text>
              </g>
              <text x="200" y="505" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Hazrat Ali
              </text>
              <text x="200" y="523" textAnchor="middle" fill="#6B6B6B" fontSize="13" dir="rtl">
                حضرت علی المرتضیٰ
              </text>

              {/* Converging lines to Imam Hussain */}
              <path d="M 290 485 Q 330 515, 370 540" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 400 488 L 400 540" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Hazrat Imam Hussain (AS) - Final convergence (84) */}
              <g>
                <circle cx="400" cy="560" r="32" fill="#C9A961" stroke="#2C4A3E" strokeWidth="3"/>
                <text x="400" y="555" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">84</text>
                <text x="400" y="572" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ع</text>
              </g>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#C9A961" />
                </marker>
              </defs>
            </svg>

            {/* Label below tree */}
            <div className="text-center mt-6">
              <div className="inline-block bg-gradient-to-r from-[#2C4A3E] to-[#8B9D83] text-white px-6 py-3 rounded-full">
                <span className="text-lg font-bold">Hazrat Imam Hussain (AS)</span>
                <span className="mx-3">•</span>
                <span className="text-base" dir="rtl">حضرت امام حسین علیہ السلام</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLE PART - Sequential List (84-127) */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#C9A961]"></div>
              <Badge className="bg-white border-2 border-[#C9A961] text-[#2C4A3E] text-base px-6 py-2">
                From so on... ↓
              </Badge>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#C9A961]"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A3E] gradient-text-sage" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
              The Golden Spiritual Chain
            </h2>
            <p className="text-lg text-[#6B6B6B] mt-3">Numbers 84 to 127 - The Blessed Saints</p>
          </div>

          {/* Two Column Grid Layout */}
          <div className="bg-white border-4 border-[#C9A961] rounded-2xl p-6 md:p-10 shadow-gold-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#8B9D83]/30">
              {/* Left Column */}
              <div className="space-y-4 md:pr-6">
                {middleLineage.filter((_, i) => i % 2 === 0).map((saint, index) => (
                  <div key={saint.num} className="flex items-center gap-4 p-3 hover:bg-[#F5F1E8] rounded-lg transition-all group">
                    <Badge className="bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-base font-bold px-4 py-2 min-w-[60px] text-center">
                      {saint.num}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-[#2C4A3E] mb-1">{saint.name}</p>
                      <p className="text-sm text-[#6B6B6B]" dir="rtl">{saint.arabic}</p>
                    </div>
                    {index < Math.ceil(middleLineage.length / 2) - 1 && (
                      <ArrowDown className="w-5 h-5 text-[#C9A961] opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4 md:pl-6 pt-4 md:pt-0">
                {middleLineage.filter((_, i) => i % 2 !== 0).map((saint, index) => (
                  <div key={saint.num} className="flex items-center gap-4 p-3 hover:bg-[#F5F1E8] rounded-lg transition-all group">
                    <Badge className="bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-base font-bold px-4 py-2 min-w-[60px] text-center">
                      {saint.num}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-[#2C4A3E] mb-1">{saint.name}</p>
                      <p className="text-sm text-[#6B6B6B]" dir="rtl">{saint.arabic}</p>
                    </div>
                    {index < Math.floor(middleLineage.length / 2) - 1 && (
                      <ArrowDown className="w-5 h-5 text-[#C9A961] opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM PART - Final Branching (128-131) */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-lg px-8 py-3">
              END - The Present Generation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] gradient-text-gold" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
              The Current Lineage
            </h2>
          </div>

          {/* Final Family Tree */}
          <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-[#C9A961] p-12 md:p-16 overflow-x-auto">
            <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Peer Syed Faiz Mohy Uddin Shah (128) - Top */}
              <g>
                <circle cx="400" cy="60" r="35" fill="#C9A961" stroke="#2C4A3E" strokeWidth="3"/>
                <text x="400" y="50" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">128</text>
                <text x="400" y="72" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">پیر</text>
              </g>
              <text x="400" y="115" textAnchor="middle" fill="#2C4A3E" fontSize="17" fontWeight="bold">
                Peer Syed Faiz Mohy Uddin Shah
              </text>
              <text x="400" y="135" textAnchor="middle" fill="#6B6B6B" fontSize="13" dir="rtl">
                پیر سید فیض محی الدین شاہ صاحب
              </text>

              {/* Line down */}
              <path d="M 400 95 L 400 170" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead2)"/>

              {/* Peer Syed Nazar Mohy Uddin Shah (129) */}
              <g>
                <circle cx="400" cy="190" r="32" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="400" y="182" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">129</text>
                <text x="400" y="202" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">پیر</text>
              </g>
              <text x="400" y="240" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Peer Syed Nazar Mohy Uddin Shah
              </text>
              <text x="400" y="258" textAnchor="middle" fill="#6B6B6B" fontSize="12" dir="rtl">
                پیر سید نظر محی الدین شاہ صاحب
              </text>

              {/* Branching to two sons */}
              <path d="M 400 222 Q 400 265, 280 295" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M 400 222 Q 400 265, 520 295" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round"/>

              {/* Peer Syed Ishfaq Mohy Uddin Shah (130) - Left - CURRENT SAJJADA NASHEEN */}
              <g>
                <circle cx="280" cy="315" r="38" fill="#2C4A3E" stroke="#FFD700" strokeWidth="5"/>
                <text x="280" y="308" textAnchor="middle" fill="#FFD700" fontSize="20" fontWeight="bold">130</text>
                <text x="280" y="328" textAnchor="middle" fill="#FFD700" fontSize="11" fontWeight="bold">پیر</text>
              </g>
              <text x="280" y="375" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Peer Syed Ishfaq Mohy Uddin Shah
              </text>
              <text x="280" y="393" textAnchor="middle" fill="#C9A961" fontSize="13" fontWeight="bold">
                (Current Sajjada Nasheen)
              </text>
              <text x="280" y="410" textAnchor="middle" fill="#6B6B6B" fontSize="12" dir="rtl">
                پیر سید اشفاق محی الدین شاہ صاحب
              </text>

              {/* Line down from 130 to next generation */}
              <path d="M 280 353 L 280 425" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead2)"/>

              {/* Next Generation Box (131) - Sons */}
              <rect x="210" y="440" width="140" height="50" rx="8" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
              <text x="280" y="455" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">131</text>
              <text x="280" y="472" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
                Syed Farukh
              </text>

              {/* Peer Syed Wajdan Mohy Uddin Shah (131) - Right Branch */}
              <g>
                <circle cx="520" cy="315" r="32" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
                <text x="520" y="307" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">131</text>
                <text x="520" y="327" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">سید</text>
              </g>
              <text x="520" y="365" textAnchor="middle" fill="#2C4A3E" fontSize="16" fontWeight="bold">
                Syed Wajdan Mohy Uddin Shah
              </text>
              <text x="520" y="383" textAnchor="middle" fill="#6B6B6B" fontSize="12" dir="rtl">
                سید وجدان محی الدین شاہ صاحب
              </text>

              {/* Line down from 131 right */}
              <path d="M 520 347 L 520 425" stroke="#C9A961" strokeWidth="3" fill="none" strokeLinecap="round" markerEnd="url(#arrowhead2)"/>

              {/* Next Generation Box - Right side */}
              <rect x="450" y="440" width="140" height="50" rx="8" fill="#8B9D83" stroke="#2C4A3E" strokeWidth="2"/>
              <text x="520" y="455" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">131</text>
              <text x="520" y="472" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
                Syed Faizaan
              </text>

              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#C9A961" />
                </marker>
              </defs>
            </svg>

            {/* END Badge */}
            <div className="text-center mt-8">
              <Badge className="bg-gradient-to-r from-[#2C4A3E] to-[#C9A961] text-white text-xl px-10 py-4 shadow-gold-lg">
                ☪️ END - May Allah Preserve This Sacred Lineage ☪️
              </Badge>
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
