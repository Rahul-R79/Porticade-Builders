import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const images = [
    { id: 1, src: "/images/Picture Gallery Images/1000184976.webp", alt: "Project Image 1", title: "Balaramapuram Villa Project" },
    { id: 2, src: "/images/Picture Gallery Images/1000184982.webp", alt: "Project Image 2", title: "Balaramapuram Villa Project" },
    { id: 3, src: "/images/Picture Gallery Images/20251219_2014_Residential Parking Conversion_remix_01kcvh1134f8bt2jcrc3hpdr6j (1).webp", alt: "Residential Parking Conversion", title: "Balaramapuram Villa Project" },
    { id: 4, src: "/images/Picture Gallery Images/20251219_2028_White House Transformation_remix_01kcvhv0p1ffcsg8ty34q3rw1r (1).webp", alt: "White House Transformation", title: "Balaramapuram Villa Project" },
    { id: 5, src: "/images/Picture Gallery Images/IMG_5560.webp", alt: "Project Image 5", title: "Balaramapuram Villa Project" },
    { id: 6, src: "/images/Picture Gallery Images/Rectangle 13-1.webp", alt: "Project Image 7", title: "Balaramapuram Villa Project" },
    { id: 7, src: "/images/Picture Gallery Images/Rectangle 13.jpg", alt: "Project Image 8", title: "Balaramapuram Villa Project" },
    { id: 8, src: "/images/Picture Gallery Images/bal.webp", alt: "Balcony Project 1", title: "Balaramapuram Villa Project" },
    { id: 9, src: "/images/Picture Gallery Images/bal2.webp", alt: "Balcony Project 2", title: "Balaramapuram Villa Project" },
    { id: 10, src: "/images/Picture Gallery Images/bal3.webp", alt: "Balcony Project 3", title: "Balaramapuram Villa Project" },
    { id: 11, src: "/images/Picture Gallery Images/bal4.webp", alt: "Balcony Project 4", title: "Balaramapuram Villa Project" },
    { id: 12, src: "/images/Picture Gallery Images/nedu.webp", alt: "Nedu Project 1", title: "GOVT Collage Nedumangad" },
    { id: 13, src: "/images/Picture Gallery Images/nedu2.webp", alt: "Nedu Project 2", title: "GOVT Collage Nedumangad" },
];

const ProjectGallery = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const lastWheelTime = useRef(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const getSlideStyles = (index) => {
        if (index === activeIndex) return {
            x: 0,
            scale: 1,
            zIndex: 10,
            opacity: 1,
            filter: "brightness(1)",
            display: 'block'
        };

        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        const nextIndex = (activeIndex + 1) % images.length;

        if (index === prevIndex) return {
            x: "-60%",
            scale: 0.7,
            zIndex: 5,
            opacity: 1,
            filter: "brightness(0.9)",
            display: 'block'
        };

        if (index === nextIndex) return {
            x: "60%",
            scale: 0.7,
            zIndex: 5,
            opacity: 1,
            filter: "brightness(0.9)",
            display: 'block'
        };

        return { x: 0, scale: 0, opacity: 0, display: 'none' };
    };

    return (
        <section className="w-full bg-[#F2F9FD] py-20 overflow-hidden">
            <div className="max-w-350 mx-auto text-center">

                {/* Section Title */}
                <Reveal direction="down">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-12 tracking-wide">
                        Picture gallery
                    </h2>
                </Reveal>

                {/* 3D Carousel Display Area */}
                <div
                    className="relative h-110 md:h-135 flex items-center justify-center mt-10 cursor-grab active:cursor-grabbing touch-pan-y"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    onWheel={(e) => {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;

                        const now = Date.now();
                        if (now - lastWheelTime.current < 400) return;

                        if (Math.abs(e.deltaX) > 20) {
                            if (e.deltaX > 0) nextSlide();
                            else prevSlide();
                            lastWheelTime.current = now;
                        }
                    }}
                >
                    <motion.div
                        className="relative w-full max-w-4xl h-full flex items-center justify-center touch-pan-y"
                        drag="x"
                        dragDirectionLock
                        dragMomentum={false}
                        dragElastic={0.2}
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                            if (Math.abs(info.offset.y) > Math.abs(info.offset.x)) return;

                            if (info.offset.x < -100) nextSlide();
                            if (info.offset.x > 100) prevSlide();
                        }}
                    >
                        <AnimatePresence initial={false}>
                            {images.map((img, index) => {
                                const styles = getSlideStyles(index);

                                return (
                                    <motion.div
                                        key={img.id}
                                        className="absolute w-[80%] md:w-[60%] lg:w-[50%] h-auto rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-white flex flex-col"
                                        initial={styles}
                                        animate={styles}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut"
                                        }}
                                        onClick={() => {
                                            if (index === activeIndex) return;
                                            setActiveIndex(index);
                                        }}
                                        style={{
                                            transformOrigin: 'center center'
                                        }}
                                    >
                                        <div className="h-62.5 md:h-87.5 lg:h-100 w-full relative">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-full object-cover pointer-events-none"
                                            />
                                        </div>
                                        <div className="p-4 md:p-6 bg-white min-h-[80px] md:min-h-[100px] flex items-center justify-center border-t border-gray-100">
                                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#333333] text-center">
                                                {img.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {(() => {
                        let start = Math.max(0, activeIndex - 1);
                        let end = Math.min(images.length - 1, activeIndex + 1);

                        if (activeIndex === 0) {
                            end = Math.min(2, images.length - 1);
                        } else if (activeIndex === images.length - 1) {
                            start = Math.max(0, images.length - 3);
                        }

                        if (end - start < 2 && images.length > 2) {
                            if (start === 0) end = 2;
                            if (end === images.length - 1) start = images.length - 3;
                        }

                        return images.slice(start, end + 1).map((_, i) => {
                            const idx = start + i;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#333333] w-8' : 'bg-gray-300'
                                        }`}
                                />
                            );
                        });
                    })()}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
