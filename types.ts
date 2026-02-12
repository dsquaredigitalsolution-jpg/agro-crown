export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Tubers' | 'Grains' | 'Oils' | 'Livestock' | 'Spices' | 'Vegetables';
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}