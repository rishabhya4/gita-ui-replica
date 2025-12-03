import type { Chapter } from '@/data/gitaData';
import bookCard from '@/assets/Book Card.png';
import { motion } from 'framer-motion';

interface ChapterCardProps {
  chapter: Chapter;
  isSelected: boolean;
  onSelect: (chapterId: number) => void;
  onPreview: (chapter: Chapter) => void;
}

export function ChapterCard({ chapter, isSelected, onSelect, onPreview }: ChapterCardProps) {
  const handleClick = () => {
    onPreview(chapter);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotateY: 5,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="relative w-28 h-36 md:w-32 md:h-40 bg-white rounded-lg overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] transition-all duration-500 cursor-pointer group perspective-1000"
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
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`relative w-full h-full ${isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''}`}>
        {/* Book Card Image */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <img
            src={bookCard}
            alt={chapter.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-amber-500/10 group-hover:from-black/30 group-hover:to-amber-500/20 transition-all duration-500" />

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-red-400/20 blur-xl transition-opacity duration-500" />

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Chapter Number with Animation */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_4px_12px_rgba(245,158,11,0.8)] transition-all duration-300">
            {chapter.number}
          </span>
        </motion.div>

        {/* Chapter Title with Slide Up Animation */}
        <motion.div
          className="absolute bottom-2 left-0 right-0"
          initial={{ y: 10, opacity: 0.8 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs text-white text-center font-medium px-2 line-clamp-2 drop-shadow-lg">
            {chapter.transliteration}
          </p>
        </motion.div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
