import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Carousel = ({ children, autoPlay = false, interval = 5000, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const count = React.Children.count(children);
    const timeoutRef = useRef(null);

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1 === count ? 0 : prev + 1));
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 < 0 ? count - 1 : prev - 1));
    };

    useEffect(() => {
        if (!autoPlay) return;

        const resetTimeout = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        resetTimeout();
        timeoutRef.current = setTimeout(nextStep, interval);

        return () => resetTimeout();
    }, [currentIndex, autoPlay, interval, count]);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    if (!children) return null;

    return (
        /* Main Container: Handles the carousel structure and overflow */
        <div className={`relative flex flex-col items-center justify-center w-full overflow-hidden ${className}`}>

            {/* Slide Area: Contains the animated slides */}
            <div className="relative w-full h-full min-h-75 flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                nextStep();
                            } else if (swipe > swipeConfidenceThreshold) {
                                prevStep();
                            }
                        }}
                        className="absolute w-full flex justify-center"
                    >
                        {React.Children.toArray(children)[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Controls: Dots to navigate slides */}
            <div className="flex gap-2 mt-10 z-10">
                {Array.from({ length: count }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#3B9DF8] w-8' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
