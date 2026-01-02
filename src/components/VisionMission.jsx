import Reveal from './Reveal';

const VisionMission = () => {
    return (
        <section id="vision-mission" className="w-full bg-[#2D3333] py-20 px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* VISION SECTION */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Images - Left */}
                    <div className="w-full lg:w-1/2 relative">
                        <Reveal direction="left" className="relative z-10">
                            <div className="rounded-[3rem] overflow-hidden w-[90%] h-100 sm:h-125">
                                <img
                                    src="/images/Rectangle 5.jpg"
                                    alt="Vision Main - Engineer on site"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </Reveal>

                        {/* Overlay Image */}
                        <Reveal direction="up" delay={0.3} className="absolute -bottom-16 -right-4 z-20 w-[60%] sm:w-[55%]">
                            <div className="rounded-4xl overflow-hidden border-[6px] border-white/90 shadow-2xl h-62.5 sm:h-75">
                                <img
                                    src="/images/Rectangle 6.jpg"
                                    alt="Vision Overlay - Digital Planning"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Text - Right */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <Reveal direction="right">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wide">
                                VISION
                            </h2>
                        </Reveal>
                        <Reveal direction="right" delay={0.2}>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                To become Kerala’s most trusted and innovative construction partner, known for delivering quality-driven projects that shape better communities. We aim to expand our presence across government and private sectors while staying committed to engineering excellence, sustainable practices, and long-term client relationships.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* MISSION SECTION */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                    {/* Images - Right */}
                    <div className="w-full lg:w-1/2 relative flex justify-end">
                        <Reveal direction="right" className="relative z-10 w-full flex justify-end">
                            <div className="rounded-[3rem] overflow-hidden w-[90%] h-100 sm:h-125">
                                <img
                                    src="/images/Rectangle 5.webp"
                                    alt="Mission Main"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </Reveal>

                        {/* Overlay Image */}
                        <Reveal direction="up" delay={0.3} className="absolute -bottom-16 -left-4 z-20 w-[60%] sm:w-[55%]">
                            <div className="rounded-4xl overflow-hidden border-[6px] border-white/90 shadow-2xl h-62.5 sm:h-75">
                                <img
                                    src="/images/111.jpg"
                                    alt="Mission Overlay"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </Reveal>
                    </div>

                    {/* Text - Left */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <Reveal direction="left">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-wide">
                                MISSION
                            </h2>
                        </Reveal>
                        <Reveal direction="left" delay={0.2}>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                Our mission is to deliver every project with integrity, transparency, and exceptional quality by integrating modern design with strong construction practices. We are committed to completing government, institutional, and residential projects on time while upholding the highest safety standards. Through continuous innovation, responsible engineering, and advanced technologies, we aim to enhance efficiency, reduce environmental impact, and build long-lasting relationships based on trust, reliability, and value.
                            </p>
                        </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
