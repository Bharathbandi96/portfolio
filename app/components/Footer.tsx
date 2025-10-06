import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2025 Bharath Bandi Ramakrishna. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;