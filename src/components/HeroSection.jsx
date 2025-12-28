import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import ContactModal from './ContactModal';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-full font-sans overflow-x-hidden">

            {/* Primary Hero Section: Landing view with main branding */}
            <section className="relative w-full min-h-screen flex flex-col md:flex-row">

                {/* Left Column: Text content, Logo, and CTA */}
                <div className="w-full md:w-1/2 bg-[#F2F9FD] px-6 py-12 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center items-start z-10 md:h-screen">

                    {/* Brand Logo */}
                    <Reveal direction="left" className="mb-10 md:mb-12 lg:mb-16">
                        <img
                            src="/images/logo.png"
                            alt="Porticade Builders Logo"
                            className="w-28 md:w-32 lg:w-40 object-contain"
                        />
                    </Reveal>

                    {/* Headline Text */}
                    <Reveal direction="left" delay={0.2}>
                        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.2] md:leading-[1.1] mb-6 tracking-tight">
                            Building Kerala’s Future <br className="hidden lg:block" />
                            With Precision & <br className="hidden lg:block" />
                            Integrity
                        </h1>
                    </Reveal>

                    {/* Subheadline Description */}
                    <Reveal direction="left" delay={0.4}>
                        <p className="text-gray-500 text-sm sm:text-base md:text-sm lg:text-lg font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                            Crafting Government, Institutional, And <br className="hidden xl:block" />
                            Residential Spaces With Trusted Engineering <br className="hidden xl:block" />
                            And Modern Design.
                        </p>
                    </Reveal>

                    {/* Primary Action Buttons */}
                    <Reveal direction="left" delay={0.6}>
                        <div className="flex flex-row items-center gap-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#333333] hover:bg-black text-white text-xs sm:text-sm lg:text-base font-semibold py-3 px-6 md:px-8 transition-all duration-300 transform hover:scale-105 rounded-none tracking-wider"
                            >
                                GET IN TOUCH
                            </button>

                            <button
                                onClick={() => document.getElementById('vision-mission')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-[#333333] text-xs sm:text-sm lg:text-base font-bold bg-transparent border-none cursor-pointer tracking-wider hover:text-black transition-colors"
                            >
                                READ MORE
                            </button>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column: Hero Image Display */}
                <div className="w-full md:w-1/2 h-[80vh] md:h-screen overflow-hidden">
                    <Reveal direction="right" className="w-full h-full">
                        <img
                            src="/images/Rectangle 1.webp"
                            alt="Modern Luxury Home with Pool"
                            className="w-full h-full object-cover object-center"
                        />
                    </Reveal>
                </div>
            </section>

            {/* About Us Section: Company overview and key metrics */}
            <section className="w-full bg-[#F2F9FD] py-16 px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="max-w-350 mx-auto">

                    {/* Company Introduction Row */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">

                        {/* Decorative Image Left */}
                        <div className="w-full lg:w-1/2">
                            <Reveal direction="left" className="h-100 lg:h-150 mix-blend-multiply">
                                <img
                                    src="/images/Frame 6.webp"
                                    alt="Architectural Blueprint Planning"
                                    className="w-full h-full object-cover object-center"
                                />
                            </Reveal>
                        </div>

                        {/* About Text Content Right */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                            <Reveal direction="right">
                                <span className="text-gray-600 uppercase tracking-widest text-sm font-bold mb-4 block">
                                    ABOUT US
                                </span>
                            </Reveal>
                            <Reveal direction="right" delay={0.2}>
                                <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#2b2b2b] leading-tight mb-8">
                                    We Deliver Trusted & Quality Construction Solutions
                                </h2>
                            </Reveal>
                            <Reveal direction="right" delay={0.4}>
                                <div className="text-gray-600 text-base leading-relaxed space-y-4 font-medium">
                                    <p>
                                        Established Nearly One Decade Ago In Thiruvananthapuram, Porticade Builders & Developers Has Grown Into A Trusted Name In Kerala's Construction And Contracting Industry.
                                    </p>
                                    <p>
                                        We Specialize In Government, Institutional, Architectural, And Residential Projects Combining Quality Engineering, Modern Design, And On-Site Efficiency.
                                    </p>
                                    <p>
                                        Our Strength Lies In Our People: A Dynamic Management Team, Expert Engineers, Skilled Project Managers, And Trained Technicians Who Work Collaboratively To Ensure Quality, Safety, And Timely Delivery In Every Project.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Key Statistics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Reveal direction="left" delay={0.1}>
                            <StatCard number="10+" label="Years Of Experience" />
                        </Reveal>
                        <Reveal direction="left" delay={0.3}>
                            <StatCard number="20+" label="Total Clients" />
                        </Reveal>
                        <Reveal direction="left" delay={0.5}>
                            <StatCard number="20+" label="Government Projects" />
                        </Reveal>
                        <Reveal direction="left" delay={0.7}>
                            <StatCard number="3+" label="Residential/Villa" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Modal Injection Point */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

/* Animated Statistic Card Component */
const StatCard = ({ number, label }) => {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);

    const targetValue = parseInt(number);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= targetValue) {
                            clearInterval(timer);
                        }
                    }, 100);

                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, [targetValue]);

    return (
        <div ref={cardRef} className="relative bg-linear-to-br from-brand-light to-white rounded-2xl p-8 h-48 flex flex-col justify-end shadow-md overflow-hidden group hover:scale-105 transition-transform duration-300">
            {/* Decorative Diagonal Line */}
            <div className="absolute -top-1.25 left-8 w-px h-20 bg-brand-dark rotate-45 origin-bottom-left transform -translate-x-1 -translate-y-1"></div>

            <h3 className="text-3xl font-bold text-brand-dark mb-2 relative z-10">
                {count}+
            </h3>
            <p className="text-brand-dark/80 text-lg font-medium relative z-10">{label}</p>
        </div>
    );
};

export default HeroSection;