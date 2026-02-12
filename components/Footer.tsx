import React from 'react';
import { Leaf, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-yellow-500 h-6 w-6" />
              <h3 className="text-xl font-bold text-white font-serif">Mini Crown Agro</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing premium agricultural products and fresh foodstuffs to Nigerian households. 
              Quality, affordability, and integrity are our watchwords.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#/shop" className="hover:text-yellow-500 transition-colors">Shop Produce</a></li>
              <li><a href="#/about" className="hover:text-yellow-500 transition-colors">About Us</a></li>
              <li><a href="#/contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-500 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-500" />
                <span>+234 {WHATSAPP_NUMBER.substring(3)}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-500" />
                <span>info@minicrownagro.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Mini Crown Agro Ventures. All rights reserved.</p>
          <p className="mt-2 text-stone-500">Built with hustle by Ukoha David Ebuka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;