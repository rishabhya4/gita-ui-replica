import { useState } from 'react';
import { ChapterCard } from './ChapterCard';
import { BookModal } from './BookModal';
import type { Chapter, Verse } from '@/data/gitaData';
import { fetchVerses } from '@/data/gitaData';
import gitaBanner from '@/assets/gita-banner.jpg';

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
  const [previewVerses, setPreviewVerses] = useState<Verse[]>([]);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);

  const handlePreview = async (chapter: Chapter) => {
    setPreviewChapter(chapter);
    setIsLoadingVerses(true);
    setIsBookOpen(true);

    try {
      const verses = await fetchVerses(chapter.id);
      setPreviewVerses(verses);
    } catch (error) {
      console.error('Failed to fetch verses:', error);
      setPreviewVerses([]);
    } finally {
      setIsLoadingVerses(false);
    }
  };

  const handleCloseBook = () => {
    setIsBookOpen(false);
    setTimeout(() => {
      setPreviewChapter(null);
      setPreviewVerses([]);
    }, 600); // Wait for closing animation
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
    <section className="py-16 relative overflow-hidden min-h-screen">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `url(${gitaBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-50/80 to-orange-50/60 dark:from-amber-950/80 dark:to-orange-950/60 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
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

      <BookModal
        chapter={previewChapter}
        verses={isLoadingVerses ? [] : previewVerses}
        isOpen={isBookOpen}
        onClose={handleCloseBook}
      />
    </section>
  );
}
