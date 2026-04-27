export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Montage" | "Funny" | "Reels" | "Shorts";
  thumbnail: string;
  videoUrl?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}
