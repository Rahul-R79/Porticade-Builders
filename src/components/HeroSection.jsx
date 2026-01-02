import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import ContactModal from "./ContactModal";
import Seo from "../seo/Seo";
import LocalBusinessSchema from "../seo/LocalBusinessSchema";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heroImages = [
        "/images/Rectangle 1.webp",
        "/images/Rectangle 33.webp",
        "/images/Rectangle 18.webp",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentImageIndex, heroImages.length]);

    return (
        <div className='w-full font-sans overflow-x-hidden'>
            {/* seo setup for application */}
            <Seo
                title='Porticade Builders & Developers Pvt Ltd | Best Home Builders in Trivandrum'
                description='Porticade Builders & Developers Pvt Ltd is one of the best home construction builders in Trivandrum, Mannanthala & Nalanchira.'
                canonical='https://porticadebuilders.com/'
            />
            <LocalBusinessSchema />
            {/* Primary Hero Section: Landing view with main branding */}
            <section className='relative w-full min-h-screen flex flex-col md:flex-row'>
                {/* Left Column: Text content, Logo, and CTA */}
                <div className='w-full md:w-1/2 bg-[#F2F9FD] px-6 py-12 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center items-start z-10 md:h-screen'>
                    {/* Brand Logo */}
                    <Reveal
                        direction='left'
                        className='mb-10 md:mb-12 lg:mb-16'>
                        <img
                            src='/images/logo.png'
                            alt='Porticade Builders Logo'
                            className='w-28 md:w-32 lg:w-40 object-contain'
                        />
                    </Reveal>

                    {/* Headline Text */}
                    <Reveal direction='left' delay={0.2}>
                        <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.1] mb-6 tracking-tight'>
                            Building kerala’s future{" "}
                            <br className='hidden lg:block' />
                            with precision & <br className='hidden lg:block' />
                            integrity
                        </h1>
                    </Reveal>

                    {/* Subheadline Description */}
                    <Reveal direction='left' delay={0.4}>
                        <p className='text-gray-500 text-sm sm:text-base md:text-sm lg:text-lg font-medium leading-relaxed max-w-lg mb-8 md:mb-10'>
                            Crafting government, institutional, and{" "}
                            <br className='hidden xl:block' />
                            residential spaces with trusted engineering{" "}
                            <br className='hidden xl:block' />
                            and modern design.
                        </p>
                    </Reveal>

                    {/* Primary Action Buttons */}
                    <Reveal direction='left' delay={0.6}>
                        <div className='flex flex-row items-center gap-6'>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className='bg-[#333333] hover:bg-black text-white text-xs sm:text-sm lg:text-base font-semibold py-3 px-6 md:px-8 transition-all duration-300 transform hover:scale-105 rounded-none tracking-wider'>
                                Contact us
                            </button>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("vision-mission")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className='text-[#333333] text-xs sm:text-sm lg:text-base font-bold bg-transparent border-none cursor-pointer tracking-wider hover:text-black transition-colors'>
                                Read more
                            </button>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column: Hero Image Display */}
                <div className='w-full md:w-1/2 h-[80vh] md:h-screen overflow-hidden relative'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={currentImageIndex}
                            src={heroImages[currentImageIndex]}
                            alt={`Construction Project ${currentImageIndex + 1
                                }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "linear" }}
                            className='w-full h-full object-cover object-center absolute inset-0'
                        />
                    </AnimatePresence>

                    {/* Carousel Indicators */}
                    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20'>
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImageIndex === index
                                        ? "bg-white w-8"
                                        : "bg-white/50 hover:bg-white"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section: Company overview and key metrics */}
            <section className='w-full bg-[#F2F9FD] py-16 px-6 md:px-12 lg:px-20 xl:px-32'>
                <div className='max-w-350 mx-auto'>
                    {/* Company Introduction Row */}
                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16'>
                        {/* Decorative Image Left */}
                        <div className='w-full lg:w-1/2'>
                            <Reveal
                                direction='left'
                                className='h-100 lg:h-150 mix-blend-multiply'>
                                <img
                                    src='/images/Frame 6.webp'
                                    alt='Architectural Blueprint Planning'
                                    className='w-full h-full object-cover object-center'
                                />
                            </Reveal>
                        </div>

                        {/* About Text Content Right */}
                        <div className='w-full lg:w-1/2 flex flex-col items-start text-left'>
                            <Reveal direction='right'>
                                <span className='text-gray-600 uppercase tracking-widest text-sm font-bold mb-4 block'>
                                    ABOUT US
                                </span>
                            </Reveal>
                            <Reveal direction='right' delay={0.2}>
                                <h2 className='text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#2b2b2b] leading-tight mb-8'>
                                    We deliver trusted & quality construction
                                    solutions
                                </h2>
                            </Reveal>
                            <Reveal direction='right' delay={0.4}>
                                <div className='text-gray-600 text-base leading-relaxed space-y-4 font-medium'>
                                    <p>
                                        Established nearly one decade ago in
                                        Thiruvananthapuram, Porticade Builders &
                                        Developers has grown into a trusted name
                                        in Kerala's construction and contracting
                                        industry.
                                    </p>
                                    <p>
                                        We specialize in government,
                                        institutional, architectural, and
                                        residential projects combining quality
                                        engineering, modern design, and on-site
                                        efficiency.
                                    </p>
                                    <p>
                                        Our strength lies in our people: a
                                        dynamic management team, expert
                                        engineers, skilled project managers, and
                                        trained technicians who work
                                        collaboratively to ensure quality,
                                        safety, and timely delivery in every
                                        project.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Key Statistics Grid */}
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                        <StatCard
                            number='10+'
                            label='Years of experience'
                            delay={0.1}
                        />
                        <StatCard
                            number='20+'
                            label='Total clients'
                            delay={0.3}
                        />
                        <StatCard
                            number='20+'
                            label='Government projects'
                            delay={0.5}
                        />
                        <StatCard
                            number='3+'
                            label='Residential/villa'
                            delay={0.7}
                        />
                    </div>
                </div>
            </section>

            {/* Modal Injection Point */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

const StatCard = ({ number, label, delay }) => (
    <Reveal direction='up' delay={delay}>
        <div className='relative bg-linear-to-br from-brand-light to-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 h-36 md:h-48 flex flex-col justify-end shadow-md overflow-hidden group hover:scale-105 transition-transform duration-300'>
            {/* Decorative Diagonal Line */}
            <div className='absolute -top-1.25 left-4 md:left-8 w-px h-20 bg-brand-dark rotate-45 origin-bottom-left transform -translate-x-1 -translate-y-1 block'></div>

            <h3 className='text-2xl md:text-3xl font-bold text-brand-dark mb-1 md:mb-2 relative z-10'>
                {number}
            </h3>
            <p className='text-brand-dark/80 text-sm md:text-lg font-medium relative z-10'>
                {label}
            </p>
        </div>
    </Reveal>
);

export default HeroSection;
