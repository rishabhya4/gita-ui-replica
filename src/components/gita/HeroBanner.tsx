import { HeroSlider } from './HeroSlider';
import G3 from '@/assets/G3.jpg';
import G4 from '@/assets/G4.jpg';
import G5 from '@/assets/G5.jpg';
import G6 from '@/assets/G6.jpg';

const HERO_IMAGES = [
  {
    src: G3,
    alt: 'Bhagavad Gita - Sacred Scripture',
  },
  {
    src: G4,
    alt: 'Krishna and Arjuna in the battlefield',
  },
  {
    src: G5,
    alt: 'Ancient wisdom of the Gita',
  },
  {
    src: G6,
    alt: 'Spiritual teachings of Bhagavad Gita',
  },
];

export function HeroBanner() {
  return <HeroSlider images={HERO_IMAGES} interval={3000} />;
}
