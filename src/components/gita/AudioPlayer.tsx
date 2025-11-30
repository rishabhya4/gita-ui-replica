import { Music, AlertCircle } from 'lucide-react';
import type { Chapter } from '@/data/gitaData';

interface AudioPlayerProps {
  chapter: Chapter | null;
  audioUrl: string | null;
}

export function AudioPlayer({ chapter, audioUrl }: AudioPlayerProps) {
  if (!chapter) {
    return null;
  }

  return (
    <section className="py-8 bg-cream-dark border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Audio Recitation
            </h3>
          </div>

          {audioUrl ? (
            <audio
              controls
              className="audio-player w-full"
              preload="metadata"
            >
              <source src={audioUrl} type="audio/mpeg" />
              <source src={audioUrl} type="audio/ogg" />
              <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                <AlertCircle className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Your browser does not support the audio element. Please update your browser or try a different one.
                </p>
              </div>
            </audio>
          ) : (
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border">
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Audio recitation for Chapter {chapter.number} ({chapter.title}) is not currently available.
                Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
