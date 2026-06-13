import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Users, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const About = () => {
  const achievements = [
    {
      icon: Globe,
      title: 'Global Outreach',
      description: 'Travels to UK, Baghdad Sharif, Iran, Qatar, and Saudi Arabia spreading teachings of peace and love'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Strengthening international community of Qadriya Fazliya order through regular discourses and gatherings'
    },
    {
      icon: Heart,
      title: 'Modern Relevance',
      description: 'Connecting traditional Sufi wisdom with contemporary life, making teachings accessible to new generations'
    }
  ];

  const family = [
    {
      name: 'Syed Nawazish Mohyuddin',
      role: 'Elder Son',
      description: 'Being nurtured to carry the family\'s sacred trust into the future'
    },
    {
      name: 'Syed Faizan Mohyuddin',
      role: 'Younger Son',
      description: 'Continuing the blessed lineage of spiritual service'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Biography
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              A Life Dedicated to Service
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              Carrying forward the profound spiritual legacy through generations, 
              Syed Ishfaq Mohy Uddin Shah serves as a beacon of light for seekers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <img 
                  src="https://babarkatbafaiz.com/sajjadanashin.jpeg" 
                  alt="Syed Ishfaq Mohy Uddin Shah"
                  className="rounded-2xl shadow-2xl w-full object-cover mb-6"
                />
                <div className="bg-[#F5F1E8] p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                    Current Role
                  </h3>
                  <p className="text-[#6B6B6B] mb-4">
                    Sajjada Nasheen of Darbar-e-Aliya Qadriya Fazliya
                  </p>
                  <div className="flex items-start gap-2 text-[#6B6B6B]">
                    <MapPin className="w-5 h-5 text-[#8B9D83] mt-1 flex-shrink-0" />
                    <span>Kot Sharif, Samundari, Faisalabad, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                  The Journey of Leadership
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
                    Syed Ishfaq Mohy Uddin Shah, as the present Sajjada Nasheen, carries the profound 
                    spiritual legacy of his forefathers. Son of the esteemed Nazar Mohy Uddin Shah, he was 
                    raised in a deeply spiritual environment that prepared him for his role as a guide and leader.
                  </p>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
                    His teachings emphasize the timeless relevance of Sufi principles in the modern world, 
                    focusing on inner peace, universal love, and selfless service to humanity. Through his 
                    guidance, countless seekers have found their path to spiritual enlightenment and inner 
                    tranquility.
                  </p>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">
                    To honor the monumental legacy of his ancestors and to spread their teachings of peace, 
                    he has tirelessly performed many visits to the UK, Baghdad Sharif, Iran, Qatar, and Saudi 
                    Arabia, connecting with seekers across the globe and strengthening the international 
                    community of the order.
                  </p>
                  <p className="text-lg text-[#6B6B6B] leading-relaxed">
                    Through regular discourses, travels, and online platforms, he makes the wisdom of the 
                    Qadriya Fazliya order accessible to a new generation. His guidance is a beacon of light, 
                    illuminating the path of devotion for all who seek it.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F1E8] p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Mission & Vision
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-[#6B6B6B]">Preserving and propagating the spiritual teachings of the Qadriya Fazliya order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-[#6B6B6B]">Bridging traditional Sufi wisdom with contemporary life challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-[#6B6B6B]">Building a global community united in love, tolerance, and spiritual growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-[#6B6B6B]">Guiding seekers on their journey toward inner peace and divine connection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Spreading Light Worldwide
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Through dedication and tireless efforts, connecting hearts and souls across continents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="bg-white border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-[#F5F1E8] rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-[#2C4A3E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 text-center" style={{ fontFamily: 'Crimson Text, serif' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-center leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sacred Lineage Hierarchy - Father and Ancestors */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#FDFCF9] via-[#F5F1E8] to-[#FAF8F3] relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lineage-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#C9A961" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#8B9D83" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="10" fill="none" stroke="#2C4A3E" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lineage-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white border-none shadow-lg text-base px-6 py-2">
              ☪️ Golden Chain of Succession
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Sacred Lineage
            </h2>
            <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
              The unbroken spiritual chain (Silsila) of the Qadriya order, passed down through generations of blessed saints
            </p>
          </div>

          {/* Lineage Hierarchy - Vertical Flow */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Great Ancestors - Side by Side */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-[#2C4A3E] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                🕌 Blessed Ancestors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Peer Syed Barkat Ali Shah Sahb */}
                <div className="group">
                  <Card className="ornate-corners overflow-hidden shadow-gold-lg hover:shadow-gold transition-all duration-500">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-[#C9A961]/20 to-[#8B9D83]/20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#C9A961] to-[#8B9D83] rounded-full flex items-center justify-center">
                            <span className="text-5xl">🌟</span>
                          </div>
                          <div className="text-sm text-[#8B9D83] font-medium mb-2">Image placeholder</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-sm font-bold text-[#C9A961]">Ancestor</span>
                      </div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-[#2C4A3E] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Peer Syed Barkat Ali Shah
                      </h3>
                      <p className="text-sm text-[#C9A961] font-semibold mb-3">(Rahmatullah Alayh)</p>
                      <p className="text-base text-[#6B6B6B] leading-relaxed">
                        A luminary of the Qadriya Silsila whose spiritual wisdom and divine blessings continue to illuminate seekers' hearts across generations.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Peer Syed Faiz Mohy Uddin Shah Sahb */}
                <div className="group">
                  <Card className="ornate-corners overflow-hidden shadow-gold-lg hover:shadow-gold transition-all duration-500">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-[#8B9D83]/20 to-[#2C4A3E]/20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#8B9D83] to-[#2C4A3E] rounded-full flex items-center justify-center">
                            <span className="text-5xl">🌟</span>
                          </div>
                          <div className="text-sm text-[#8B9D83] font-medium mb-2">Image placeholder</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-sm font-bold text-[#C9A961]">Ancestor</span>
                      </div>
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-[#2C4A3E] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Peer Syed Faiz Mohy Uddin Shah
                      </h3>
                      <p className="text-sm text-[#C9A961] font-semibold mb-3">(Rahmatullah Alayh)</p>
                      <p className="text-base text-[#6B6B6B] leading-relaxed">
                        A revered spiritual guide whose teachings of divine love and enlightenment have guided countless souls on the path of righteousness.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center">
              <div className="w-1 h-16 bg-gradient-to-b from-[#C9A961] to-[#8B9D83]"></div>
            </div>

            {/* Father - Syed Nazar Mohy Uddin Shah Sahb */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2C4A3E] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                👑 Beloved Father & Spiritual Guide
              </h3>
              <div className="max-w-2xl mx-auto">
                <Card className="ornate-corners overflow-hidden shadow-gold-lg hover:shadow-gold transition-all duration-500">
                  <div className="relative">
                    <div className="w-full h-96 bg-gradient-to-br from-[#2C4A3E]/30 via-[#C9A961]/20 to-[#8B9D83]/30 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#C9A961] via-[#8B9D83] to-[#2C4A3E] rounded-full flex items-center justify-center shadow-2xl logo-glow">
                          <span className="text-7xl">👤</span>
                        </div>
                        <div className="text-base text-[#2C4A3E] font-semibold mb-2">Image placeholder</div>
                        <div className="text-sm text-[#8B9D83]">Awaiting blessed photograph</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C9A961] to-[#8B9D83] text-white rounded-full px-6 py-3 shadow-lg">
                      <span className="text-base font-bold">Father & Predecessor</span>
                    </div>
                  </div>
                  <CardContent className="p-8 text-center bg-gradient-to-b from-white to-[#F5F1E8]/50">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#2C4A3E] mb-3 gradient-text-sage" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Syed Nazar Mohy Uddin Shah Sahb
                    </h3>
                    <p className="text-lg text-[#C9A961] font-bold mb-4">(Rahmatullah Alayh)</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mb-6"></div>
                    <p className="text-lg text-[#6B6B6B] leading-relaxed mb-4">
                      The beloved father and spiritual predecessor, whose divine grace, unwavering devotion, and profound knowledge of the Qadriya path illuminated the way for seekers of truth. His blessed presence continues to inspire through his son's spiritual mission.
                    </p>
                    <p className="text-base text-[#2C4A3E] font-medium italic">
                      "The light of guidance passes from father to son, an unbroken chain of divine wisdom"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connection Line */}
            <div className="flex justify-center">
              <div className="w-1 h-16 bg-gradient-to-b from-[#8B9D83] to-[#2C4A3E]"></div>
            </div>

            {/* Current Leader */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2C4A3E] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                ✨ Current Sajjada Nasheen
              </h3>
              <div className="max-w-xl mx-auto">
                <Card className="ornate-corners overflow-hidden shadow-gold-lg bg-gradient-to-br from-white to-[#F5F1E8]">
                  <CardContent className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#C9A961] to-[#8B9D83] rounded-full flex items-center justify-center shadow-xl logo-glow">
                      <span className="text-6xl">🌙</span>
                    </div>
                    <h3 className="text-3xl font-bold text-[#2C4A3E] mb-3 gradient-text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Syed Ishfaq Mohy Uddin Shah
                    </h3>
                    <p className="text-lg text-[#C9A961] font-bold mb-4">Sajjada Nasheen of Darbar-e-Aliya</p>
                    <p className="text-base text-[#6B6B6B] leading-relaxed">
                      Continuing the blessed mission of spreading divine love, wisdom, and the sacred teachings of the Qadriya Silsila across the world.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Family - Continuing the Sacred Lineage (Sons) */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F5F1E8] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #8B9D83 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Continuing the Sacred Lineage
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Blessed with two sons who carry forward the family's blessed heritage of spiritual service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Elder Son - Syed Nawazish */}
            <Card className="bg-white border-2 border-[#8B9D83] border-opacity-30 hover:shadow-2xl transition-all duration-500 overflow-hidden glow-card">
              <CardContent className="pt-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#C9A961] shadow-xl">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/ubi1isct_syed%20nawazish.jpg" 
                      alt="Syed Nawazish Mohyuddin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Badge className="mb-4 bg-[#8B9D83] text-white border-none text-base px-4 py-2">
                  Elder Son
                </Badge>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Syed Nawazish Mohyuddin
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed mb-6">
                  Being nurtured to carry the family's sacred trust into the future, continuing the blessed tradition of spiritual guidance
                </p>
                <Button 
                  asChild 
                  className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white w-full"
                >
                  <a href="https://www.syednawazish.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Younger Son - Syed Faizan */}
            <Card className="bg-white border-2 border-[#8B9D83] border-opacity-30 hover:shadow-2xl transition-all duration-500 overflow-hidden glow-card">
              <CardContent className="pt-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[#C9A961] shadow-xl">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/13ml2frm_syed%20Faizan.jpg" 
                      alt="Syed Faizan Mohyuddin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <Badge className="mb-4 bg-[#8B9D83] text-white border-none text-base px-4 py-2">
                  Younger Son
                </Badge>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Syed Faizan Mohyuddin
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed mb-6">
                  Continuing the blessed lineage of spiritual service, upholding the values and teachings of our ancestors
                </p>
                <Button 
                  asChild 
                  className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white w-full"
                >
                  <a href="https://www.syedfaizan.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C4A3E] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
            Explore the Spiritual Path
          </h2>
          <p className="text-xl text-[#F5F1E8] mb-8 leading-relaxed">
            Discover the rich teachings and heritage of the Qadriya Fazliya order.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#C9A961] hover:bg-[#8B9D83] text-white px-8 py-6 text-lg">
              <Link to="/lineage">
                View Spiritual Lineage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2C4A3E] px-8 py-6 text-lg">
              <Link to="/teachings">Explore Teachings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
