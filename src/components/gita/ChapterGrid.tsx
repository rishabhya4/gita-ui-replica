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
      <section className="py-12 bg-gradient-to-b from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-24 h-24 md:w-32 md:h-32 rotate-45 rounded-lg bg-muted animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-b from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12">
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
