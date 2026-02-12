import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1920&q=80" 
            alt="Nigerian Agriculture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight"
          >
            Mini Crown <span className="text-yellow-400">Agro</span> Ventures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-gray-200"
          >
            Fresh from the Nigerian Soil to Your Table. We deal in quality production and sales of agricultural foodstuffs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/shop" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Shop Now <ArrowRight size={20} />
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
              WhatsApp Us <Phone size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-stone-600">Fresh, organic, and carefully selected produce from the best farms.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Swift Delivery</h3>
              <p className="text-stone-600">We ensure your foodstuffs reach you fresh and on time, anywhere.</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-xl">
              <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Ordering</h3>
              <p className="text-stone-600">Simply click to chat on WhatsApp and place your order instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 font-serif mb-4">Featured Products</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Top picks from our farm this week. Grab them while stocks last!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-block border-b-2 border-green-700 text-green-700 font-bold pb-1 hover:text-green-900 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action Banner */}
      <section className="bg-green-900 py-16 px-4">
         <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif">Ready to stock up your kitchen?</h2>
            <p className="mb-8 text-green-100 text-lg">Contact Ukoha David Ebuka directly for bulk purchases and partnership deals.</p>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-block bg-yellow-500 text-green-900 font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition shadow-lg transform hover:scale-105">
               Chat on WhatsApp
            </a>
         </div>
      </section>
    </div>
  );
};

export default Home;