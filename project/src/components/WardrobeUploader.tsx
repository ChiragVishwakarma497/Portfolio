import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import type { ClothingItem } from '../types';

interface WardrobeUploaderProps {
  onUpload: (item: Partial<ClothingItem>) => void;
}

export function WardrobeUploader({ onUpload }: WardrobeUploaderProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        onUpload({
          id: crypto.randomUUID(),
          image: reader.result as string,
          type: 'top', // Default, will be modified in next step
        });
      };
      reader.readAsDataURL(file);
    });
  }, [onUpload]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-300 transition-colors"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Upload your clothes</h3>
      <p className="mt-1 text-sm text-gray-500">
        Drag and drop your clothing images here, or click to select files
      </p>
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
              onUpload({
                id: crypto.randomUUID(),
                image: reader.result as string,
                type: 'top', // Default, will be modified in next step
              });
            };
            reader.readAsDataURL(file);
          });
        }}
      />
    </div>
  );
}