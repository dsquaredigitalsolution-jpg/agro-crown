import { Product, TeamMember } from './types';

export const WHATSAPP_NUMBER = "2347017112627";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Benue Yams (Large Tuber)',
    price: 3500,
    category: 'Tubers',
    image: 'https://images.unsplash.com/photo-1598511796318-7b8256bd2b20?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh, sweet, and large yams directly from Benue farms. Perfect for pounded yam or porridge.'
  },
  {
    id: '2',
    name: 'Red Palm Oil (5 Liters)',
    price: 8000,
    category: 'Oils',
    image: 'https://images.unsplash.com/photo-1627915356230-58837e297892?auto=format&fit=crop&w=800&q=80',
    description: 'Pure, unadulterated red palm oil. Rich in flavor and nutrients, processed hygienically.'
  },
  {
    id: '3',
    name: 'Garri Ijebu (Paint Bucket)',
    price: 4500,
    category: 'Grains',
    image: 'https://images.unsplash.com/photo-1647867384666-4e5a953833d8?auto=format&fit=crop&w=800&q=80',
    description: 'Crunchy and sour Garri Ijebu. Sand-free and perfect for drinking or eba.'
  },
  {
    id: '4',
    name: 'Local Rice (50kg Bag)',
    price: 65000,
    category: 'Grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    description: 'Stone-free, polished Nigerian rice. Cooks perfectly and tastes delicious.'
  },
  {
    id: '5',
    name: 'Live Broiler Chicken',
    price: 12000,
    category: 'Livestock',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    description: 'Healthy, mature broiler chickens raised on organic feed. Heavy and meaty.'
  },
  {
    id: '6',
    name: 'Dried Catfish (Pack)',
    price: 5000,
    category: 'Livestock',
    image: 'https://images.unsplash.com/photo-1517972400938-4e8c14f08e48?auto=format&fit=crop&w=800&q=80',
    description: 'Oven-dried catfish, free from sand and ready to cook. Adds distinct aroma to soups.'
  },
  {
    id: '7',
    name: 'Egusi (Melon Seeds) - 1kg',
    price: 4000,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-peeled melon seeds. Fresh and ready for your delicious Egusi soup.'
  },
  {
    id: '8',
    name: 'Plantain Bunches',
    price: 2500,
    category: 'Tubers',
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh unripe or ripe plantain bunches. Iron-rich and versatile.'
  }
];

export const FOUNDER: TeamMember = {
  name: "Ukoha David Ebuka",
  role: "Founder & CEO",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  bio: "A young, dynamic entrepreneur and hustler with a vision to revolutionize the agricultural sector in Nigeria. David started Mini Crown Agro Ventures to bridge the gap between rural farmers and urban consumers, ensuring quality food for every Nigerian table."
};