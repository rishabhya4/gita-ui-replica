import { X } from 'lucide-react';

interface VerseSelectorProps {
  chapterNumber: number;
  chapterTitle: string;
  totalVerses: number;
  onClose: () => void;
  onVerseSelect: (verseNumber: number) => void;
}

export function VerseSelector({
  chapterNumber,
  chapterTitle,
  totalVerses,
  onClose,
  onVerseSelect
}: VerseSelectorProps) {
  // Create an array from 1 to totalVerses
  const verseNumbers = Array.from({ length: totalVerses }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center p-4 overflow-y-auto">
      {/* Header with title and close button */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          Chapter {chapterNumber}: {chapterTitle}
        </h2>
        <button
          onClick={onClose}
          className="text-white hover:text-amber-400 transition-colors p-2"
          aria-label="Close verse selector"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Verses Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-4xl">
        {/* Whole Chapter Card */}
        <button
          onClick={() => onVerseSelect(0)} // 0 represents "whole chapter"
          className="bg-amber-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center h-32 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-50 group-hover:opacity-70 transition-opacity" />
          <span className="text-4xl font-bold text-amber-800 z-10">📜</span>
          <span className="text-amber-900 font-medium mt-2 z-10">Whole Chapter</span>
        </button>

        {/* Individual Verse Cards */}
        {verseNumbers.map((verseNumber) => (
          <button
            key={verseNumber}
            onClick={() => onVerseSelect(verseNumber)}
            className="bg-amber-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center h-32 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-50 group-hover:opacity-70 transition-opacity" />
            <span className="text-4xl font-bold text-amber-800 z-10">📜</span>
            <span className="text-amber-900 font-medium mt-2 z-10">Verse {verseNumber}</span>
          </button>
        ))}
      </div>
    </div>
  );
}