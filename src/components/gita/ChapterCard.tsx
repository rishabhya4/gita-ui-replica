import { motion } from 'framer-motion';
import type { Chapter } from '@/data/gitaData';
import bookCard from '@/assets/Book Card.png';

interface ChapterCardProps {
  chapter: Chapter;
  isSelected: boolean;
  onSelect: (chapterId: number) => void;
  onPreview: (chapter: Chapter) => void;
}

export function ChapterCard({ chapter, isSelected, onPreview }: ChapterCardProps) {
  const handleClick = () => {
    onPreview(chapter);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative w-32 h-40 md:w-36 md:h-44 cursor-pointer group"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-pressed={isSelected}
    >
      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron via-gold to-saffron rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 animate-gradient-x" />
      
      {/* Card container */}
      <div className={`relative w-full h-full bg-card rounded-lg overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_30px_hsl(var(--saffron)/0.3)] transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
      }`}>
        {/* Book Card Image */}
        <div className="absolute inset-0">
          <img
            src={bookCard}
            alt={chapter.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Chapter Number */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.span 
            className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            {chapter.number}
          </motion.span>
        </div>

        {/* Chapter Title */}
        <div className="absolute bottom-2 left-0 right-0">
          <p className="text-xs text-white text-center font-medium px-2 line-clamp-2 drop-shadow-lg">
            {chapter.transliteration}
          </p>
        </div>
        
        {/* Selected indicator */}
        {isSelected && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full shadow-lg"
          />
        )}
      </div>
    </motion.div>
  );
}
