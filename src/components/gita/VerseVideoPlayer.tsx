import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import type { Verse } from '@/data/gitaData';

interface VerseVideoPlayerProps {
    verse: Verse;
    isOpen: boolean;
    onClose: () => void;
}

export function VerseVideoPlayer({ verse, isOpen, onClose }: VerseVideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Parse verse text to highlight words
    const parseVerseText = (text: string) => {
        // Split by common delimiters while preserving them
        const words = text.split(/(\s+|,|\.|\?|!|;|:)/);
        return words.filter(word => word.trim().length > 0);
    };

    const verseWords = parseVerseText(verse.sanskritText);
    const translationWords = parseVerseText(verse.transliteration || '');

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    useEffect(() => {
        if (!isOpen) {
            setIsPlaying(false);
            setCurrentTime(0);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, [isOpen]);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Calculate which word should be highlighted based on current time
    const getHighlightedWordIndex = () => {
        if (duration === 0) return -1;
        const progress = currentTime / duration;
        return Math.floor(progress * verseWords.length);
    };

    const highlightedIndex = getHighlightedWordIndex();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="relative w-full max-w-4xl bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
                    >
                        <X className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Content Area */}
                    <div className="p-8 md:p-12">
                        {/* Verse Number */}
                        <div className="text-center mb-6">
                            <span className="inline-block px-6 py-2 bg-amber-500 text-white rounded-full text-lg font-semibold shadow-lg">
                                Verse {verse.verseNumber}
                            </span>
                        </div>

                        {/* Verse Text with Word Highlighting */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-6 shadow-xl border-2 border-amber-200">
                            <div className="text-2xl md:text-3xl text-center leading-relaxed mb-6 font-serif">
                                {verseWords.map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className={`inline-block mx-1 transition-all duration-300 ${index === highlightedIndex
                                            ? 'text-pink-600 font-bold scale-110'
                                            : index < highlightedIndex
                                                ? 'text-blue-600'
                                                : 'text-gray-700'
                                            }`}
                                        animate={index === highlightedIndex ? { scale: [1, 1.1, 1] } : {}}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Transliteration */}
                            {verse.transliteration && (
                                <div className="text-lg md:text-xl text-center leading-relaxed text-blue-700 italic border-t-2 border-amber-200 pt-6">
                                    {translationWords.map((word, index) => (
                                        <span
                                            key={index}
                                            className={`inline-block mx-1 transition-all duration-300 ${index === highlightedIndex ? 'font-bold text-blue-900' : ''
                                                }`}
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Translation/Meaning */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border-2 border-green-200">
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
                                <span className="font-bold text-green-700">[{verse.verseNumber}]</span> {verse.translation}
                            </p>
                        </div>

                        {/* Audio Controls */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-amber-200">
                            {/* Progress Bar */}
                            <div className="mb-4">
                                <input
                                    type="range"
                                    min="0"
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-2">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>

                            {/* Control Buttons */}
                            <div className="flex items-center justify-between">
                                {/* Play/Pause Button */}
                                <button
                                    onClick={handlePlayPause}
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
                                >
                                    {isPlaying ? (
                                        <>
                                            <Pause className="w-5 h-5" />
                                            <span className="font-semibold">Pause</span>
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-5 h-5" />
                                            <span className="font-semibold">Play</span>
                                        </>
                                    )}
                                </button>

                                {/* Volume Controls */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={toggleMute}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-5 h-5 text-gray-600" />
                                        ) : (
                                            <Volume2 className="w-5 h-5 text-gray-600" />
                                        )}
                                    </button>
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={isMuted ? 0 : volume}
                                        onChange={handleVolumeChange}
                                        className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Hidden Audio Element */}
                        <audio
                            ref={audioRef}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onEnded={() => setIsPlaying(false)}
                        >
                            {/* You'll need to provide actual audio URLs for each verse */}
                            <source src={verse.audioUrl || `/audio/chapter${verse.chapterId}/verse${verse.verseNumber}.mp3`} type="audio/mpeg" />
                        </audio>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
