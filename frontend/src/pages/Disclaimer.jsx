import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8] py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Disclaimer
          </h1>
          <p className="text-[#6B6B6B]">Last Updated: December 2025</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">General Disclaimer</h2>
              <p className="text-[#6B6B6B] mb-6">
                The information contained on this website is for general information and spiritual guidance purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the website or its content.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Spiritual Guidance Disclaimer</h2>
              <p className="text-[#6B6B6B] mb-6">
                The spiritual teachings and guidance provided on this website are based on the traditions of the Qadriya Barakatiya Sufi order. Individual spiritual experiences may vary. The teachings are meant for educational and inspirational purposes and should be understood in the context of Islamic spirituality and Sufi traditions.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">External Links Disclaimer</h2>
              <p className="text-[#6B6B6B] mb-6">
                This website may contain links to external websites including social media platforms (Facebook, Instagram, YouTube, TikTok) that are not provided or maintained by Darbar-e-Aliya Qadriya Barakatiya. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Content Disclaimer</h2>
              <p className="text-[#6B6B6B] mb-6">
                Every effort is made to provide accurate and complete information. However, we do not guarantee the accuracy or completeness of any information on this website. We reserve the right to make additions, deletions, or modifications to the content at any time without prior notice.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Event Information Disclaimer</h2>
              <p className="text-[#6B6B6B] mb-6">
                Information about gatherings, events, and programs is provided for informational purposes. Event dates, times, and locations are subject to change. Please verify event details through our official social media channels before attending.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">No Professional Advice</h2>
              <p className="text-[#6B6B6B] mb-6">
                The content on this website does not constitute professional advice. For specific spiritual guidance, please attend our gatherings or contact us directly through our official channels.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Copyright and Fair Use</h2>
              <p className="text-[#6B6B6B] mb-6">
                All images, text, and content on this website are the property of Darbar-e-Aliya Qadriya Barakatiya unless otherwise stated. Some images may be used under fair use provisions or with appropriate permissions.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Limitation of Liability</h2>
              <p className="text-[#6B6B6B] mb-6">
                In no event shall Darbar-e-Aliya Qadriya Barakatiya be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising from the use of this website or reliance on information obtained from it.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Consent</h2>
              <p className="text-[#6B6B6B] mb-6">
                By using our website, you hereby consent to our disclaimer and agree to its terms.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">Updates</h2>
              <p className="text-[#6B6B6B]">
                This disclaimer may be updated from time to time. We encourage you to periodically review this page for the latest information on our disclaimer practices.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Disclaimer;