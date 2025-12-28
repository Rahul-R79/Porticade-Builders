
const Footer = () => {
    return (
        /* Main Footer Container */
        <footer className="relative bg-gray-50 text-gray-800 pt-16 pb-8 overflow-hidden font-sans">

            {/* Background Overlay: Fixed alignment image with opacity overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/images/Background.jpg')" }}
            >
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

                {/* Upper content section: Address, Contact, Socials */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-10">

                    {/* Company Physical Address Column */}
                    <div className="lg:w-1/3 text-[13px] leading-relaxed font-semibold text-gray-800 tracking-wide uppercase">
                        <p>PORTICADE BUILDERS & DEVELOPERS PRIVATE</p>
                        <p>LIMITED Nalachira - Chenchery Rd,</p>
                        <p>Nalanchira, Mannanthala,</p>
                        <p>Thiruvananthapuram, Kerala 695015, India</p>
                    </div>

                    {/* Direct Contact Information Column */}
                    <div className="lg:w-1/3 flex flex-col gap-3 text-sm font-semibold text-gray-800 lg:text-center items-start lg:items-center">
                        <p>Phone : +91 9895 60151</p>
                        <p>Email Address : porticade.builders@gmail.com</p>
                    </div>

                    {/* Social Media Links Column */}
                    <div className="lg:w-1/3 flex gap-4 lg:justify-end w-full">
                        <a href="https://www.facebook.com/people/Porticade-Builders/61585167496393/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors">
                            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5 opacity-80" />
                        </a>
                        <a href="https://www.instagram.com/porticade_55/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors">
                            <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5 opacity-80" />
                        </a>
                    </div>
                </div>

                {/* Aesthetic Divider Line */}
                <div className="w-full h-px bg-gray-300 mb-8"></div>

                {/* Lower Footer: Copyright and Branding */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm font-semibold text-gray-700">

                    {/* Licensing and Copyright Text */}
                    <div className="text-gray-700">
                        &copy; 2025 Porticade Builders. All rights reserved.
                    </div>

                    {/* Developer Branding */}
                    <div className="flex gap-1 items-center">
                        Powered by <a href="https://ducbotinnovations.com/" target="_blank" rel="noopener noreferrer" className="text-[#0099ff] font-bold text-lg">Ducbot</a>
                    </div>

                    {/* Company Logo Mark */}
                    <div>
                        <img src="/images/logo.png" alt="Porticade Logo" className="h-16 object-contain" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
