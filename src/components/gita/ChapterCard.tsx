import type { Chapter } from '@/data/gitaData';
import gitaBanner from '@/assets/gita-banner.jpg';

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
      className="diamond-card-wrapper"
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
      <div
        className={`diamond-card ${
          isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
        }`}
      >
        {/* Background Image */}
        <div className="diamond-card-image">
          <img
            src={gitaBanner}
            alt={chapter.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Chapter Number */}
        <div className="diamond-card-number">
          <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {chapter.number}
          </span>
        </div>

        {/* Bottom Text */}
        <div className="diamond-card-text">
          <p className="text-[9px] md:text-xs text-white/90 leading-tight text-center px-3 line-clamp-1 font-medium">
            {chapter.transliteration}
          </p>
        </div>
      </div>
    </div>
  );
}
