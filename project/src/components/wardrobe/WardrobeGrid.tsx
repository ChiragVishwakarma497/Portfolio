import React from 'react';
import type { ClothingItem } from '../../types/wardrobe';

interface WardrobeGridProps {
  items: ClothingItem[];
  onItemClick: (item: ClothingItem) => void;
}

export function WardrobeGrid({ items, onItemClick }: WardrobeGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)}
          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
        >
          <img
            src={item.image}
            alt={`${item.type} - ${item.color}`}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white text-sm capitalize">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}