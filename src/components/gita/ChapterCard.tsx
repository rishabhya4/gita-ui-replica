import type { Chapter } from '@/data/gitaData';
import gitaBanner from '@/assets/gita-banner.jpg';

interface ChapterCardProps {
  chapter: Chapter;
  isSelected: boolean;
  onSelect: (chapterId: number) => void;
}

export function ChapterCard({ chapter, isSelected, onSelect }: ChapterCardProps) {
  return (
    <div
      className="diamond-card-wrapper"
      onClick={() => onSelect(chapter.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(chapter.id);
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
          <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            {chapter.number}
          </span>
        </div>

        {/* Bottom Text */}
        <div className="diamond-card-text">
          <p className="text-[8px] md:text-[10px] text-white/80 leading-tight text-center px-2 line-clamp-2">
            {chapter.transliteration}
          </p>
        </div>
      </div>
    </div>
  );
}
