import React from 'react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    const message = `Hello Mini Crown Agro, I am interested in buying *${product.name}* priced at ₦${product.price.toLocaleString()}. Is it available?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-green-900 text-xs font-bold px-2 py-1 rounded-md">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-stone-800 mb-2 font-serif">{product.name}</h3>
        <p className="text-sm text-stone-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
          <span className="text-xl font-bold text-green-700">₦{product.price.toLocaleString()}</span>
          <button 
            onClick={handleBuyClick}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;