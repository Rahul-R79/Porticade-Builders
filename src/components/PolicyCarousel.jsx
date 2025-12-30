import { useState, useEffect } from 'react';

const policies = [
    {
        title: "Terms & Conditions",
        text: "All Works Are Carried Out As Per Approved Quotations, Tenders, And Designs. Any Modifications In Design, Material, Or Scope During Execution Will Be Treated As Additional Works And Charged Accordingly"
    },
    {
        title: "Privacy Policy",
        text: "Porticade respects the confidentiality of clientdata,design concepts, and project details. Informationcollected is used solely for communicationandservicedelivery purposes."
    },
    {
        title: "Refund Policy",
        text: "Payments made toward project mobilization, designfees, or material procurement are non-refundableonce work has commenced. Refunds, if applicable,willbe processed based on project stageandmanagement discretion."
    }
];

const PolicyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % policies.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        /* Policy Section Container */
        <section className="bg-sky-50 py-20 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Main Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-12 tracking-wide uppercase">
                    Policies
                </h2>

                {/* Carousel Wrapper */}
                <div className="w-full relative">
                    <div className="overflow-hidden">
                        {/* Sliding Track */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {policies.map((policy, index) => (
                                <div key={index} className="w-full shrink-0 px-4">
                                    {/* Policy Card */}
                                    <div className="bg-linear-to-b from-gray-500 to-[#2B3431] p-8 md:p-12 lg:p-16 rounded-3xl text-center min-h-75 flex flex-col items-center justify-center">
                                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">
                                            {policy.title}
                                        </h3>
                                        {/* Separator Line */}
                                        <div className="w-full max-w-md h-px bg-gray-200 mb-8 mx-auto"></div>
                                        <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                                            {policy.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {policies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolicyCarousel;
