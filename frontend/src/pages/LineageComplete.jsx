import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const LineageComplete = () => {
  // Complete Spiritual Chain from Prophet Muhammad (SAW) to Current Leader
  const spiritualChain = [
    { num: 82, name: 'Prophet Muhammad', title: 'Rasool Allah', arabic: 'محمد رسول الله', period: '570-632 CE' },
    { num: 83, name: 'Hazrat Ali & Hazrat Fatima', title: 'Gate of Knowledge & Lady of Heaven', arabic: 'علی و فاطمہ', period: '599-661 CE' },
    
    // The Blessed Imams (84-92)
    { num: 84, name: 'Imam Hassan', title: 'Alayhi As-Salam', arabic: 'حضرت امام حسن عليہ السلام', period: '625-670 CE' },
    { num: 85, name: 'Imam Zain ul Abidin', title: 'Alayhi As-Salam', arabic: 'حضرت امام زین العابدین عليہ السلام', period: '658-713 CE' },
    { num: 86, name: 'Imam Baqir', title: 'Alayhi As-Salam', arabic: 'حضرت امام باقر عليہ السلام', period: '677-733 CE' },
    { num: 87, name: 'Imam Ja\'far Sadiq', title: 'Alayhi As-Salam', arabic: 'حضرت امام جعفر صادق عليہ السلام', period: '702-765 CE' },
    { num: 88, name: 'Imam Kazim', title: 'Alayhi As-Salam', arabic: 'حضرت امام کاظم عليہ السلام', period: '745-799 CE' },
    { num: 89, name: 'Imam Musa Raza', title: 'Alayhi As-Salam', arabic: 'حضرت امام موسیٰ رضا عليہ السلام', period: '765-818 CE' },
    { num: 90, name: 'Imam Taqi', title: 'Alayhi As-Salam', arabic: 'حضرت امام تقی عليہ السلام', period: '810-835 CE' },
    { num: 91, name: 'Imam Naqi', title: 'Alayhi As-Salam', arabic: 'حضرت امام نقی عليہ السلام', period: '827-868 CE' },
    { num: 92, name: 'Imam Hassan Askari', title: 'Alayhi As-Salam', arabic: 'حضرت امام حسن عسكری عليہ السلام', period: '846-874 CE' },
    
    // Qadriya Silsila Saints (93-131)
    { num: 93, name: 'Peer Syed Ismail Shah', title: 'Sahib', arabic: 'پیر سید اسماعیل شاہ صاحب', period: '9th Century' },
    { num: 94, name: 'Peer Syed Haji Shah', title: 'Sahib', arabic: 'پیر سید حاجی شاہ صاحب', period: '9th Century' },
    { num: 95, name: 'Peer Syed Ahmad Shah', title: 'Sahib', arabic: 'پیر سید احمد شاہ صاحب', period: '9th-10th Century' },
    { num: 96, name: 'Peer Syed Ghani Shah', title: 'Sahib', arabic: 'پیر سید غنی شاہ صاحب', period: '10th Century' },
    { num: 97, name: 'Peer Syed Noor Ghazi Shah', title: 'Sahib', arabic: 'پیر سید نور غازی شاہ صاحب', period: '10th Century' },
    { num: 98, name: 'Peer Syed Ahmad Shah', title: 'Sahib', arabic: 'پیر سید احمد شاہ صاحب', period: '10th-11th Century' },
    { num: 99, name: 'Peer Syed Ata ul Din Shah', title: 'Sahib', arabic: 'پیر سید عطاء الدین شاہ صاحب', period: '11th Century' },
    { num: 100, name: 'Peer Syed Hussain Shah', title: 'Sahib', arabic: 'پیر سید حسین شاہ صاحب', period: '11th Century' },
    { num: 101, name: 'Peer Syed Noor ul Din Shah', title: 'Sahib', arabic: 'پیر سید نور الدین شاہ صاحب', period: '11th-12th Century' },
    { num: 102, name: 'Peer Syed Mangal Shah', title: 'Sahib', arabic: 'پیر سید منگل شاہ صاحب', period: '12th Century' },
    { num: 103, name: 'Peer Syed Mahmood Shah', title: 'Sahib', arabic: 'پیر سید محمود شاہ صاحب', period: '12th Century' },
    { num: 104, name: 'Peer Syed Waris Shah', title: 'Sahib', arabic: 'پیر سید وارث شاہ صاحب', period: '12th-13th Century' },
    { num: 105, name: 'Peer Syed Ahmad Shah', title: 'Sahib', arabic: 'پیر سید احمد شاہ صاحب', period: '13th Century' },
    { num: 106, name: 'Peer Syed Hashir Shah', title: 'Sahib', arabic: 'پیر سید ہاشر شاہ صاحب', period: '13th Century' },
    { num: 107, name: 'Peer Syed Nasim Shah', title: 'Sahib', arabic: 'پیر سید نسیم شاہ صاحب', period: '13th-14th Century' },
    { num: 108, name: 'Peer Syed Ishaq Shah', title: 'Sahib', arabic: 'پیر سید اسحاق شاہ صاحب', period: '14th Century' },
    { num: 109, name: 'Peer Syed Jamal ul Din Shah', title: 'Sahib', arabic: 'پیر سید جمال الدین شاہ صاحب', period: '14th Century' },
    { num: 110, name: 'Peer Syed Fazle Ali Shah Haider Naqvi', title: 'Sahib', arabic: 'پیر سید فضل علی شاہ حیدر نقوی صاحب', period: '14th-15th Century' },
    { num: 111, name: 'Peer Syed Jamil Shah', title: 'Sahib', arabic: 'پیر سید جمیل شاہ صاحب', period: '15th Century' },
    { num: 112, name: 'Peer Syed Mahmood Shah Warfta Haider Raza', title: 'Sahib', arabic: 'پیر سید محمود شاہ ورفتہ حیدر رضا صاحب', period: '15th Century' },
    { num: 113, name: 'Peer Syed Noorgul Shah', title: 'Sahib', arabic: 'پیر سید نور گل شاہ صاحب', period: '15th-16th Century' },
    { num: 114, name: 'Peer Syed Shah Mohd Ziyaat', title: 'Sahib', arabic: 'پیر سید شاہ محمد ضیاء ات صاحب', period: '16th Century' },
    { num: 115, name: 'Peer Syed Sharaf ud Din', title: 'Sahib', arabic: 'پیر سید شرف الدین صاحب', period: '16th Century' },
    { num: 116, name: 'Peer Syed Maulana Shah Wahid Hasan Shah', title: 'Sahib', arabic: 'پیر سید مولانا شاہ وحید حسن شاہ صاحب', period: '16th-17th Century' },
    { num: 117, name: 'Peer Syed Jamal Shah', title: 'Sahib', arabic: 'پیر سید جمال شاہ صاحب', period: '17th Century' },
    { num: 118, name: 'Peer Syed Halal Shah', title: 'Sahib', arabic: 'پیر سید ہلال شاہ صاحب', period: '17th Century' },
    { num: 119, name: 'Peer Syed Asghar Ali Shah', title: 'Sahib', arabic: 'پیر سید اصغر علی شاہ صاحب', period: '17th-18th Century' },
    { num: 120, name: 'Peer Syed Ghulam Yahya Shah', title: 'Sahib', arabic: 'پیر سید غلام یحییٰ شاہ صاحب', period: '18th Century' },
    { num: 121, name: 'Peer Syed Muhammad Shaikh Shah', title: 'Sahib', arabic: 'پیر سید محمد شیخ شاہ صاحب', period: '18th Century' },
    { num: 122, name: 'Peer Syed Wilayat Ullah Shah', title: 'Sahib', arabic: 'پیر سید ولایت اللہ شاہ صاحب', period: '18th-19th Century' },
    { num: 123, name: 'Peer Syed Hasan Askari Shah', title: 'Sahib', arabic: 'پیر سید حسن عسکری شاہ صاحب', period: '19th Century' },
    { num: 124, name: 'Peer Syed Takna Shah', title: 'Sahib', arabic: 'پیر سید ٹکنہ شاہ صاحب', period: '19th Century' },
    { num: 125, name: 'Peer Syed Mahboob Bakht Shah', title: 'Sahib', arabic: 'پیر سید محبوب بخت شاہ صاحب', period: '19th Century' },
    { num: 126, name: 'Peer Syed Barkat Ali Shah', title: 'Sahib', arabic: 'پیر سید برکت علی شاہ صاحب', period: '19th-20th Century' },
    { num: 127, name: 'Syed Wijhat Khawar Shah', title: 'Sahib', arabic: 'سید وجاہت خاور شاہ صاحب', period: '20th Century' },
    { num: 128, name: 'Peer Syed Faiz Mohy Uddin Shah', title: 'Sahib', arabic: 'پیر سید فیض محی الدین شاہ صاحب', period: '20th Century' },
    
    // Recent Lineage (129-131)
    { num: 129, name: 'Peer Syed Nazar Mohy Uddin Shah', title: 'Sahib (Father)', arabic: 'پیر سید نظر محی الدین شاہ صاحب', period: '20th Century', special: 'father' },
    { num: 130, name: 'Peer Syed Ishfaq Mohy Uddin Shah', title: 'Sahib (Current Sajjada Nasheen)', arabic: 'پیر سید اشفاق محی الدین شاہ صاحب', period: 'Present', special: 'current' },
    { num: 131, name: 'Next Generation', title: 'Sons: Syed Farukh & Syed Faizaan', arabic: '', period: 'Future Bearers', special: 'sons' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C4A3E] via-[#8B9D83] to-[#C9A961] py-20 md:py-32 overflow-hidden">
        {/* Islamic Pattern Background */}
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
            From Prophet Muhammad (ﷺ) through Hazrat Ali (RA) to the Present Day
            <br />
            <span className="text-[#FFD700] font-semibold">82 to 131: An Unbroken Spiritual Chain of 49 Generations</span>
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Card className="ornate-corners bg-white shadow-gold-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-6">
                <Star className="w-16 h-16 mx-auto mb-4 text-[#C9A961]" />
                <h2 className="text-3xl font-bold text-[#2C4A3E] mb-4 gradient-text-sage" 
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  About This Sacred Chain
                </h2>
              </div>
              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
                This blessed Silsila (spiritual chain) represents an unbroken connection of divine knowledge and spiritual authority passed down through 49 generations, beginning with the Holy Prophet Muhammad (ﷺ) and continuing through his beloved daughter Hazrat Fatima (RA) and son-in-law Hazrat Ali (RA).
              </p>
              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
                Each link in this golden chain represents a spiritual master who received divine knowledge, experienced enlightenment, and passed the sacred trust to their successor. This authentic lineage ensures the purity and authenticity of the Qadriya Barakatiya order's teachings.
              </p>
              <p className="text-lg text-[#C9A961] font-semibold italic text-center">
                "The chain of spiritual succession is like a rope of light connecting earth to heaven"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complete Lineage Chain */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] mb-4 gradient-text-gold" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
              The Complete Spiritual Chain
            </h2>
            <p className="text-lg text-[#6B6B6B]">
              Numbers 82-131: Every blessed link from the Prophet (ﷺ) to the present
            </p>
          </div>

          {/* Lineage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spiritualChain.map((saint, index) => (
              <div key={saint.num} className="relative">
                <Card className={`
                  ornate-corners transition-all duration-300 hover:shadow-gold-lg
                  ${saint.special === 'father' ? 'bg-gradient-to-br from-[#FFD700]/10 to-[#C9A961]/10 border-2 border-[#C9A961]' : ''}
                  ${saint.special === 'current' ? 'bg-gradient-to-br from-[#C9A961]/20 to-[#8B9D83]/20 border-4 border-[#C9A961] shadow-gold-lg' : ''}
                  ${saint.special === 'sons' ? 'bg-gradient-to-br from-[#8B9D83]/10 to-[#2C4A3E]/10 border-2 border-[#8B9D83]' : ''}
                  ${!saint.special && 'bg-white border border-[#8B9D83]/20'}
                `}>
                  <CardContent className="p-6">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white text-lg font-bold px-4 py-2">
                        {saint.num}
                      </Badge>
                      {saint.special === 'current' && (
                        <Badge className="bg-[#2C4A3E] text-white text-sm px-3 py-1">
                          Current Leader
                        </Badge>
                      )}
                      {saint.special === 'father' && (
                        <Badge className="bg-[#8B9D83] text-white text-sm px-3 py-1">
                          Father
                        </Badge>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-[#2C4A3E] mb-2" 
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                      {saint.name}
                    </h3>

                    {/* Title */}
                    <p className="text-sm text-[#C9A961] font-semibold mb-2">
                      {saint.title}
                    </p>

                    {/* Arabic Name */}
                    {saint.arabic && (
                      <p className="text-lg text-[#6B6B6B] mb-3 text-right" dir="rtl" style={{ fontFamily: 'Arial, sans-serif' }}>
                        {saint.arabic}
                      </p>
                    )}

                    {/* Period */}
                    <p className="text-sm text-[#8B9D83] font-medium">
                      {saint.period}
                    </p>

                    {/* Connection Arrow */}
                    {index < spiritualChain.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                        <ChevronDown className="w-6 h-6 text-[#C9A961] bg-white rounded-full shadow-md" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-br from-[#2C4A3E] to-[#8B9D83]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            May Allah Bless This Sacred Chain
          </h3>
          <p className="text-xl leading-relaxed opacity-90">
            We pray for the acceptance of this lineage and ask Allah to shower His blessings upon all the blessed saints in this golden chain, and to grant us the ability to follow their footsteps on the path of truth and righteousness.
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
