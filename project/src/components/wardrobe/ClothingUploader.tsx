import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import type { ClothingType } from '../../types/wardrobe';

interface ClothingUploaderProps {
  onUpload: (image: string, type: ClothingType) => void;
}

export function ClothingUploader({ onUpload }: ClothingUploaderProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUpload(reader.result as string, 'top');
      };
      reader.readAsDataURL(file);
    }
  }, [onUpload]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-300 transition-colors"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Add to Your Wardrobe</h3>
      <p className="mt-1 text-sm text-gray-500">
        Drag and drop clothing photos or click to upload
      </p>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              onUpload(reader.result as string, 'top');
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );
}