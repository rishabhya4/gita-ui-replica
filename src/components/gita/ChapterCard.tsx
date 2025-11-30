import type { Chapter } from '@/data/gitaData';
import bookCard from '@/assets/Book Card.png';

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
    <div
      className="relative w-32 h-40 md:w-36 md:h-44 bg-white rounded-lg overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer hover:-translate-y-1"
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
      <div className={`relative w-full h-full ${isSelected ? 'ring-2 ring-amber-500 ring-offset-2' : ''}`}>
        {/* Book Card Image */}
        <div className="absolute inset-0">
          <img
            src={bookCard}
            alt={chapter.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Chapter Number */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {chapter.number}
          </span>
        </div>

        {/* Chapter Title */}
        <div className="absolute bottom-2 left-0 right-0">
          <p className="text-xs text-white text-center font-medium px-2 line-clamp-2">
            {chapter.transliteration}
          </p>
        </div>
      </div>
    </div>
  );
}
