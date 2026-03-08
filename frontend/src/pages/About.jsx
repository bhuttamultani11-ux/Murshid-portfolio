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

      {/* Family */}
      <section className="py-20 md:py-28 bg-[#FDFCF9]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Continuing the Sacred Lineage
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Blessed with two sons who carry forward the family's blessed heritage of spiritual service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {family.map((member, index) => (
              <Card key={index} className="bg-white border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 text-center">
                  <Badge className="mb-4 bg-[#8B9D83] text-white border-none">
                    {member.role}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
