export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  deposit: number;
  popular?: boolean;
  icon: string;
  features: string[];
  duration: string;
  color: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'spotless-start',
    name: 'Spotless Start',
    tagline: 'The Essential Clean',
    price: 79,
    deposit: 25,
    icon: '🥉',
    duration: '1–2 hrs',
    color: '#cd7f32',
    features: [
      'Exterior hand wash & dry',
      'Wheel & tire clean',
      'Window cleaning',
      'Interior vacuum',
      'Dashboard wipe-down',
    ],
  },
  {
    id: 'flawless-finish',
    name: 'Flawless Finish',
    tagline: 'Most Popular Choice',
    price: 149,
    deposit: 40,
    popular: true,
    icon: '🥈',
    duration: '2–3 hrs',
    color: '#C0C0C0',
    features: [
      'Everything in Spotless Start',
      'Clay bar decontamination',
      'Paint sealant application',
      'Leather conditioning',
      'Odor elimination treatment',
      'Tire dressing',
    ],
  },
  {
    id: 'mirror-mode',
    name: 'Mirror Mode',
    tagline: 'Showroom Ready',
    price: 249,
    deposit: 75,
    icon: '🥇',
    duration: '3–5 hrs',
    color: '#FFD700',
    features: [
      'Everything in Flawless Finish',
      'Single-stage paint correction',
      'Ceramic spray coating',
      'Engine bay cleaning',
      'Headlight restoration',
      'Deep interior shampoo',
    ],
  },
  {
    id: 'zero-spot-signature',
    name: 'Zero Spot Signature',
    tagline: 'The Ultimate Experience',
    price: 399,
    deposit: 100,
    icon: '💠',
    duration: '6–8 hrs',
    color: '#00B4FF',
    features: [
      'Everything in Mirror Mode',
      'Multi-stage paint correction',
      '2-year ceramic coating',
      'Paint protection film (select panels)',
      'Hand-applied carnauba wax',
      'Executive interior detail',
      'Complimentary 30-day touch-up',
    ],
  },
];
