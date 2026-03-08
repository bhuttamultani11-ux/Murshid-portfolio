import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent } from '../components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, url: 'https://babarkatbafaiz.com/gallery/1.jpg', caption: 'Darbar gathering' },
    { id: 2, url: 'https://babarkatbafaiz.com/gallery/2.jpg', caption: 'Spiritual moment' },
    { id: 3, url: 'https://babarkatbafaiz.com/gallery/3.jpg', caption: 'Community event at the shrine' },
    { id: 4, url: 'https://babarkatbafaiz.com/gallery/4.jpg', caption: 'Devotees at the darbar' },
    { id: 5, url: 'https://babarkatbafaiz.com/gallery/5.jpg', caption: 'A view of the shrine' },
    { id: 6, url: 'https://babarkatbafaiz.com/gallery/6.jpg', caption: 'Night vigil at the darbar' },
    { id: 7, url: 'https://babarkatbafaiz.com/gallery/7.jpg', caption: 'Gathering for spiritual discourse' },
    { id: 8, url: 'https://babarkatbafaiz.com/gallery/8.jpg', caption: 'A moment of reflection' },
    { id: 9, url: 'https://babarkatbafaiz.com/gallery/9.jpg', caption: 'Sufi event celebration' },
    { id: 10, url: 'https://babarkatbafaiz.com/gallery/10.jpg', caption: 'Inside the shrine complex' },
    { id: 11, url: 'https://babarkatbafaiz.com/gallery/11.jpg', caption: 'Devotees listening to sermon' },
    { id: 12, url: 'https://babarkatbafaiz.com/gallery/12.jpg', caption: 'Peaceful atmosphere' },
    { id: 13, url: 'https://babarkatbafaiz.com/gallery/13.jpg', caption: 'Architectural detail' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F1E8] to-[#FDFCF9] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <Badge className="mb-4 bg-[#8B9D83] text-white hover:bg-[#2C4A3E] border-none text-lg px-6 py-2">
              Visual Journey
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Crimson Text, serif' }}>
              Gallery
            </h1>
            <p className="text-xl text-[#6B6B6B] max-w-4xl mx-auto leading-relaxed">
              Moments of devotion, gathering, and spiritual connection at Darbar-e-Aliya Qadriya Fazliya.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl bg-transparent border-none p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#C9A961] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-xl font-medium">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
