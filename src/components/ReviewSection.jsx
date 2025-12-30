import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const reviews = [
    {
        text: "Honestly, working with Porticade Builders was stress-free for us. They explained everything clearly and delivered the work exactly as discussed. We’re very happy with the final result.",
        name: "Mohan Kumar",
        stars: 5,
    },
    {
        text: "The team at Porticade Builders did a great job on our house construction. Quality of work is really good and they completed it on time. Would definitely recommend them.",
        name: "Sandhya B S",
        stars: 5,
    },
    {
        text: "We were worried about delays and quality, but Porticade Builders handled everything smoothly. The finishing came out very well and the support from their team was excellent.",
        name: "Fayas",
        stars: 5,
    },
    {
        text: "From start to finish, Porticade Builders were professional and reliable. They kept us updated regularly and the building quality met our expectations.",
        name: "Praveen K",
        stars: 5,
    },
];

const ReviewSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const lastScrollTime = useRef(0);
    const handleWheel = (e) => {
        const now = Date.now();
        if (now - lastScrollTime.current < 1000) return;

        if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 30) {
            if (e.deltaX > 0 || e.deltaY > 0) {
                nextReview();
            } else {
                prevReview();
            }
            lastScrollTime.current = now;
        }
    };

    return (
        <section className="bg-sky-50 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Content */}
                <Reveal className="lg:w-1/3 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-wider">
                        &#123;20+ HAPPY CLIENTS&#125;
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                        Our construction solutions are not only scientifically tested but also trusted and validated by industry professionals and clients.
                    </p>
                </Reveal>

                {/* Right Content - Carousel on Mobile, Grid on Desktop */}
                <div className="lg:w-2/3 w-full">
                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-2 gap-6">
                        {reviews.map((review, index) => (
                            <Reveal key={index} direction="right" delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                                    <p className="text-gray-700 mb-8 leading-relaxed text-[15px] font-medium">
                                        "{review.text}"
                                    </p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-gray-400 text-sm font-medium">
                                            {review.name}
                                        </span>
                                        <div className="flex gap-1">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <StarIcon key={i} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden relative px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                onWheel={handleWheel}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    if (swipe < -50) {
                                        nextReview();
                                    } else if (swipe > 50) {
                                        prevReview();
                                    }
                                }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 min-h-[300px] flex flex-col justify-between cursor-grab active:cursor-grabbing"
                            >
                                <p className="text-gray-700 mb-8 leading-relaxed text-[15px] font-medium italic">
                                    "{reviews[currentIndex].text}"
                                </p>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-gray-400 text-sm font-medium">
                                        {reviews[currentIndex].name}
                                    </span>
                                    <div className="flex gap-1">
                                        {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StarIcon = () => (
    <svg
        className="w-4 h-4 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default ReviewSection;
