export type BodyType = 'hourglass' | 'pear' | 'rectangle' | 'triangle' | 'oval';
export type StylePreference = 'casual' | 'classic' | 'bohemian' | 'streetwear' | 'minimalist';

export interface UserProfile {
  id: string;
  bodyType: BodyType;
  bodyImage?: string;
  stylePreferences: StylePreference[];
  favoriteColors: string[];
  measurements?: {
    height: number;
    bust: number;
    waist: number;
    hips: number;
  };
}