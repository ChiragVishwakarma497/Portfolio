import React from 'react';
import type { BodyType } from '../types';

interface BodyTypeSelectorProps {
  selected: BodyType | null;
  onChange: (bodyType: BodyType) => void;
}

export function BodyTypeSelector({ selected, onChange }: BodyTypeSelectorProps) {
  const bodyTypes: { type: BodyType; description: string }[] = [
    {
      type: 'hourglass',
      description: 'Shoulders and hips are about the same width with a defined waist',
    },
    {
      type: 'pear',
      description: 'Hips are wider than shoulders and bust',
    },
    {
      type: 'rectangle',
      description: 'Shoulders, waist, and hips are similar in width',
    },
    {
      type: 'triangle',
      description: 'Shoulders are wider than hips',
    },
    {
      type: 'oval',
      description: 'Fuller midsection compared to shoulders and hips',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bodyTypes.map(({ type, description }) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`p-4 rounded-lg border-2 ${
            selected === type
              ? 'border-indigo-600 bg-indigo-50'
              : 'border-gray-200 hover:border-indigo-200'
          }`}
        >
          <h3 className="text-lg font-semibold capitalize">{type}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </button>
      ))}
    </div>
  );
}