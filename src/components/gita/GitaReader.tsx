import { useState, useEffect, useCallback } from 'react';
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

interface GitaReaderProps {
  bannerImage?: string;
}

export function GitaReader({ bannerImage }: GitaReaderProps) {
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
      
      <main>
        <HeroBanner bannerImage={bannerImage} />
        
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
      </main>
      
      <Footer />
      
      <ProjectorMode
        isOpen={isProjectorMode}
        onClose={() => setIsProjectorMode(false)}
        chapter={selectedChapter}
        verses={verses}
        fontSize={fontSize}
      />
    </div>
  );
}
