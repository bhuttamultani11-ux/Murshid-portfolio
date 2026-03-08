import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Users2, BookHeart, Globe2, ArrowRight, Quote, Calendar } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

const Home = () => {
  const globalReach = [
    { country: 'United Kingdom', purpose: 'Spiritual gatherings and community building', icon: Globe2 },
    { country: 'Baghdad Sharif', purpose: 'Pilgrimage and connecting with Sufi heritage', icon: MapPin },
    { country: 'Iran', purpose: 'Interfaith dialogue and spiritual exchange', icon: Users2 },
    { country: 'Qatar & Saudi Arabia', purpose: 'Spreading teachings and guidance', icon: BookHeart }
  ];

  const coreValues = [
    {
      title: 'Living the Legacy',
      description: 'Carrying forward the profound spiritual wisdom of our blessed ancestors with authenticity and devotion in modern times.'
    },
    {
      title: 'Universal Love',
      description: 'Teaching that divine love transcends all boundaries, uniting humanity in compassion and understanding.'
    },
    {
      title: 'Service to Humanity',
      description: 'Following the Sufi tradition of selfless service, uplifting communities through spiritual guidance and practical support.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section - More Personal */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8] via-[#FDFCF9] to-[#FAF8F3]">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #8B9D83 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <Badge className="mb-6 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-sm px-4 py-2">
                  Current Sajjada Nasheen • Spiritual Guide
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Syed Ishfaq<br/>Mohy Uddin Shah
                </h1>
                
                <div className="flex items-center gap-3 mb-6">
                  <Separator className="w-16 bg-[#C9A961]" />
                  <span className="text-lg text-[#8B9D83] font-medium">The Beacon of Fazl</span>
                </div>

                <p className="text-xl md:text-2xl text-[#2C4A3E] mb-6 font-medium leading-relaxed">
                  Spreading the ancestral teachings of Sufism across continents, 
                  bridging centuries of spiritual wisdom with the hearts of today's seekers.
                </p>

                <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
                  As the current bearer of a blessed lineage that traces back to the Prophet Muhammad (ﷺ) 
                  through Sheikh Abdul Qadir Jilani, I dedicate my life to preserving and sharing the 
                  profound teachings passed down through generations of Sufi masters.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white px-8 py-6 text-lg">
                    <Link to="/about">
                      Discover My Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8] px-8 py-6 text-lg">
                    <Link to="/work">My Global Mission</Link>
                  </Button>
                </div>
              </div>

              {/* Location */}
              <Card className="bg-white/80 backdrop-blur border-[#8B9D83] border-opacity-30 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#2C4A3E]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#8B9D83] font-medium">Based at</div>
                      <div className="text-lg font-semibold text-[#1A1A1A]">Darbar-e-Aliya Qadriya Fazliya</div>
                      <div className="text-sm text-[#6B6B6B]">Kot Sharif, Faisalabad, Pakistan</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#C9A961]/20 to-[#8B9D83]/20 blur-2xl rounded-full"></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 border-4 border-[#C9A961] rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-[#8B9D83] rounded-full opacity-20"></div>
                
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src="https://babarkatbafaiz.com/sajjadanashin.jpeg" 
                    alt="Syed Ishfaq Mohy Uddin Shah"
                    className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover border-4 border-white"
                  />
                  {/* Overlay Quote */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#2C4A3E]/95 backdrop-blur-sm p-4 rounded-xl border border-[#C9A961]/30">
                    <Quote className="w-5 h-5 text-[#C9A961] mb-2" />
                    <p className="text-white text-sm italic leading-relaxed">
                      "Every heart that seeks truth is a shrine. My mission is to awaken that divine light within."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Outreach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#8B9D83] text-white border-none">
              <Plane className="w-4 h-4 mr-2" />
              Global Mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Spreading Ancestral Wisdom Worldwide
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
              Through tireless travels and dedicated service, connecting seekers across continents 
              with the timeless teachings of our Sufi masters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {globalReach.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-[#FAF8F3]">
                  <CardContent className="pt-8">
                    <div className="flex gap-6">
                      <div className="w-16 h-16 bg-[#F5F1E8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Icon className="w-8 h-8 text-[#2C4A3E]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {item.country}
                        </h3>
                        <p className="text-[#6B6B6B] leading-relaxed">
                          {item.purpose}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" className="text-[#2C4A3E] hover:bg-[#F5F1E8] text-lg group">
              <Link to="/work">
                Explore My Global Impact
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              My Guiding Principles
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              The values that shape my approach to preserving and sharing our spiritual heritage
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group">
                <Card className="bg-white border-[#8B9D83] border-opacity-30 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#2C4A3E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {value.title}
                        </h3>
                        <p className="text-lg text-[#6B6B6B] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="py-20 bg-[#2C4A3E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Quote className="w-16 h-16 text-[#C9A961] mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 font-medium" style={{ fontFamily: 'Crimson Text, serif' }}>
            "In today's fast-paced world, the ancient teachings of our Sufi masters shine brighter than ever. 
            My purpose is to make these timeless truths accessible, practical, and transformative for every soul that seeks."
          </blockquote>
          
          <Separator className="bg-[#C9A961] w-24 mx-auto mb-6" />
          
          <p className="text-xl text-[#F5F1E8]">
            — Syed Ishfaq Mohy Uddin Shah
          </p>
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-20 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Moments of Service & Devotion
            </h2>
            <p className="text-lg text-[#6B6B6B]">
              Glimpses from gatherings, travels, and spiritual connections
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 5, 7].map((num) => (
              <div key={num} className="aspect-square overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <img 
                  src={`https://babarkatbafaiz.com/gallery/${num}.jpg`}
                  alt={`Gathering ${num}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8]">
              <Link to="/gallery">View Complete Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#8B9D83] text-white border-none">
                Spiritual Discourse
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                Experience the Spiritual Atmosphere
              </h2>
              <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                Join our monthly Khatam Pak gatherings where Qawwali, devotional poetry, 
                and spiritual discourses create an atmosphere of divine connection. These gatherings 
                are held on the 11th of every lunar month.
              </p>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Through these sessions, I share the practical wisdom of our ancestors, 
                making ancient teachings relevant for modern spiritual seekers.
              </p>
            </div>
            <div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F5F1E8]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iA1T2ms8xcY"
                  title="Khatam Pak Qawwali"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F3]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Card className="bg-white shadow-2xl border-none overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                    Explore the Sufi Path
                  </h2>
                  <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                    Discover the rich spiritual heritage, sacred teachings, and blessed lineage 
                    that has guided countless souls to divine realization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white">
                      <Link to="/lineage">Sacred Lineage</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8]">
                      <Link to="/teachings">Ancestral Teachings</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F5F1E8] p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-[#2C4A3E] mb-2">15+</div>
                    <div className="text-sm text-[#6B6B6B]">Years of Service</div>
                  </div>
                  <div className="bg-[#F5F1E8] p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-[#2C4A3E] mb-2">6</div>
                    <div className="text-sm text-[#6B6B6B]">Countries Visited</div>
                  </div>
                  <div className="bg-[#F5F1E8] p-6 rounded-xl text-center col-span-2">
                    <div className="text-4xl font-bold text-[#2C4A3E] mb-2">1000+</div>
                    <div className="text-sm text-[#6B6B6B]">Lives Touched Globally</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
