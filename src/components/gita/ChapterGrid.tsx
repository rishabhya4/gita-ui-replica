import { ChapterCard } from './ChapterCard';
import type { Chapter } from '@/data/gitaData';

interface ChapterGridProps {
  chapters: Chapter[];
  selectedChapterId: number | null;
  onSelectChapter: (chapterId: number) => void;
  isLoading: boolean;
}

export function ChapterGrid({
  chapters,
  selectedChapterId,
  onSelectChapter,
  isLoading,
}: ChapterGridProps) {
  if (isLoading) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-44 rounded-lg bg-muted animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ChapterCard
                chapter={chapter}
                isSelected={selectedChapterId === chapter.id}
                onSelect={onSelectChapter}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
