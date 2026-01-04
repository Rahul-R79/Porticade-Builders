import { useState } from 'react';
import Reveal from './Reveal';
import ContactModal from './ContactModal';

const ContactSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // Section Container: Main wrapper for contact section 
        <section className="bg-sky-50 py-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full space-y-20">

                {/* Call to Action Card: Displays large image and contact button  */}
                <Reveal className="relative w-full h-[400px] rounded-[40px] overflow-hidden group">
                    {/* Background Image with blur effect */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 blur-[3px]"
                        style={{ backgroundImage: "url('/images/contact.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content Overlay: Text and Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight">
                            Ready to build your dream?
                        </h2>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-10 leading-tight">
                            Schedule our consultation today
                        </h2>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-3 font-medium hover:bg-gray-100 transition-colors group/btn cursor-pointer"
                        >
                            Contact us
                            <span className="bg-black text-white rounded-full p-1 transition-transform group-hover/btn:translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </Reveal>

                {/* Office Info & Map Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side: Office Address Details */}
                    <Reveal className="lg:w-1/3 space-y-6 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-gray-800">Our Office</h3>
                        <div className="text-gray-600 space-y-1 leading-relaxed text-lg">
                            <p className="font-semibold text-gray-800">PORTICADE BUILDERS &</p>
                            <p className="font-semibold text-gray-800">DEVELOPERS PRIVATE LIMITED</p>
                            <p>Nalanchira - Chenchery Rd,</p>
                            <p>Nalanchira, Mannanthala,</p>
                            <p>Thiruvananthapuram, Kerala</p>
                            <p>695015, India</p>
                        </div>
                    </Reveal>

                    {/* Right Side: Google Map Embed */}
                    <Reveal direction="right" className="lg:w-2/3 w-full h-[400px] rounded-[40px] overflow-hidden shadow-sm border border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.748684620023!2d76.944445!3d8.544667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b96b0377b4b1%3A0x60b463acb5781b2a!2sPORTICADE%20BUILDERS%20%26%20DEVELOPERS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1709923456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </Reveal>

                </div>

            </div>

            {/* Modal Component: Opens on click */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default ContactSection;
