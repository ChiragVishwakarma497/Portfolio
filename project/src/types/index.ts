export type BodyType = 'hourglass' | 'pear' | 'rectangle' | 'triangle' | 'oval';

export type Occasion = 'casual' | 'formal' | 'business' | 'party' | 'workout' | 'date';

export interface ClothingItem {
  id: string;
  type: 'top' | 'bottom' | 'dress' | 'outerwear' | 'shoes' | 'accessory';
  image: string;
  color: string;
  season: ('spring' | 'summer' | 'fall' | 'winter')[];
  occasions: Occasion[];
  brand?: string;
  purchaseLink?: string;
}

export interface UserProfile {
  id: string;
  bodyType: BodyType;
  preferences: {
    favoriteColors: string[];
    stylePreferences: string[];
    dislikedStyles: string[];
  };
  measurements?: {
    height: number;
    weight: number;
    bust: number;
    waist: number;
    hips: number;
  };
}

export interface Outfit {
  id: string;
  items: ClothingItem[];
  occasion: Occasion;
  season: string;
  rating?: number;
  lastWorn?: Date;
}