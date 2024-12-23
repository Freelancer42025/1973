import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import { CONTACT_INFO } from '../../data/constants';

interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  image?: string;
  isPopular?: boolean;
  uberEatsLink?: string;
}

export default function MenuItem({ name, price, description, image, isPopular, uberEatsLink }: MenuItemProps) {
  const [showPreview, setShowPreview] = useState(false);

  const handleOrderClick = () => {
    window.open(uberEatsLink || CONTACT_INFO.ubereats, '_blank');
  };

  return (
    <div className="border-b border-gray-800 pb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-white font-semibold flex items-center">
            {name}
            {isPopular && (
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Popular
              </span>
            )}
          </h4>
          {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-red-500 font-bold mb-2">{price}</span>
          <button
            onClick={handleOrderClick}
            className="bg-green-600 text-white text-sm px-4 py-1 rounded-full hover:bg-green-700 transition"
          >
            Order Now
          </button>
        </div>
      </div>
      {image && (
        <>
          <img
            src={image}
            alt={name}
            className="w-20 h-20 object-cover rounded-lg cursor-pointer mt-2"
            onClick={() => setShowPreview(true)}
          />
          {showPreview && (
            <ImagePreview
              image={image}
              alt={name}
              onClose={() => setShowPreview(false)}
            />
          )}
        </>
      )}
    </div>
  );
}