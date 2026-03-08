import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, BookOpen } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const Lineage = () => {
  const silsila = [
    { name: 'Prophet Muhammad (ﷺ)', era: '570-632 CE', role: 'The Seal of Prophets' },
    { name: 'Hazrat Ali (RA)', era: '599-661 CE', role: 'The Gate of Knowledge' },
    { name: 'Imam Hasan al-Basri (RA)', era: '642-728 CE', role: 'Master of Spiritual Knowledge' },
    { name: 'Hazrat Abdul Wahid bin Zaid (RA)', era: '8th Century', role: 'Transmitter of Divine Wisdom' },
    { name: 'Sheikh Abdul Qadir Jilani (RA)', era: '1077-1166 CE', role: 'Founder of Qadriya Order' },
    { name: 'Sayyid Abdul Razzaq Jilani (RA)', era: '12th Century', role: 'Son and Spiritual Successor' },
    { name: 'Chain of Blessed Masters', era: '12th-19th Century', role: 'Preserving the Sacred Knowledge' },
    { name: 'Syed Barkat Ali Shah (RA)', era: '19th-20th Century', role: 'Reviver of the Order' },
    { name: 'Syed Nazar Mohy Uddin Shah (RA)', era: '20th Century', role: 'Spiritual Guide' },
    { name: 'Syed Ishfaq Mohy Uddin Shah', era: 'Present', role: 'Current Sajjada Nasheen' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Spiritual Heritage
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              The Sacred Lineage
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              An unbroken chain (Silsila) of spiritual masters originating from the Prophet Muhammad (ﷺ) 
              through Sheikh Abdul Qadir Jilani (RA), carrying divine wisdom across generations.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Card className="bg-[#F5F1E8] border-[#8B9D83] border-opacity-30">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-6">
                <Star className="w-8 h-8 text-[#C9A961] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                    The Qadriya Fazliya Order
                  </h2>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
                    The spiritual teachings of our order are passed down through an unbroken chain of 
                    authorized masters. This Silsila (spiritual lineage) is not merely a historical record, 
                    but a living transmission of divine light and wisdom.
                  </p>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed">
                    Each master in this blessed chain received spiritual authorization (Ijazah) from their 
                    predecessor, ensuring the purity and authenticity of the teachings. This sacred trust 
                    has been preserved and passed down with utmost care and devotion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lineage Chain */}
      <section className="py-20 md:py-28 bg-[#FDFCF9]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              The Chain of Light
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              From the source of all knowledge to the present day, each link a beacon of guidance.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A961] via-[#8B9D83] to-[#C9A961] transform md:-translate-x-1/2"></div>

            {/* Lineage Items */}
            <div className="space-y-8">
              {silsila.map((saint, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Connector Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-[#C9A961] rounded-full border-4 border-[#FDFCF9] z-10 shadow-lg"></div>

                    {/* Content Card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <Card className={`bg-white border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300 ${index === silsila.length - 1 ? 'border-2 border-[#C9A961]' : ''}`}>
                        <CardContent className="pt-6">
                          <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            {index === silsila.length - 1 && (
                              <Badge className="mb-3 bg-[#C9A961] text-white border-none">
                                Current Guide
                              </Badge>
                            )}
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                              {saint.name}
                            </h3>
                            <p className="text-[#8B9D83] font-medium mb-2">{saint.era}</p>
                            <p className="text-[#6B6B6B]">{saint.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < silsila.length - 1 && (
                    <div className="flex justify-center my-4">
                      <ChevronDown className="w-6 h-6 text-[#8B9D83]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Literature CTA */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-10 h-10 text-[#2C4A3E]" />
                <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Shajra-e-Qadriya Fazliya
                </h2>
              </div>
              <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                For a detailed exploration of the complete spiritual lineage with historical context, 
                biographical information, and spiritual insights into each master's contributions, 
                explore our sacred literature.
              </p>
              <Button asChild size="lg" className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white">
                <Link to="/literature">View Complete Shajra Sharif</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://babarkatbafaiz.com/covers/shijra.png" 
                alt="Shajra Sharif" 
                className="rounded-xl shadow-2xl max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-28 bg-[#2C4A3E] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <div className="text-6xl text-[#C9A961] mb-6">"</div>
            <p className="text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              Whoever seeks this path will find masters who illuminated it before them. 
              The chain of light extends from the Prophet to those who carry his message today.
            </p>
            <div className="text-6xl text-[#C9A961] rotate-180">"</div>
          </div>
          <Separator className="bg-[#8B9D83] my-8 max-w-xs mx-auto" />
          <p className="text-lg text-[#F5F1E8]">
            — The Essence of Spiritual Succession
          </p>
        </div>
      </section>
    </div>
  );
};

export default Lineage;
