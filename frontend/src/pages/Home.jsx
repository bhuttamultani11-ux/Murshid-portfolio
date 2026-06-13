import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { MapPin, Plane, BookHeart, Globe2, Users2, ArrowRight, Quote, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentGallerySet, setCurrentGallerySet] = useState(0);
  
  // Gallery images - total 8 images, showing 4 at a time
  const galleryImages = [1, 2, 5, 7, 8, 10, 12, 15];
  const imagesPerSet = 4;
  const totalSets = Math.ceil(galleryImages.length / imagesPerSet);
  
  // Desktop hero images with titles and subtitles (no typing animation)
  const heroImagesDesktop = [
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/r92xfrt7_desktop1%20%281%29.jpg',
      alt: 'At the Sacred Shrine',
      isNameCard: true,
      title: 'Syed Ishfaq Mohy Uddin Shah',
      subtitle: 'Sajjada Nasheen'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/j47owaqw_desktop1%20%282%29.jpg',
      alt: 'Brotherhood in Faith',
      isNameCard: false,
      title: 'UNITY IN FAITH',
      subtitle: 'Connecting hearts across continents through spiritual brotherhood'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/l0679uae_desktop1%20%283%29.jpg',
      alt: 'Spreading the Message',
      isNameCard: false,
      title: 'SPREADING WISDOM',
      subtitle: 'Sharing ancestral Sufi teachings with seekers worldwide'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/yn8aas7m_Murshid%20portfolio%20%281%29.jpg',
      alt: 'Spiritual Celebration',
      isNameCard: false,
      title: 'GUIDANCE AND STARDOM',
      subtitle: 'A spiritual leader enlightening seekers from screen to soul'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/qxcc00a5_desktop1%20%285%29.jpg',
      alt: 'Voice of Wisdom',
      isNameCard: false,
      title: 'VOICE OF TRADITION',
      subtitle: 'Bridging ancient Sufi wisdom with modern understanding'
    }
  ];

  // Mobile/Android hero images with same titles and subtitles
  const heroImagesMobile = [
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/dvuxaclw_android1%20%281%29.jpg',
      alt: 'At the Sacred Shrine',
      isNameCard: true,
      title: 'Syed Ishfaq Mohy Uddin Shah',
      subtitle: 'Sajjada Nasheen'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/7cxq7px6_android1%20%282%29.jpg',
      alt: 'Brotherhood in Faith',
      isNameCard: false,
      title: 'UNITY IN FAITH',
      subtitle: 'Connecting hearts across continents through spiritual brotherhood'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/4n01qt0x_android1%20%283%29.jpg',
      alt: 'Spreading the Message',
      isNameCard: false,
      title: 'SPREADING WISDOM',
      subtitle: 'Sharing ancestral Sufi teachings with seekers worldwide'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/tn0z0k4i_android1%20%284%29.jpg',
      alt: 'Service to Community',
      isNameCard: false,
      title: 'GUIDANCE AND STARDOM',
      subtitle: 'A spiritual leader enlightening seekers from screen to soul'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_qadriya-hub/artifacts/iekyfmyk_android1%20%285%29.jpg',
      alt: 'Voice of Wisdom',
      isNameCard: false,
      title: 'VOICE OF TRADITION',
      subtitle: 'Bridging ancient Sufi wisdom with modern understanding'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5); // Both arrays have 5 images
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  // Gallery auto-rotation effect
  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setCurrentGallerySet((prev) => (prev + 1) % totalSets);
    }, 5000); // Change gallery set every 5 seconds

    return () => clearInterval(galleryInterval);
  }, [totalSets]);

  const globalReach = [
    { country: 'United Kingdom', purpose: 'Spiritual gatherings and community building', icon: Globe2 },
    { country: 'Baghdad Sharif', purpose: 'Pilgrimage and connecting with Sufi heritage', icon: MapPin },
    { country: 'Iran', purpose: 'Interfaith dialogue and spiritual exchange', icon: Users2 },
    { country: 'Qatar & Saudi Arabia', purpose: 'Spreading teachings and guidance', icon: BookHeart }
  ];

  const coreValues = [
    {
      title: 'Living the Sacred Legacy',
      description: 'Carrying forward the profound spiritual wisdom of Hazrat Ghaus-e-Azam Abdul Qadir Jilani (R.A) and our blessed ancestors with authenticity, devotion, and unwavering commitment to the Qadriya path.',
      icon: '🕌',
      verse: '"The best of people are those who bring most benefit to others"'
    },
    {
      title: 'Divine Love & Unity',
      description: 'Teaching that true divine love (Ishq-e-Ilahi) transcends all boundaries, uniting humanity in compassion, brotherhood, and spiritual understanding. The essence of Sufism is to see the Divine in all creation.',
      icon: '💚',
      verse: '"Love is the bridge between you and everything"'
    },
    {
      title: 'Selfless Service to Humanity',
      description: 'Following the Sufi tradition of Khidmat (selfless service), uplifting communities through spiritual guidance, practical support, and unconditional love for all of Allah\'s creation.',
      icon: '🤲',
      verse: '"The hands that serve are holier than lips that pray"'
    },
    {
      title: 'Spiritual Purification (Tazkiyah)',
      description: 'Guiding seekers on the path of self-purification through Dhikr (remembrance of Allah), meditation, and spiritual practices that cleanse the heart and illuminate the soul with divine light.',
      icon: '✨',
      verse: '"Cleanse your heart, for it is the mirror of the Divine"'
    },
    {
      title: 'Knowledge & Wisdom (Ilm wa Hikmat)',
      description: 'Preserving and sharing the sacred knowledge of Islamic teachings, Quranic wisdom, and the spiritual sciences passed down through the golden chain of Qadriya Silsila for over 900 years.',
      icon: '📿',
      verse: '"Knowledge is light, and ignorance is darkness"'
    },
    {
      title: 'Universal Peace & Harmony',
      description: 'Spreading the message of Sulh-e-Kul (universal peace), promoting interfaith dialogue, and building bridges of understanding between all communities while upholding the noble teachings of Islam.',
      icon: '☪️',
      verse: '"Peace begins with a smile and resides in the heart"'
    }
  ];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Enhanced Hero Section - Professional, Animated, Mobile Optimized */}
      <section className="relative h-screen overflow-hidden">
        {/* Floating Particles - Lightweight performance */}
        <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>

        {/* Islamic Geometric Pattern Overlay - Subtle, rotating */}
        <div className="absolute inset-0 z-10 pointer-events-none islamic-pattern-overlay opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L75 25 L50 50 L25 25 Z" fill="none" stroke="rgba(201, 169, 97, 0.3)" strokeWidth="0.5"/>
                <circle cx="50" cy="25" r="3" fill="rgba(201, 169, 97, 0.2)"/>
                <path d="M50 50 L50 0 M25 25 L75 25" stroke="rgba(139, 157, 131, 0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        {/* Desktop Images - Hidden on Mobile - WITH KEN BURNS EFFECT */}
        <div className="absolute inset-0 hidden md:block">
          {heroImagesDesktop.map((image, index) => (
            <div
              key={`desktop-${index}`}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover object-[center_20%] ken-burns-effect"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Animated gradient overlay with flow effect */}
              <div className="absolute inset-0 animated-gradient-overlay"></div>
            </div>
          ))}
        </div>

        {/* Mobile Images - Hidden on Desktop */}
        <div className="absolute inset-0 block md:hidden">
          {heroImagesMobile.map((image, index) => (
            <div
              key={`mobile-${index}`}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover object-[center_20%]"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Elegant gradient overlay - centered vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Content - Title and subtitle positioned lower, avoiding faces */}
        <div className="relative h-full flex items-end justify-center pb-40 sm:pb-40 md:pb-36 lg:pb-40 z-10">
          <div className="max-w-6xl mx-auto px-4 md:px-12 text-center">
            {/* Static Title and Subtitle on ONE LINE - Playfair Display font */}
            <div>
              {heroImagesDesktop[currentImage].isNameCard ? (
                /* First slide - Name Card on one line */
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
                  <h1 className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 15px rgba(0,0,0,0.8)',
                      letterSpacing: '0.01em'
                    }}>
                    {heroImagesDesktop[currentImage].title}
                  </h1>
                  <span className="hidden sm:inline text-[#C9A961] text-3xl md:text-5xl font-light">|</span>
                  <p className="text-[#C9A961] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 2px 15px rgba(0,0,0,0.7)'
                    }}>
                    {heroImagesDesktop[currentImage].subtitle}
                  </p>
                </div>
              ) : (
                /* Other slides - Title & Subtitle on ONE LINE */
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap px-2">
                  <h2 className="text-white font-bold leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-wide sm:tracking-widest" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 15px rgba(0,0,0,0.8)',
                      letterSpacing: '0.1em'
                    }}>
                    {heroImagesDesktop[currentImage].title}
                  </h2>
                  <span className="hidden sm:inline text-white/50 text-2xl md:text-4xl font-light">•</span>
                  <p className="text-[#C9A961] text-sm sm:text-base md:text-xl lg:text-2xl font-normal px-4 sm:px-0"
                    style={{ 
                      fontFamily: 'Lora, serif',
                      textShadow: '0 2px 15px rgba(0,0,0,0.7)',
                      fontWeight: 400
                    }}>
                    {heroImagesDesktop[currentImage].subtitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-6 right-6 md:right-8 flex gap-2 z-20">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 w-2 hover:bg-white/70'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section - Right After Hero */}
      <section className="py-16 bg-[#2C4A3E] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                Explore Spiritual Journey
              </h2>
              <p className="text-lg text-[#F5F1E8]">
                Discover the mission, teachings, and global impact
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#C9A961] hover:bg-[#8B9D83] text-white px-8 py-6 text-lg shadow-xl"
              >
                <Link to="/about">
                  Biography
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#2C4A3E] px-8 py-6 text-lg"
              >
                <Link to="/lineage">Sacred Lineage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Preview Section with Quote */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#FDFCF9] via-[#F5F1E8] to-[#FAF8F3] relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9A961] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#8B9D83] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-12">
          {/* Quote Icon */}
          <div className="text-center mb-8">
            <Quote className="w-16 h-16 text-[#C9A961] mx-auto mb-6 opacity-50" />
          </div>

          {/* Biography Text */}
          <div className="text-center mb-10">
            <p className="text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed mb-8 font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Syed Ishfaq Mohy Uddin Shah carries the profound spiritual legacy of his forefathers. 
              Raised in a deeply spiritual environment, he dedicates his life to preserving and sharing 
              the timeless teachings of the Qadriya Fazliya order."
            </p>
            
            <Separator className="bg-[#C9A961] w-24 mx-auto mb-8" />
            
            <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Lora, serif' }}>
              Through his travels to the UK, Baghdad Sharif, Iran, Qatar, and Saudi Arabia, he connects 
              with seekers across the globe, making the wisdom of Sufi masters accessible to a new generation. 
              His teachings emphasize the timeless relevance of Sufi principles—inner peace, universal love, 
              and selfless service to humanity.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#2C4A3E] to-[#8B9D83] hover:from-[#8B9D83] hover:to-[#2C4A3E] text-white px-10 py-7 text-lg shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/about">
                LEARN MORE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Core Values -  Guiding Principles - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-[#F5F1E8] via-[#FDFCF9] to-[#FAF8F3] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B9D83] rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-[#2C4A3E] to-[#8B9D83] text-white border-none shadow-lg text-base px-6 py-2">
              Core Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 gradient-text-gold" style={{ fontFamily: 'Crimson Text, serif' }}>
              Sacred Teachings of the Qadriya Path
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              Six divine principles guiding our spiritual journey, rooted in the wisdom of Hazrat Ghaus-e-Azam (R.A) and the blessed Qadriya Silsila
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="relative overflow-hidden border-2 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    borderImage: 'linear-gradient(135deg, #C9A961, #8B9D83, #2C4A3E) 1',
                    borderImageSlice: 1
                  }}>
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#C9A961] via-[#8B9D83] to-[#2C4A3E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ 
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '2px'
                  }}></div>
                  
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A961]/5 via-[#8B9D83]/5 to-[#2C4A3E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="pt-6 pb-6 md:pt-8 md:pb-8 relative z-10">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#2C4A3E] to-[#8B9D83] rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-2 md:mb-3 group-hover:text-[#2C4A3E] transition-colors" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {value.title}
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-[#6B6B6B] leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                          {value.description}
                        </p>
                        {/* Sacred Verse */}
                        <div className="pt-2 md:pt-3 mt-2 md:mt-3 border-t border-[#C9A961]/30">
                          <p className="text-xs md:text-sm italic text-[#C9A961] font-medium" style={{ fontFamily: 'Lora, serif' }}>
                            {value.verse}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A961] via-[#8B9D83] to-[#2C4A3E]"></div>
                  
                  {/* Bottom accent line with animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2C4A3E] via-[#8B9D83] to-[#C9A961] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Outreach Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-[#FAF8F3] via-white to-[#F5F1E8] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #8B9D83 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-gradient-to-r from-[#8B9D83] to-[#2C4A3E] text-white border-none shadow-lg">
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
                <Card 
                  key={index} 
                  className="relative overflow-hidden border-2 border-[#C9A961] border-opacity-40 hover:border-opacity-100 bg-gradient-to-br from-white via-[#FAF8F3] to-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #FAF8F3 50%, #F5F1E8 100%)'
                  }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C9A961]/20 via-[#8B9D83]/20 to-[#C9A961]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="pt-8 pb-8 relative z-10">
                    <div className="flex gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#8B9D83] to-[#2C4A3E] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#2C4A3E] transition-colors" style={{ fontFamily: 'Crimson Text, serif' }}>
                          {item.country}
                        </h3>
                        <p className="text-[#6B6B6B] leading-relaxed text-base">
                          {item.purpose}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A961] via-[#8B9D83] to-[#C9A961] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="ghost" className="text-[#2C4A3E] hover:bg-[#F5F1E8] text-lg group border-2 border-[#8B9D83] hover:border-[#C9A961] px-8 py-6">
              <Link to="/work">
                Explore Global Impact
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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

      {/* Image Gallery Preview - Dynamic with Animations */}
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

          {/* Dynamic Gallery Grid with Enter/Exit Animations */}
          <div className="relative h-[500px] md:h-[600px] mb-8">
            {[...Array(totalSets)].map((_, setIndex) => {
              const startIdx = setIndex * imagesPerSet;
              const endIdx = Math.min(startIdx + imagesPerSet, galleryImages.length);
              const currentImages = galleryImages.slice(startIdx, endIdx);

              return (
                <div
                  key={setIndex}
                  className={`absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ${
                    setIndex === currentGallerySet
                      ? 'opacity-100 translate-y-0'
                      : setIndex < currentGallerySet
                      ? 'opacity-0 -translate-y-10'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {currentImages.map((num, idx) => (
                    <div
                      key={num}
                      className="aspect-square overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                      style={{
                        animation: setIndex === currentGallerySet ? `fadeInScale 0.8s ease-out ${idx * 0.1}s both` : 'none',
                      }}
                    >
                      <img
                        src={`https://babarkatbafaiz.com/gallery/${num}.jpg`}
                        alt={`Gathering ${num}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Gallery Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(totalSets)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGallerySet(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentGallerySet
                    ? 'bg-[#C9A961] w-8'
                    : 'bg-[#8B9D83]/30 w-2 hover:bg-[#8B9D83]/60'
                }`}
                aria-label={`View gallery set ${index + 1}`}
              />
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
                
                {/* Social Media Icons Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/share/16rwS8wJh7/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#1877F2] to-[#0C63D4] p-4 md:p-8 rounded-xl text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <div className="text-xs md:text-sm text-white font-medium">Facebook</div>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/babarkat.bafaiz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] p-4 md:p-8 rounded-xl text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div className="text-xs md:text-sm text-white font-medium">Instagram</div>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@ishfaq477/videos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#FF0000] to-[#CC0000] p-4 md:p-8 rounded-xl text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <div className="text-xs md:text-sm text-white font-medium">YouTube</div>
                  </a>

                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@babarkat.bafaiz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#000000] to-[#2C2C2C] p-4 md:p-8 rounded-xl text-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <div className="text-xs md:text-sm text-white font-medium">TikTok</div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Home;
