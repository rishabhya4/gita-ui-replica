import type { Chapter } from '@/data/gitaData';

interface ChapterCardProps {
  chapter: Chapter;
  isSelected: boolean;
  onSelect: (chapterId: number) => void;
}

export function ChapterCard({ chapter, isSelected, onSelect }: ChapterCardProps) {
  return (
    <div
      className={`chapter-card cursor-pointer ${
        isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
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
      {/* Chapter Number Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full gradient-saffron flex items-center justify-center">
        <span className="text-sm font-bold text-primary-foreground">
          {chapter.number}
        </span>
      </div>

      {/* Chapter Content */}
      <div className="relative z-10 pr-12">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
          {chapter.title}
        </h3>
        <p className="sanskrit-text text-sm mb-2">
          {chapter.transliteration}
        </p>
        <p className="text-xs text-muted-foreground mb-3">
          {chapter.verseCount} verses
        </p>

        {/* Sanskrit Title */}
        <div className="font-heading text-lg text-saffron-dark mb-4">
          {chapter.sanskritTitle}
        </div>

        {/* Open Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(chapter.id);
          }}
          className={`btn-saffron text-xs px-4 py-1.5 ${
            isSelected ? 'opacity-90' : ''
          }`}
        >
          {isSelected ? 'Selected' : 'Open'}
        </button>
      </div>
    </div>
  );
}
