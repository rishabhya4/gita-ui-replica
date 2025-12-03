import { useState } from 'react';
import { ChapterCard } from './ChapterCard';
import { BookModal } from './BookModal';
import type { Chapter, Verse } from '@/data/gitaData';
import { fetchVerses } from '@/data/gitaData';
import gitaBanner from '@/assets/gita-banner.jpg';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden min-h-screen">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 animate-gradient-shift" />

      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-80 dark:opacity-50"
        style={{
          backgroundImage: `url(${gitaBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Gradient Overlay with Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-50/90 via-orange-50/80 to-red-50/90 dark:from-amber-950/90 dark:to-orange-950/90 backdrop-blur-[2px]" />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {chapters.map((chapter) => (
            <motion.div
              key={chapter.id}
              variants={itemVariants}
            >
              <ChapterCard
                chapter={chapter}
                isSelected={selectedChapterId === chapter.id}
                onSelect={onSelectChapter}
                onPreview={handlePreview}
              />
            </motion.div>
          ))}
        </motion.div>
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
