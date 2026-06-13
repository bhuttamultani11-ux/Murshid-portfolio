import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCF9] to-[#F5F1E8] py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C4A3E] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Terms and Conditions
          </h1>
          <p className="text-[#6B6B6B]">Last Updated: December 2025</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#6B6B6B] mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and conditions stated herein. If you do not agree to these terms, please do not use this website.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">2. Use of Website</h2>
              <p className="text-[#6B6B6B] mb-4">
                This website is provided for informational and educational purposes about Darbar-e-Aliya Qadriya Barakatiya and its spiritual teachings. You may use this website for lawful purposes only.
              </p>
              <p className="text-[#6B6B6B] mb-6">
                You agree not to use this website:
              </p>
              <ul className="list-disc pl-6 text-[#6B6B6B] mb-6">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To transmit harmful or malicious content</li>
                <li>To infringe upon intellectual property rights</li>
                <li>To harass, abuse, or harm others</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">3. Intellectual Property</h2>
              <p className="text-[#6B6B6B] mb-6">
                All content on this website, including text, graphics, logos, images, and software, is the property of Darbar-e-Aliya Qadriya Barakatiya and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">4. User Content</h2>
              <p className="text-[#6B6B6B] mb-6">
                If you submit content to this website, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content. You represent that you own or have the right to share such content.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">5. External Links</h2>
              <p className="text-[#6B6B6B] mb-6">
                This website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Access to external links is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-[#6B6B6B] mb-6">
                This website is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free, secure, or uninterrupted.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">7. Limitation of Liability</h2>
              <p className="text-[#6B6B6B] mb-6">
                To the fullest extent permitted by law, Darbar-e-Aliya Qadriya Barakatiya shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">8. Indemnification</h2>
              <p className="text-[#6B6B6B] mb-6">
                You agree to indemnify and hold harmless Darbar-e-Aliya Qadriya Barakatiya from any claims, damages, or expenses arising from your use of the website or violation of these terms.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">9. Changes to Terms</h2>
              <p className="text-[#6B6B6B] mb-6">
                We reserve the right to modify these terms at any time. Your continued use of the website after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">10. Governing Law</h2>
              <p className="text-[#6B6B6B] mb-6">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold text-[#2C4A3E] mb-4">11. Contact Information</h2>
              <p className="text-[#6B6B6B]">
                For questions about these Terms and Conditions, please contact us through our social media channels or visit Darbar-e-Aliya Kot Sharif.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;