import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { HeroBanner } from './HeroBanner';
import { ControlBar } from './ControlBar';
import { ChapterGrid } from './ChapterGrid';
import { VersesTable } from './VersesTable';
import { AudioPlayer } from './AudioPlayer';
import { ProjectorMode } from './ProjectorMode';
import { Footer } from './Footer';
import { fetchChapters, fetchVerses } from '@/data/gitaData';
import type { Chapter, Verse } from '@/data/gitaData';

export function GitaReader() {
  // Data states
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // UI states
  const [fontSize, setFontSize] = useState(16);
  const [isProjectorMode, setIsProjectorMode] = useState(false);
  const [isLoadingChapters, setIsLoadingChapters] = useState(true);
  const [isLoadingVerses, setIsLoadingVerses] = useState(false);
  const [showChapterName, setShowChapterName] = useState(false);

  // Load chapters on mount
  useEffect(() => {
    const loadChapters = async () => {
      try {
        const data = await fetchChapters();
        setChapters(data);
      } catch (error) {
        console.error('Failed to fetch chapters:', error);
      } finally {
        setIsLoadingChapters(false);
      }
    };

    loadChapters();
  }, []);

  // Load verses when chapter is selected
  const handleSelectChapter = useCallback(async (chapterId: number) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    if (!chapter) return;

    setSelectedChapter(chapter);
    setIsLoadingVerses(true);
    setAudioUrl(null);

    // Show chapter name overlay for 2 seconds
    setShowChapterName(true);
    setTimeout(() => {
      setShowChapterName(false);
    }, 2000);

    try {
      const versesData = await fetchVerses(chapterId);
      setVerses(versesData);

      // Scroll to verses section after loading
      setTimeout(() => {
        document.getElementById('verses-section')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } catch (error) {
      console.error('Failed to fetch verses:', error);
      setVerses([]);
    } finally {
      setIsLoadingVerses(false);
    }
  }, [chapters]);

  // Toggle projector mode
  const handleToggleProjectorMode = useCallback(() => {
    if (!selectedChapter) {
      // Show a message or select first chapter
      if (chapters.length > 0) {
        handleSelectChapter(chapters[0].id);
      }
    }
    setIsProjectorMode((prev) => !prev);
  }, [selectedChapter, chapters, handleSelectChapter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col gap-8"
      >
        <HeroBanner />

        <div className="space-y-12 pb-16">
          <ControlBar
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            onToggleProjectorMode={handleToggleProjectorMode}
            isProjectorMode={isProjectorMode}
          />

          <ChapterGrid
            chapters={chapters}
            selectedChapterId={selectedChapter?.id ?? null}
            onSelectChapter={handleSelectChapter}
            isLoading={isLoadingChapters}
          />

          <VersesTable
            verses={verses}
            chapter={selectedChapter}
            fontSize={fontSize}
            isLoading={isLoadingVerses}
          />

          <AudioPlayer
            chapter={selectedChapter}
            audioUrl={audioUrl}
          />
        </div>
      </motion.main>

      <Footer />

      <ProjectorMode
        isOpen={isProjectorMode}
        onClose={() => setIsProjectorMode(false)}
        chapter={selectedChapter}
        verses={verses}
        fontSize={fontSize}
      />

      {/* Chapter Name Overlay - Shows for 2 seconds */}
      {showChapterName && selectedChapter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: -50, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="text-center px-8 py-12 max-w-4xl"
          >
            {/* Chapter Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-8xl md:text-9xl font-bold text-amber-500 mb-6 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
            >
              {selectedChapter.number}
            </motion.div>

            {/* Chapter Title in Sanskrit */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-heading font-light text-white mb-4 drop-shadow-lg"
            >
              {selectedChapter.title}
            </motion.h2>

            {/* Chapter Title in English */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-amber-200 font-heading italic drop-shadow-lg"
            >
              {selectedChapter.transliteration}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
