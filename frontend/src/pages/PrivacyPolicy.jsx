import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8] py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Privacy Policy
          </h1>
          <p className="text-[#6B6B6B]">Last Updated: December 2025</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">1. Information We Collect</h2>
              <p className="text-[#6B6B6B] mb-4">
                We collect information you provide directly to us when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B6B6B] mb-6">
                <li>Contact information (name, email address)</li>
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">2. How We Use Your Information</h2>
              <p className="text-[#6B6B6B] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#6B6B6B] mb-6">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Send updates about events and gatherings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">3. Cookies and Tracking</h2>
              <p className="text-[#6B6B6B] mb-6">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">4. Third-Party Services</h2>
              <p className="text-[#6B6B6B] mb-4">
                We may use third-party services including:
              </p>
              <ul className="list-disc pl-6 text-[#6B6B6B] mb-6">
                <li>Google Analytics for website analytics</li>
                <li>Google AdSense for advertisements</li>
                <li>Social media platforms (Facebook, Instagram, YouTube, TikTok)</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">5. Data Security</h2>
              <p className="text-[#6B6B6B] mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">6. Your Rights</h2>
              <p className="text-[#6B6B6B] mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-[#6B6B6B] mb-6">
                <li>Access your personal information</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">7. Children's Privacy</h2>
              <p className="text-[#6B6B6B] mb-6">
                Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-[#6B6B6B] mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">9. Contact Us</h2>
              <p className="text-[#6B6B6B] mb-2">
                If you have questions about this Privacy Policy, please contact us through:
              </p>
              <ul className="list-none text-[#6B6B6B]">
                <li>• Social Media: Facebook, Instagram, YouTube</li>
                <li>• Location: Darbar-e-Aliya Kot Sharif</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;