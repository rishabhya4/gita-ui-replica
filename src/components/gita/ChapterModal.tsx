import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Chapter } from '@/data/gitaData';
import gitaBanner from '@/assets/gita-banner.jpg';

interface ChapterModalProps {
  chapter: Chapter | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenChapter: (chapterId: number) => void;
}

export function ChapterModal({ chapter, isOpen, onClose, onOpenChapter }: ChapterModalProps) {
  if (!chapter) return null;

  const handleOpenChapter = () => {
    onOpenChapter(chapter.id);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-border bg-card">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-foreground flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full gradient-saffron text-primary-foreground text-lg font-bold">
              {chapter.number}
            </span>
            {chapter.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Chapter Image */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <img
              src={gitaBanner}
              alt={chapter.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-heading text-xl text-white">
                {chapter.sanskritTitle}
              </p>
            </div>
          </div>

          {/* Chapter Details */}
          <div className="space-y-3">
            <div>
              <p className="sanskrit-text text-lg">
                {chapter.transliteration}
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="font-semibold text-foreground">{chapter.verseCount}</span> verses
              </span>
              <span className="flex items-center gap-1">
                Chapter <span className="font-semibold text-foreground">{chapter.number}</span> of 18
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              This chapter explores the profound teachings of the Bhagavad Gītā, 
              offering timeless wisdom on dharma, karma, and the path to spiritual liberation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleOpenChapter}
              className="flex-1 btn-saffron py-2.5"
            >
              Read Verses
            </button>
            <button
              onClick={onClose}
              className="flex-1 btn-outline-saffron py-2.5"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
