import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Calendar, Heart, Users, Globe, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [daysUntilUrs, setDaysUntilUrs] = useState(null);

  useEffect(() => {
    // Calculate days until Urs (Sep 21, 2026)
    const ursDate = new Date('2026-09-21');
    const today = new Date();
    const diffTime = ursDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntilUrs(diffDays);
  }, []);

  const coreTeachings = [
    {
      title: 'Creation of the Universe',
      description: "The story of creation is the grand opening to the spiritual narrative of humanity. In Islam, it's a magnificent act of divine will: 'Be, and it is.'",
      icon: Globe
    },
    {
      title: 'Purpose of Human Life',
      description: "Why are we here? This timeless question is answered with a singular, profound theme: to know and to worship our Creator through 'Ibadah'.",
      icon: Heart
    },
    {
      title: 'The Spiritual Awakening',
      description: "Sufism, or Tasawwuf, is the inner dimension of Islam—the path of purifying the heart to attain spiritual excellence through Dhikr and devotion.",
      icon: Users
    }
  ];

  const books = [
    {
      title: 'Shajra-e-Qadriya Fazliya',
      description: 'The complete spiritual lineage tracing back to Prophet Muhammad (ﷺ)',
      cover: 'https://babarkatbafaiz.com/covers/shijra.png'
    },
    {
      title: 'Diwan-e-Fazli',
      description: 'Devotional poetry filled with spiritual insights and divine love',
      cover: 'https://babarkatbafaiz.com/covers/diwan.png'
    },
    {
      title: 'Bahar-e-Tasawwuf',
      description: 'Spring of Sufism - fundamental principles and practices',
      cover: 'https://babarkatbafaiz.com/covers/bahar.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-left">
              <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none">
                Sajjada Nasheen - Darbar-e-Aliya Qadriya Fazliya
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Syed Ishfaq Mohy Uddin Shah
              </h1>
              <div className="text-xl md:text-2xl text-[#2C4A3E] mb-4 font-medium" style={{ fontFamily: 'Crimson Text, serif' }}>
                The Beacon of Fazl
              </div>
              <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed max-w-2xl">
                Carrying the torch of love and wisdom through an unbroken chain of Sufi masters. 
                Connecting traditional Sufi wisdom with contemporary life, guiding followers with 
                teachings of love, tolerance, and service to humanity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white px-8 py-6 text-lg">
                  <Link to="/about">Discover His Mission</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8] px-8 py-6 text-lg">
                  <Link to="/teachings">Explore Teachings</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9A961] opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src="https://babarkatbafaiz.com/sajjadanashin.jpeg" 
                  alt="Syed Ishfaq Mohy Uddin Shah"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Banner */}
      {daysUntilUrs > 0 && (
        <section className="bg-[#2C4A3E] text-white py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-[#C9A961]" />
                <div>
                  <h3 className="text-2xl font-bold">Urs Mubarak - Syed Barkat Ali Shah</h3>
                  <p className="text-[#F5F1E8]">September 21, 2026 • Kot Sharif, Samundari</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A961]">{daysUntilUrs}</div>
                <div className="text-sm text-[#F5F1E8]">days remaining</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Teachings */}
      <section className="py-20 md:py-28 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Core Tenets of Sufism
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              A journey of the heart, a path of inner purification and discovery. These principles 
              form the foundation of teachings at Darbar-e-Aliya Qadriya Fazliya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeachings.map((teaching, index) => {
              const Icon = teaching.icon;
              return (
                <Card key={index} className="border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#F5F1E8] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#2C4A3E]" />
                    </div>
                    <CardTitle className="text-2xl text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                      {teaching.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#6B6B6B] text-base leading-relaxed">
                      {teaching.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-[#2C4A3E] hover:bg-[#F5F1E8] text-lg group">
              <Link to="/teachings">
                Explore All Teachings
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
                A Legacy of Spiritual Guidance
              </h2>
              <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
                Syed Ishfaq Mohy Uddin Shah carries the profound spiritual legacy of his forefathers. 
                Son of the esteemed Nazar Mohy Uddin Shah, he was raised in a deeply spiritual environment 
                that prepared him for his role as a guide and leader.
              </p>
              <p className="text-lg text-[#6B6B6B] mb-8 leading-relaxed">
                His teachings emphasize the timeless relevance of Sufi principles in the modern world, 
                focusing on inner peace, universal love, and selfless service to humanity. Through travels 
                to the UK, Baghdad Sharif, Iran, Qatar, and Saudi Arabia, he connects with seekers across 
                the globe, strengthening the international community of the order.
              </p>
              <Button asChild className="bg-[#2C4A3E] hover:bg-[#8B9D83] text-white px-8 py-6 text-lg">
                <Link to="/about">Read Full Biography</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://babarkatbafaiz.com/gallery/1.jpg" alt="Darbar gathering" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://babarkatbafaiz.com/gallery/2.jpg" alt="Spiritual moment" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
              <img src="https://babarkatbafaiz.com/gallery/7.jpg" alt="Gathering" className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8" />
              <img src="https://babarkatbafaiz.com/gallery/5.jpg" alt="Shrine view" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Literature Section */}
      <section className="py-20 md:py-28 bg-[#FDFCF9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Sacred Literature
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Explore profound spiritual writings passed down through generations, preserving the 
              wisdom of the Qadriya Fazliya order.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-[#8B9D83] border-opacity-30 bg-white">
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F1E8]">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-[#6B6B6B]">
                    {book.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-[#2C4A3E] hover:bg-[#F5F1E8] text-lg group">
              <Link to="/literature">
                View All Literature
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              From Our Gatherings
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Experience the spiritual atmosphere through Qawwali performances and discourses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
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
      </section>
    </div>
  );
};

export default Home;
