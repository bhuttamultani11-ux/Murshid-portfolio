import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from './ui/button';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the prompt
    const hasDismissed = localStorage.getItem('pwa-install-dismissed');
    
    if (hasDismissed) {
      return;
    }

    // Listen for the beforeinstallprompt event
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after 3 seconds
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-md w-full bg-gradient-to-br from-white to-[#F5F1E8] rounded-2xl shadow-2xl p-8 animate-fadeInUp border-4 border-[#C9A961]">
        {/* Close button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-[#6B6B6B] hover:text-[#2C4A3E] transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#C9A961] to-[#8B9D83] rounded-full flex items-center justify-center shadow-lg">
            <Download className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3E] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Install SAJJADA NASHIN
          </h2>
          <p className="text-base text-[#6B6B6B] mb-6 leading-relaxed">
            Get instant access to spiritual teachings, sacred lineage, and blessed gatherings. Install our app for the best experience.
          </p>

          {/* Benefits */}
          <div className="text-left mb-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-[#2C4A3E]">
              <span className="text-[#C9A961]">✓</span>
              <span>Offline access to teachings</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#2C4A3E]">
              <span className="text-[#C9A961]">✓</span>
              <span>Quick access from home screen</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#2C4A3E]">
              <span className="text-[#C9A961]">✓</span>
              <span>Stay updated with gatherings</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleInstall}
              className="w-full bg-gradient-to-r from-[#C9A961] to-[#8B9D83] hover:from-[#8B9D83] hover:to-[#2C4A3E] text-white font-semibold py-6 text-base shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Install Now
            </Button>
            <button 
              onClick={handleDismiss}
              className="w-full text-sm text-[#6B6B6B] hover:text-[#2C4A3E] py-2 transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
