import React from 'react';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Literature = () => {
  const books = [
    {
      title: 'Shajra-e-Qadriya Fazliya',
      description: 'The complete spiritual lineage (Shajra Sharif) of the Qadriya Fazliya order, tracing the chain of saints back to the Prophet Muhammad (ﷺ). This sacred document preserves the blessed succession of spiritual masters.',
      cover: 'https://babarkatbafaiz.com/covers/shijra.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/Shijra.pdf',
      category: 'Lineage'
    },
    {
      title: 'Diwan-e-Fazli',
      description: 'A collection of devotional poetry and prose, filled with spiritual insights and expressions of divine love. Each verse is a meditation on the path to God, composed in the tradition of classical Sufi literature.',
      cover: 'https://babarkatbafaiz.com/covers/diwan.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/Diwan.pdf',
      category: 'Poetry'
    },
    {
      title: 'Bahar-e-Tasawwuf',
      description: "Explore the 'Spring of Sufism'. This comprehensive book delves into the fundamental principles and practices of the Sufi path, offering guidance for both beginners and advanced seekers.",
      cover: 'https://babarkatbafaiz.com/covers/bahar.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/bahar.pdf',
      category: 'Teachings'
    },
    {
      title: 'Limat-ul-Ishq',
      description: "A profound exploration of divine love ('Ishq') and the spiritual states experienced by seekers on the path to God. This work illuminates the transformative power of love in spiritual realization.",
      cover: 'https://babarkatbafaiz.com/covers/limatulishq.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/limatulishq.pdf',
      category: 'Mysticism'
    },
    {
      title: 'Janoon-e-Ishq',
      description: "A book on the 'Madness of Love', discussing the intense passion and yearning for the Divine that defines the Sufi journey. It explores the ecstatic states of the lovers of God.",
      cover: 'https://babarkatbafaiz.com/covers/janoon.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/janoon.pdf',
      category: 'Mysticism'
    },
    {
      title: 'Shajra-e-Qadriya (Extended)',
      description: 'An alternate or extended version of the Shajra Sharif, providing further details on the spiritual chain, biographical sketches of masters, and their contributions to the order.',
      cover: 'https://babarkatbafaiz.com/covers/shijra2.png',
      pdfUrl: 'https://babarkatbafaiz.com/books/shijra2.pdf',
      category: 'Lineage'
    }
  ];

  const categories = ['All', 'Lineage', 'Poetry', 'Teachings', 'Mysticism'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Sacred Writings
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              Spiritual Literature
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              Explore profound spiritual writings passed down through generations, preserving the 
              wisdom and teachings of the Qadriya Fazliya order.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-[#8B9D83] border-opacity-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-[#2C4A3E] hover:bg-[#8B9D83] text-white' 
                  : 'border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8]'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-[#8B9D83] border-opacity-30 bg-white group">
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F1E8] relative">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button 
                      asChild
                      size="sm" 
                      className="bg-white text-[#2C4A3E] hover:bg-[#F5F1E8]"
                    >
                      <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View PDF
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge className="bg-[#8B9D83] text-white border-none">
                      {book.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[#1A1A1A]" style={{ fontFamily: 'Crimson Text, serif' }}>
                    {book.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#6B6B6B] leading-relaxed mb-6">
                    {book.description}
                  </CardDescription>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-[#8B9D83] text-[#2C4A3E] hover:bg-[#F5F1E8]"
                  >
                    <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-28 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#2C4A3E] rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
            Preserving Sacred Knowledge
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
            These works represent centuries of spiritual wisdom, carefully preserved and passed down through 
            the blessed lineage of the Qadriya Fazliya order. They serve as guides for seekers on the path 
            to divine realization, offering insights into the mysteries of the heart and the nature of ultimate reality.
          </p>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            We encourage all sincere seekers to study these texts with reverence and an open heart, 
            seeking guidance from qualified spiritual teachers for proper understanding and implementation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Literature;
