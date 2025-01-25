import React, { useState } from 'react';
import { Upload, Camera } from 'lucide-react';
import type { BodyType } from '../../types/user';

interface BodyTypeAnalyzerProps {
  onBodyTypeSelect: (bodyType: BodyType) => void;
  onImageUpload: (image: string) => void;
}

export function BodyTypeAnalyzer({ onBodyTypeSelect, onImageUpload }: BodyTypeAnalyzerProps) {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
      onImageUpload(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Upload Your Photo</h3>
        {!image ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Camera className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <p className="text-sm text-gray-600">
              Upload a full-body photo for accurate body type analysis
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(file);
              }}
              className="hidden"
              id="body-photo"
            />
            <label
              htmlFor="body-photo"
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-700"
            >
              Select Photo
            </label>
          </div>
        ) : (
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img src={image} alt="Body type analysis" className="object-cover w-full h-full" />
            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
            >
              <Upload className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}