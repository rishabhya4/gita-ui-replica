import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Chapter, Verse } from '@/data/gitaData';
import './BookModal.css';

interface BookModalProps {
    chapter: Chapter | null;
    verses: Verse[];
    isOpen: boolean;
    onClose: () => void;
}

type AnimationStage = 'closed' | 'tilting' | 'opening' | 'open';

export function BookModal({ chapter, verses, isOpen, onClose }: BookModalProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [animationStage, setAnimationStage] = useState<AnimationStage>('closed');
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');

    // Reset to first page when chapter changes
    useEffect(() => {
        if (chapter) {
            setCurrentPage(0);
        }
    }, [chapter]);

    // Trigger book opening animation sequence
    useEffect(() => {
        if (isOpen) {
            // Stage 1: Closed (fade in)
            setAnimationStage('closed');

            // Stage 2: Tilting (rotate to face user)
            const tiltTimer = setTimeout(() => setAnimationStage('tilting'), 500);

            // Stage 3: Opening (covers start opening)
            const openTimer = setTimeout(() => setAnimationStage('opening'), 1000);

            // Stage 4: Fully open
            const completeTimer = setTimeout(() => setAnimationStage('open'), 2200);

            return () => {
                clearTimeout(tiltTimer);
                clearTimeout(openTimer);
                clearTimeout(completeTimer);
            };
        } else {
            setAnimationStage('closed');
        }
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setAnimationStage('closed');
        setTimeout(() => {
            onClose();
            // Scroll to chapter section
            const chapterSection = document.querySelector('section');
            if (chapterSection) {
                chapterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 600);
    }, [onClose]);

    const handleNextPage = useCallback(() => {
        if (currentPage < verses.length - 1 && !isFlipping && animationStage === 'open') {
            setIsFlipping(true);
            setFlipDirection('forward');
            setTimeout(() => {
                setCurrentPage((prev) => prev + 1);
                setIsFlipping(false);
            }, 600);
        }
    }, [currentPage, verses.length, isFlipping, animationStage]);

    const handlePreviousPage = useCallback(() => {
        if (currentPage > 0 && !isFlipping && animationStage === 'open') {
            setIsFlipping(true);
            setFlipDirection('backward');
            setTimeout(() => {
                setCurrentPage((prev) => prev - 1);
                setIsFlipping(false);
            }, 600);
        }
    }, [currentPage, isFlipping, animationStage]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'Escape') {
                handleClose();
            } else if (e.key === 'ArrowRight') {
                handleNextPage();
            } else if (e.key === 'ArrowLeft') {
                handlePreviousPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleClose, handleNextPage, handlePreviousPage]);

    if (!chapter) return null;

    const currentVerse = verses[currentPage];
    const totalPages = verses.length;

    // Animation variants for the book container
    const bookContainerVariants = {
        closed: {
            scale: 0.85,
            opacity: 0,
            rotateX: 10,
            rotateY: -15,
            transition: { duration: 0 }
        },
        tilting: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        },
        opening: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.3 }
        },
        open: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.3 }
        }
    };

    // Animation variants for left cover
    const leftCoverVariants = {
        closed: { rotateY: 0 },
        tilting: { rotateY: 0 },
        opening: {
            rotateY: -130,
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const }
        },
        open: { rotateY: -130 }
    };

    // Animation variants for right cover
    const rightCoverVariants = {
        closed: { rotateY: 0 },
        tilting: { rotateY: 0 },
        opening: {
            rotateY: 130,
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const }
        },
        open: { rotateY: 130 }
    };

    // Animation variants for pages (fade in after covers open)
    const pagesVariants = {
        closed: { opacity: 0 },
        tilting: { opacity: 0 },
        opening: {
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5 }
        },
        open: { opacity: 1 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="book-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className="book-modal-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="book-close-button"
                            aria-label="Close book"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* 3D Book Container */}
                        <div className="book-wrapper">
                            <motion.div
                                className="book-3d"
                                variants={bookContainerVariants}
                                initial="closed"
                                animate={animationStage}
                            >
                                {/* Book Spine */}
                                <div className="book-spine">
                                    <div className="spine-text">Chapter {chapter.number}</div>
                                </div>

                                {/* Left Cover */}
                                <motion.div
                                    className="book-cover book-cover-left"
                                    variants={leftCoverVariants}
                                >
                                    <div className="book-cover-content">
                                        <div className="book-cover-number">{chapter.number}</div>
                                        <h2 className="book-cover-title">{chapter.title}</h2>
                                        <p className="book-cover-sanskrit">{chapter.sanskritTitle}</p>
                                        <p className="book-cover-transliteration">{chapter.transliteration}</p>
                                        <div className="book-cover-info">
                                            <span>{chapter.verseCount} Verses</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Cover */}
                                <motion.div
                                    className="book-cover book-cover-right"
                                    variants={rightCoverVariants}
                                >
                                    <div className="book-cover-ornament">॥ ॐ ॥</div>
                                </motion.div>

                                {/* Inner Pages (revealed after covers open) */}
                                <motion.div
                                    className="book-pages-container"
                                    variants={pagesVariants}
                                >
                                    {/* Left Page */}
                                    <div className="book-page book-page-left">
                                        {currentVerse && animationStage === 'open' ? (
                                            <div className="book-content-page">
                                                <div className="verse-content">
                                                    <div className="verse-header">
                                                        <span className="verse-number">{currentVerse.verseNumber}</span>
                                                    </div>

                                                    <div className="verse-sanskrit">
                                                        {currentVerse.sanskritText}
                                                    </div>

                                                    <div className="verse-transliteration">
                                                        {currentVerse.transliteration}
                                                    </div>
                                                </div>

                                                <div className="page-number">
                                                    {currentPage + 1} / {totalPages}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="page-decoration">
                                                <div className="page-ornament">॥</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Page */}
                                    <div className="book-page book-page-right">
                                        {currentVerse && animationStage === 'open' ? (
                                            <div className="book-content-page">
                                                <div className="verse-content">
                                                    <div className="verse-translation">
                                                        {currentVerse.translation}
                                                    </div>
                                                </div>

                                                <div className="page-number">
                                                    {currentPage + 1} / {totalPages}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="page-decoration">
                                                <div className="page-ornament">॥</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Flipping Page Overlay */}
                                    {isFlipping && (
                                        <div className={`book-page-flipping ${flipDirection === 'forward' ? 'flip-forward' : 'flip-backward'}`}>
                                            <div className="book-content-page">
                                                <div className="page-decoration">
                                                    <div className="page-ornament">॥</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Navigation Controls - Only show when fully open */}
                        {animationStage === 'open' && (
                            <motion.div
                                className="book-controls"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 0}
                                    className="book-nav-button"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    <span>Previous</span>
                                </button>

                                <button
                                    onClick={handleClose}
                                    className="book-cancel-button"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage >= totalPages - 1}
                                    className="book-nav-button"
                                    aria-label="Next page"
                                >
                                    <span>Next</span>
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
