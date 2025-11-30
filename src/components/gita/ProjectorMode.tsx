import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import type { Verse, Chapter } from '@/data/gitaData';

interface ProjectorModeProps {
  isOpen: boolean;
  onClose: () => void;
  chapter: Chapter | null;
  verses: Verse[];
  fontSize: number;
}

export function ProjectorMode({
  isOpen,
  onClose,
  chapter,
  verses,
  fontSize,
}: ProjectorModeProps) {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentVerseIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentVerseIndex((prev) =>
      prev < verses.length - 1 ? prev + 1 : prev
    );
  }, [verses.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  // Reset to first verse when chapter changes
  useEffect(() => {
    setCurrentVerseIndex(0);
  }, [chapter?.id]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !chapter) return null;

  const currentVerse = verses[currentVerseIndex];
  const projectorFontSize = fontSize + 8; // Larger font for projector mode

  return (
    <div className="projector-mode">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Chapter {chapter.number}: {chapter.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {verses.length > 0
                  ? `Verse ${currentVerseIndex + 1} of ${verses.length}`
                  : 'No verses available'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Exit Projector Mode</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-6 sm:p-12">
        {verses.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-muted-foreground">
              No verses available for this chapter.
            </p>
          </div>
        ) : currentVerse ? (
          <div
            className="max-w-4xl mx-auto text-center animate-fade-in"
            style={{ fontSize: `${projectorFontSize}px` }}
          >
            {/* Verse Number */}
            <div className="mb-8">
              <span className="inline-flex items-center justify-center px-6 py-2 rounded-full gradient-saffron text-primary-foreground font-semibold">
                {currentVerse.verseNumber}
              </span>
            </div>

            {/* Sanskrit Text */}
            <p className="font-heading text-saffron-dark leading-relaxed mb-6">
              {currentVerse.sanskritText}
            </p>

            {/* Transliteration */}
            <p className="sanskrit-text mb-6" style={{ fontSize: `${projectorFontSize - 4}px` }}>
              {currentVerse.transliteration}
            </p>

            {/* Translation */}
            <p
              className="text-foreground leading-relaxed"
              style={{ fontSize: `${projectorFontSize - 2}px` }}
            >
              {currentVerse.translation}
            </p>
          </div>
        ) : null}
      </div>

      {/* Navigation Footer */}
      {verses.length > 0 && (
        <div className="sticky bottom-0 border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={goToPrevious}
                disabled={currentVerseIndex === 0}
                className="btn-outline-saffron flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Verse Progress */}
              <div className="flex items-center gap-2">
                {verses.slice(0, Math.min(verses.length, 10)).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVerseIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentVerseIndex
                        ? 'bg-primary'
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to verse ${idx + 1}`}
                  />
                ))}
                {verses.length > 10 && (
                  <span className="text-xs text-muted-foreground ml-1">
                    +{verses.length - 10}
                  </span>
                )}
              </div>

              <button
                onClick={goToNext}
                disabled={currentVerseIndex === verses.length - 1}
                className="btn-outline-saffron flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
