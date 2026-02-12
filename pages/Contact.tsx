import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-900 font-serif mb-4">Get in Touch</h1>
          <p className="text-stone-600">We are always ready to take your orders and inquiries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 font-serif">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Phone & WhatsApp</h3>
                  <p className="text-stone-600">+234 {WHATSAPP_NUMBER.substring(3)}</p>
                  <p className="text-sm text-green-600 mt-1">Available 24/7 for orders</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Email Address</h3>
                  <p className="text-stone-600">orders@minicrownagro.com</p>
                  <p className="text-stone-600">support@minicrownagro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full text-stone-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Office Location</h3>
                  <p className="text-stone-600">Lagos, Nigeria.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="bg-green-900 p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold mb-6 font-serif">Fastest Way to Order?</h2>
            <p className="mb-8 text-green-100">
              Skip the emails and forms. Chat directly with Ukoha David Ebuka on WhatsApp to place your order or negotiate bulk deals.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-500 text-green-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} /> Chat on WhatsApp
            </a>
            <p className="mt-6 text-sm text-green-300">Typical response time: Under 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;