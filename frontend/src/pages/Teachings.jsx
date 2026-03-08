import React from 'react';
import { Book, Heart, Users, Globe, Sparkles, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

const Teachings = () => {
  const teachings = [
    {
      icon: Globe,
      title: 'Creation of the Universe',
      excerpt: "The story of creation is the grand opening to the spiritual narrative of humanity. In Islam, it's a magnificent act of divine will: 'Be, and it is.'",
      content: "The Qur'an speaks of the heavens and earth being joined as one before being separated by divine command. This cosmic event signifies not just physical creation, but the beginning of a spiritual journey for all beings. Every atom in existence testifies to the Creator's majesty, and understanding this origin helps us comprehend our place in the grand design."
    },
    {
      icon: Heart,
      title: 'Purpose of Human Life',
      excerpt: "Why are we here? This timeless question is answered by faiths across the globe with a singular, profound theme: to know and to worship our Creator.",
      content: "In Islam, humanity's purpose is defined as 'Ibadah' (worship and service), making every righteous action an act of devotion. From the simplest smile to the grandest sacrifice, when performed with consciousness of God, life becomes a continuous prayer. The Sufi path illuminates this purpose through direct experience of divine presence in every moment."
    },
    {
      icon: Users,
      title: 'Prophets & Messengers',
      excerpt: "To guide humanity, God sent a chain of prophets and messengers, each carrying the same core message of Divine Oneness (Tawhid).",
      content: "From Adam, Noah, and Abraham to Moses, Jesus, and the final prophet, Muhammad (peace be upon them all), their missions were united in calling people back to their Creator. These noble souls faced immense trials yet remained steadfast, providing us with timeless examples of patience, courage, and unwavering faith. Their lives are lamps that guide us through darkness."
    },
    {
      icon: Book,
      title: 'The Message of Islam',
      excerpt: "Islam, meaning 'submission to God,' perfects the timeless message of all prophets.",
      content: "Its foundation is the declaration that there is no god but God, and Muhammad is His messenger. This establishes a direct relationship with the Creator, free from all intermediaries except the Prophet's guidance. Islam encompasses all aspects of life—personal, social, spiritual—offering a complete way of living in harmony with divine will and natural order."
    },
    {
      icon: Sparkles,
      title: 'The Spiritual Awakening',
      excerpt: "Sufism, or Tasawwuf, is the inner dimension of Islam—the path of purifying the heart to attain a state of spiritual excellence ('Ihsan').",
      content: "It is not a separate sect but the science of transforming the soul. Through practices like Dhikr (remembrance of God), meditation, and service under a spiritual guide, the seeker polishes the heart's mirror until it reflects divine light. This is the path walked by saints, where knowledge transforms into direct experience, and love becomes the driving force of existence."
    },
    {
      icon: Sun,
      title: 'Humanity Beyond Religion',
      excerpt: "When we look at the mystical heart of all religions, the outer differences in ritual and law dissolve into a universal truth.",
      content: "The love spoken of by Rumi is the same unconditional 'Agape' of the Christian mystics. The compassion ('Karuna') taught by Buddha aligns with Islamic mercy ('Rahmah'). The concept of 'Brahman' in Hindu Vedanta echoes the Islamic understanding of 'Wahdat al-Wujud' (Unity of Being). At the core, all paths seek the same divine reality, expressed in different languages and cultures."
    }
  ];

  const principles = [
    { title: 'Tawhid (Divine Unity)', description: 'Recognizing the absolute oneness of God in all aspects of existence' },
    { title: 'Taqwa (God-Consciousness)', description: 'Living with constant awareness of the Divine presence' },
    { title: 'Ihsan (Excellence)', description: 'Worshiping God as if you see Him, for even if you do not see Him, He sees you' },
    { title: 'Sabr (Patience)', description: 'Enduring trials with grace and trusting in divine wisdom' },
    { title: 'Dhikr (Remembrance)', description: 'Constant remembrance of God through heart and tongue' },
    { title: 'Khidmat (Service)', description: 'Selfless service to humanity as worship of the Creator' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Spiritual Wisdom
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              Core Teachings
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              Sufism is a journey of the heart, a path of inner purification and discovery. 
              These principles form the foundation of the teachings at Darbar-e-Aliya Qadriya Fazliya.
            </p>
          </div>
        </div>
      </section>

      {/* Main Teachings */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {teachings.map((teaching, index) => {
              const Icon = teaching.icon;
              return (
                <div key={index} className="group">
                  <Card className="border-[#8B9D83] border-opacity-30 hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                    <CardHeader className="bg-[#F5F1E8] pb-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <Icon className="w-8 h-8 text-[#2C4A3E]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl md:text-4xl text-[#1A1A1A] mb-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                            {teaching.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-[#6B6B6B] leading-relaxed">
                            {teaching.excerpt}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <p className="text-lg text-[#6B6B6B] leading-relaxed">
                        {teaching.content}
                      </p>
                    </CardContent>
                  </Card>
                  {index < teachings.length - 1 && (
                    <div className="flex justify-center my-12">
                      <div className="w-1 h-12 bg-gradient-to-b from-[#8B9D83] to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
              Fundamental Principles
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto">
              The pillars that support the spiritual journey of every seeker on the Sufi path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-white border-[#8B9D83] border-opacity-30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#8B9D83] rounded-full"></div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-[#6B6B6B] leading-relaxed pl-6">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-[#2C4A3E] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="mb-8">
            <div className="text-6xl text-[#C9A961] mb-6">"</div>
            <p className="text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              The path of Sufism is the path of love. It is not about rituals alone, 
              but about transforming the heart into a vessel of divine light.
            </p>
            <div className="text-6xl text-[#C9A961] rotate-180">"</div>
          </div>
          <Separator className="bg-[#8B9D83] my-8 max-w-xs mx-auto" />
          <p className="text-lg text-[#F5F1E8]">
            — From the teachings of Darbar-e-Aliya Qadriya Fazliya
          </p>
        </div>
      </section>
    </div>
  );
};

export default Teachings;
