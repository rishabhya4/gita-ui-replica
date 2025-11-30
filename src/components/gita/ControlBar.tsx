import { Minus, Plus, Maximize2 } from 'lucide-react';

interface ControlBarProps {
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  onToggleProjectorMode: () => void;
  isProjectorMode: boolean;
}

export function ControlBar({
  fontSize,
  onFontSizeChange,
  onToggleProjectorMode,
  isProjectorMode,
}: ControlBarProps) {
  const decreaseFontSize = () => {
    if (fontSize > 12) {
      onFontSizeChange(fontSize - 2);
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 28) {
      onFontSizeChange(fontSize + 2);
    }
  };

  return (
    <div className="bg-cream-dark border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-3">
          {/* Section Label */}
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">
            GITA CHAPTERS
          </h2>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Font Size Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">Font Size:</span>
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= 12}
                className="font-control-btn disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease font size"
              >
                A<Minus className="w-3 h-3" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{fontSize}</span>
              <button
                onClick={increaseFontSize}
                disabled={fontSize >= 28}
                className="font-control-btn disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase font size"
              >
                A<Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-border hidden sm:block" />

            {/* Projector Mode Toggle */}
            <button
              onClick={onToggleProjectorMode}
              className={`btn-outline-saffron flex items-center gap-2 ${
                isProjectorMode ? 'bg-primary text-primary-foreground' : ''
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Projector Mode</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
