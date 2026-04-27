import { Service, PortfolioItem, PricingTier } from './types';

export const SERVICES: Service[] = [
  {
    id: 'youtube',
    title: 'YouTube Editing',
    description: 'Full-length montages, funny edits, and documentary-style gaming videos.',
    icon: 'Youtube',
    features: ['High-energy pacing', 'Motion graphics', 'Custom sound design', 'Storytelling focus']
  },
  {
    id: 'shorts',
    title: 'Viral Shorts & Reels',
    description: 'High-retention short-form content designed to go viral on TikTok and YouTube.',
    icon: 'Zap',
    features: ['Dynamic subtitles', 'Fast cuts', 'Trending memes', 'optimized for mobile']
  },
  {
    id: 'esports',
    title: 'Esports Highlights',
    description: 'Professional kill montages and tournament highlights for serious players.',
    icon: 'Trophy',
    features: ['Phonk/Anime styles', 'Frame-perfect sync', 'Cinematic intros', 'Color grading']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Valorant Immortal Montage',
    category: 'Montage',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Pro Warzone Funny Moments',
    category: 'Funny',
    thumbnail: 'https://images.unsplash.com/photo-1552824801-adc1b8d60144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'BGMI Sync Edit',
    category: 'Montage',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Viral Minecraft Shorts',
    category: 'Shorts',
    thumbnail: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'beginner',
    name: 'Starter',
    price: '₹500',
    description: 'Perfect for new creators building their first portfolio.',
    features: [
      '1 Video Edit',
      'Basic Sound Design',
      'Standard Subtitles',
      '2 Revisions'
    ]
  },
  {
    id: 'intermediate',
    name: 'Pro Creator',
    price: '₹2500',
    description: 'The sweet spot for growing streamers and YouTubers.',
    features: [
      '3 High-Quality Edits',
      'Advanced Motion Graphics',
      'Viral-Style Subtitles',
      'Unlimited Revisions',
      'Priority Support'
    ],
    recommended: true
  },
  {
    id: 'advanced',
    name: 'Elite Growth',
    price: '₹7500',
    description: 'Full channel management and elite-tier editing.',
    features: [
      '10 Monthly Videos',
      'Custom Editing Presets',
      'Thumbnail Design',
      'Growth Strategy Session',
      'Collaborative Discord'
    ]
  }
];
