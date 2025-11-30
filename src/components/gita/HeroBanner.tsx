import { HeroSlider } from './HeroSlider';

const HERO_IMAGES = [
  {
    src: '/src/assets/G3.jpg',
    alt: 'Bhagavad Gita - Sacred Scripture',
  },
  {
    src: '/src/assets/G4.jpg',
    alt: 'Krishna and Arjuna in the battlefield',
  },
  {
    src: '/src/assets/G5.jpg',
    alt: 'Ancient wisdom of the Gita',
  },
  {
    src: '/src/assets/G6.jpg',
    alt: 'Spiritual teachings of Bhagavad Gita',
  },
];

export function HeroBanner() {
  return <HeroSlider images={HERO_IMAGES} interval={3000} />;
}
