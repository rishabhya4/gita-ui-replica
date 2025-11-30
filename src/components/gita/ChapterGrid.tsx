import { useState } from 'react';
import { ChapterCard } from './ChapterCard';
import { ChapterModal } from './ChapterModal';
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
  const [previewChapter, setPreviewChapter] = useState<Chapter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreview = (chapter: Chapter) => {
    setPreviewChapter(chapter);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPreviewChapter(null);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-b from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 justify-items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-32 md:w-40 md:h-40 rotate-45 rounded-xl bg-muted animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 justify-items-center">
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
                onPreview={handlePreview}
              />
            </div>
          ))}
        </div>
      </div>

      <ChapterModal
        chapter={previewChapter}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpenChapter={onSelectChapter}
      />
    </section>
  );
}
