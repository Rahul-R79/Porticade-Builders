import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const images = [
    { id: 1, src: "/images/Picture Gallery Images/1000184976.webp", alt: "Project Image 1" },
    { id: 2, src: "/images/Picture Gallery Images/1000184982.webp", alt: "Project Image 2" },
    { id: 3, src: "/images/Picture Gallery Images/20251219_2014_Residential Parking Conversion_remix_01kcvh1134f8bt2jcrc3hpdr6j (1).webp", alt: "Residential Parking Conversion" },
    { id: 4, src: "/images/Picture Gallery Images/20251219_2028_White House Transformation_remix_01kcvhv0p1ffcsg8ty34q3rw1r (1).webp", alt: "White House Transformation" },
    { id: 5, src: "/images/Picture Gallery Images/IMG_5560.webp", alt: "Project Image 5" },
    { id: 6, src: "/images/Picture Gallery Images/Rectangle 12.webp", alt: "Project Image 6" },
    { id: 7, src: "/images/Picture Gallery Images/Rectangle 13-1.webp", alt: "Project Image 7" },
    { id: 8, src: "/images/Picture Gallery Images/Rectangle 13.jpg", alt: "Project Image 8" },
    { id: 9, src: "/images/Picture Gallery Images/bal.webp", alt: "Balcony Project 1" },
    { id: 10, src: "/images/Picture Gallery Images/bal2.webp", alt: "Balcony Project 2" },
    { id: 11, src: "/images/Picture Gallery Images/bal3.webp", alt: "Balcony Project 3" },
    { id: 12, src: "/images/Picture Gallery Images/bal4.webp", alt: "Balcony Project 4" },
    { id: 13, src: "/images/Picture Gallery Images/nedu.webp", alt: "Nedu Project 1" },
    { id: 14, src: "/images/Picture Gallery Images/nedu2.webp", alt: "Nedu Project 2" },
];

const ProjectGallery = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

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
        /* Gallery Section Layout */
        <section className="w-full bg-[#F2F9FD] py-20 overflow-hidden">
            <div className="max-w-[1400px] mx-auto text-center">

                {/* Section Title */}
                <Reveal direction="down">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-12 uppercase tracking-wide">
                        Picture Gallery
                    </h2>
                </Reveal>

                {/* 3D Carousel Display Area */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center mt-10">
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        <AnimatePresence initial={false}>
                            {images.map((img, index) => {
                                const styles = getSlideStyles(index);
                                const isCenter = index === activeIndex;

                                return (
                                    <motion.div
                                        key={img.id}
                                        className="absolute w-[80%] md:w-[60%] lg:w-[50%] h-[250px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
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
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-[#333333] w-8' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
