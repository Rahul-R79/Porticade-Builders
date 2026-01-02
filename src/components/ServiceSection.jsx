import Reveal from './Reveal';

const ServiceSection = () => {
    return (
        <section className="w-full bg-[#F2F9FD] py-20 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* CIVIL & INFRASTRUCTURE WORKS */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Left */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="left">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 leading-tight">
                                Civil & infrastructure <br /> works
                            </h2>
                        </Reveal>
                        <Reveal direction="left" delay={0.2}>
                            <p className="text-gray-600 font-medium text-base mb-8 leading-relaxed">
                                Our civil division forms the backbone of Porticade. We deliver solid, lasting construction for government and private developments — from foundations and structures to roads and utilities.
                            </p>
                        </Reveal>
                        <Reveal direction="left" delay={0.4}>
                            <ul className="space-y-4">
                                {['Site clearing, grading & foundation works', 'Reinforced concrete and block masonry', 'Drainage, paving, and road development', 'Structural rehabilitation and waterproofing'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                                            <img src="/icons/tick.svg" alt="Check" className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Images Right */}
                    <div className="w-full lg:w-1/2 relative h-[500px]">
                        {/* Main Image (Building Frame) */}
                        <Reveal direction="right" className="absolute top-10 left-0 w-[70%] h-[400px] z-10">
                            <div className="rounded-[2rem] overflow-hidden shadow-xl h-full w-full">
                                <img src="/images/1122.jpg" alt="Building Construction Frame" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>

                        {/* Overlay Image (Engineers) */}
                        <Reveal direction="up" delay={0.3} className="absolute -top-4 right-0 w-[55%] h-[280px] z-20">
                            <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl h-full w-full">
                                <img src="/images/Rectangle 14.webp" alt="Civil Engineers on Site" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>
                    </div>
                </div>


                {/* VILLA PROJECTS */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    {/* Text Right */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="right">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 leading-tight">
                                Villa projects
                            </h2>
                        </Reveal>
                        <Reveal direction="right" delay={0.2}>
                            <p className="text-gray-600 font-medium text-base mb-8 leading-relaxed">
                                Our villa projects combine Kerala’s architectural elegance with modern design sensibilities. Every home we build is unique — customized to the client’s needs and lifestyle.
                            </p>
                        </Reveal>
                        <Reveal direction="right" delay={0.4}>
                            <ul className="space-y-4">
                                {['Custom planning & structural design', 'Turnkey construction', 'Landscaping & lighting integration', 'Interior and exterior finishing', 'Sustainable materials and smart home options'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                                            <img src="/icons/tick.svg" alt="Check" className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>

                    {/* Images Left */}
                    <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
                        {/* Background Grey Rectangle */}
                        <Reveal direction="left" className="absolute top-[-20px] left-[-20px]">
                            <img src="/images/Rectangle 10.png" alt="" className="w-40 h-auto opacity-80" />
                        </Reveal>

                        {/* Dot Pattern */}
                        <Reveal direction="up" delay={0.2} className="absolute top-1/2 right-10 transform -translate-y-1/2 z-0">
                            <img src="/images/Frame 43.png" alt="Dots" className="w-24 opacity-60" />
                        </Reveal>

                        {/* Main Image (Large Villa) */}
                        <Reveal direction="left" className="absolute top-4 left-6 w-[65%] h-[380px] z-10">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-full w-full">
                                <img src="/images/Rectangle 8.webp" alt="Luxury Villa Main" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>

                        {/* Side Sub Image (Detail) - Bottom Right Overlay */}
                        <Reveal direction="up" delay={0.4} className="absolute bottom-10 right-0 w-[55%] h-[180px] z-20">
                            <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl h-full w-full">
                                <img src="/images/Rectangle 9.jpg" alt="Villa Detail" className="w-full h-full object-cover" />
                            </div>
                        </Reveal>
                    </div>
                </div>


                {/* PROJECT MANAGEMENT */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Image Left */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="right" className="w-full h-[400px] md:h-[500px]">
                            <div className="rounded-[3rem] overflow-hidden w-full h-full shadow-lg">
                                <img src="/images/Frame 6.jpg" alt="Project Management Team" className="w-full h-full object-cover object-top" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Text Right */}
                    <div className="w-full lg:w-1/2">
                        <Reveal direction="left">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 leading-tight">
                                Project management
                            </h2>
                        </Reveal>
                        <Reveal direction="left" delay={0.2}>
                            <p className="text-gray-600 font-medium text-base mb-8 leading-relaxed">
                                Our project management team ensures every phase — from tender to completion — is handled with efficiency, quality, and transparency.
                            </p>
                        </Reveal>
                        <Reveal direction="left" delay={0.4}>
                            <ul className="space-y-4">
                                {['Scheduling & cost control', 'Material sourcing & logistics', 'Quality and compliance checks', 'Client communication & reporting'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                                            <img src="/icons/tick.svg" alt="Check" className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-900 font-semibold text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceSection;
