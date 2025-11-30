import type { Verse, Chapter } from '@/data/gitaData';
import { BookOpen } from 'lucide-react';

interface VersesTableProps {
  verses: Verse[];
  chapter: Chapter | null;
  fontSize: number;
  isLoading: boolean;
}

export function VersesTable({ verses, chapter, fontSize, isLoading }: VersesTableProps) {
  if (!chapter) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-16 bg-card rounded-lg border border-border">
            <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-lg text-muted-foreground">
              Select a chapter above to view its verses
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/50">
              <div className="h-8 w-64 bg-muted animate-pulse rounded" />
            </div>
            <div className="divide-y divide-border">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="p-6">
                  <div className="h-4 w-16 bg-muted animate-pulse rounded mb-3" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted animate-pulse rounded" />
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" id="verses-section">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-soft">
          {/* Table Header */}
          <div className="p-4 sm:p-6 border-b border-border bg-cream-dark">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">
              Chapter {chapter.number}: {chapter.title}
            </h3>
            <p className="sanskrit-text mt-1">{chapter.transliteration}</p>
          </div>

          {/* Table Content */}
          {verses.length === 0 ? (
            <div className="p-12 text-center">
              <BookOpen className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
              <p className="text-lg font-medium text-muted-foreground">Data Not Found</p>
              <p className="text-sm text-muted-foreground/70 mt-2">
                Verses for this chapter are not yet available.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-foreground w-24">
                      Verse
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Text
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {verses.map((verse) => (
                    <tr key={verse.id} className="verse-row">
                      <td className="px-4 sm:px-6 py-4 align-top">
                        <span className="inline-flex items-center justify-center w-12 h-8 rounded bg-primary/10 text-primary text-sm font-semibold">
                          {verse.verseNumber}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div
                          className="space-y-3"
                          style={{ fontSize: `${fontSize}px` }}
                        >
                          {/* Sanskrit Text */}
                          <p className="font-heading text-saffron-dark leading-relaxed">
                            {verse.sanskritText}
                          </p>
                          
                          {/* Transliteration */}
                          <p className="sanskrit-text text-sm leading-relaxed">
                            {verse.transliteration}
                          </p>
                          
                          {/* Translation */}
                          <p className="text-foreground leading-relaxed">
                            {verse.translation}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
