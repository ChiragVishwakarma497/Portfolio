export type ClothingType = 'top' | 'bottom' | 'dress' | 'outerwear' | 'shoes' | 'accessory';
export type Season = 'spring' | 'summer' | 'fall' | 'winter';
export type Occasion = 'casual' | 'formal' | 'business' | 'party' | 'workout' | 'date';

export interface ClothingItem {
  id: string;
  type: ClothingType;
  image: string;
  color: string;
  seasons: Season[];
  occasions: Occasion[];
  brand?: string;
  purchaseLink?: string;
  sustainabilityScore?: number;
  careInstructions?: string[];
}