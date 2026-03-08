import React from 'react';
import { Plane, MapPin, Users, BookOpen, Heart, Video, Calendar, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

const Work = () => {
  const travels = [
    {
      country: 'United Kingdom',
      visits: 'Multiple visits',
      impact: 'Established strong community connections, regular spiritual gatherings, and youth engagement programs',
      activities: ['Community Gatherings', 'Spiritual Discourses', 'Youth Programs']
    },
    {
      country: 'Baghdad Sharif, Iraq',
      visits: 'Sacred pilgrimage',
      impact: 'Honored the legacy of Sheikh Abdul Qadir Jilani, strengthened ties with the global Qadriya community',
      activities: ['Ziyarat', 'Spiritual Renewal', 'Community Connection']
    },
    {
      country: 'Iran',
      visits: 'Spiritual exchange',
      impact: 'Interfaith dialogue, connecting with Persian Sufi traditions, building bridges across cultures',
      activities: ['Interfaith Dialogue', 'Cultural Exchange', 'Sufi Gatherings']
    },
    {
      country: 'Qatar',
      visits: 'Gulf outreach',
      impact: 'Spreading teachings among expatriate communities, establishing spiritual circles',
      activities: ['Expatriate Gatherings', 'Spiritual Guidance', 'Community Building']
    },
    {
      country: 'Saudi Arabia',
      visits: 'Hajj & Umrah',
      impact: 'Leading spiritual journeys, providing guidance to pilgrims, deepening connection with Islamic roots',
      activities: ['Pilgrimage Leadership', 'Spiritual Guidance', 'Group Travel']
    }
  ];

  const initiatives = [
    {
      icon: Calendar,
      title: 'Monthly Khatam Pak',
      description: 'Regular gatherings on the 11th of every lunar month featuring Qawwali, spiritual discourses, and communal prayers',
      frequency: 'Monthly'
    },
    {
      icon: Video,
      title: 'Digital Outreach',
      description: 'YouTube channel with over 16,000 subscribers, sharing teachings, Qawwali performances, and spiritual guidance',
      frequency: 'Weekly uploads'
    },
    {
      icon: BookOpen,
      title: 'Preserving Literature',
      description: 'Maintaining and distributing ancestral texts including Shajra Sharif, Diwan-e-Fazli, and other sacred works',
      frequency: 'Ongoing'
    },
    {
      icon: Users,
      title: 'Personal Guidance',
      description: 'One-on-one spiritual mentoring, dream interpretation, and guidance for seekers on their spiritual journey',
      frequency: 'Daily'
    }
  ];

  const upcomingEvents = [
    {
      event: 'Annual Urs Mubarak',
      date: 'September 21, 2026',
      location: 'Kot Sharif, Samundari',
      description: 'Commemorating Syed Barkat Ali Shah with three days of spiritual gatherings, Qawwali, and communal prayers'
    },
    {
      event: 'Monthly Khatam Pak',
      date: '11th of every lunar month',
      location: 'Darbar-e-Aliya',
      description: 'Regular gathering for Qawwali, spiritual discourse, and collective remembrance'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Global Mission & Impact
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              Spreading Ancestral<br/>Wisdom Worldwide
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              Through tireless dedication, international travels, and modern platforms, 
              making the timeless teachings of our Sufi masters accessible to seekers across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Global Travels */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plane className="w-8 h-8 text-[#8B9D83]" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                International Journeys
              </h2>
            </div>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Connecting hearts across continents, honoring sacred sites, and building global Sufi communities
            </p>
          </div>

          <div className="space-y-8">
            {travels.map((travel, index) => (
              <Card key={index} className="border-[#8B9D83] border-opacity-30 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#F5F1E8] to-white pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="w-6 h-6 text-[#2C4A3E]" />
                        <CardTitle className="text-3xl text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {travel.country}
                        </CardTitle>
                      </div>
                      <Badge className="bg-[#8B9D83] text-white border-none">
                        {travel.visits}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                    {travel.impact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {travel.activities.map((activity, idx) => (
                      <span key={idx} className="px-4 py-2 bg-[#F5F1E8] text-[#2C4A3E] rounded-full text-sm font-medium">
                        {activity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Ongoing Initiatives
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Regular programs and activities that keep the ancestral teachings alive and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <Card key={index} className="border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8">
                    <div className="flex gap-6">
                      <div className="w-16 h-16 bg-[#2C4A3E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {initiative.title}
                        </h3>
                        <Badge className="mb-4 bg-[#F5F1E8] text-[#2C4A3E] border-none text-xs">
                          {initiative.frequency}
                        </Badge>
                        <p className="text-[#6B6B6B] leading-relaxed">
                          {initiative.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#2C4A3E] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              A Growing Global Community
            </h2>
            <p className="text-xl text-[#F5F1E8]">
              The reach and impact of our mission continues to expand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl">
              <div className="text-5xl font-bold text-[#C9A961] mb-3">6+</div>
              <div className="text-lg text-[#F5F1E8]">Countries Visited</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl">
              <div className="text-5xl font-bold text-[#C9A961] mb-3">16K+</div>
              <div className="text-lg text-[#F5F1E8]">YouTube Subscribers</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl">
              <div className="text-5xl font-bold text-[#C9A961] mb-3">12</div>
              <div className="text-lg text-[#F5F1E8]">Monthly Gatherings/Year</div>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur rounded-2xl">
              <div className="text-5xl font-bold text-[#C9A961] mb-3">1000+</div>
              <div className="text-lg text-[#F5F1E8]">Lives Touched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Join Our Gatherings
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              All seekers are welcome to participate in our spiritual gatherings and events
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-white border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="flex items-center gap-4 md:col-span-2">
                      <div className="w-14 h-14 bg-[#2C4A3E] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {event.event}
                        </h3>
                        <p className="text-[#8B9D83] font-medium">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#8B9D83] flex-shrink-0" />
                      <span className="text-[#6B6B6B]">{event.location}</span>
                    </div>
                    <div className="md:text-right">
                      <Badge className="bg-[#8B9D83] text-white border-none">Open to All</Badge>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Card className="bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F3] border-none shadow-2xl">
            <CardContent className="pt-12 pb-12 text-center">
              <Heart className="w-12 h-12 text-[#C9A961] mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed mb-6 font-medium" style={{ fontFamily: 'Crimson Text, serif' }}>
                "Every soul I meet, every country I visit, every gathering I lead – 
                these are not just activities, but sacred opportunities to plant seeds 
                of spiritual awakening. This is the legacy my ancestors entrusted to me, 
                and I dedicate every breath to honoring it."
              </blockquote>
              <Separator className="bg-[#8B9D83] w-24 mx-auto mb-4" />
              <p className="text-lg text-[#6B6B6B]">— Syed Ishfaq Mohy Uddin Shah</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Work;
