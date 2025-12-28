const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/*Background Backdrop: Darkens the background */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container: Holds the content split into two sections */}
            <div className="relative z-10 w-full max-w-5xl bg-sky-50 rounded-[30px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto lg:overflow-visible">

                {/* Mobile Close Button: Visible only on small screens */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 lg:hidden p-2 text-gray-500 hover:text-gray-800 bg-white/50 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Info Section: Company details and social links */}
                <div className="w-full lg:w-5/12 p-8 lg:p-12 text-gray-800 flex flex-col gap-8 bg-sky-50">
                    <h2 className="text-3xl font-bold mb-2">Contact us</h2>

                    <div className="space-y-1 text-sm md:text-base leading-relaxed font-medium">
                        <p className="uppercase font-semibold">PORTICADE BUILDERS & DEVELOPERS</p>
                        <p className="uppercase font-semibold">PRIVATE LIMITED Nalachira -</p>
                        <p>Chenchery Rd, Nalanchira,</p>
                        <p>Mannanthala,</p>
                        <p>Thiruvananthapuram, Kerala</p>
                        <p>695015, India</p>
                    </div>

                    <div className="space-y-4 font-medium text-sm md:text-base">
                        <p>Phone : +91 9895 60151</p>
                        <p>Email Address : porticade.builders@gmail.com</p>
                    </div>

                    <div className="mt-4">
                        <p className="font-bold mb-4">Follow us</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/people/Porticade-Builders/61585167496393/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors">
                                <img src="/icons/facebook.svg" alt="Facebook" className="w-4 h-4 opacity-70" />
                            </a>
                            <a href="https://www.instagram.com/porticade_55/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bfdce3] hover:bg-[#aaccf0] transition-colors">
                                <img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4 opacity-70" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Form Section: Intake form for user messages */}
                <div className="w-full lg:w-7/12 bg-white p-8 lg:p-12 rounded-[30px] m-2 shadow-sm">

                    {/* Desktop Close Button: Visible only on large screens */}
                    <button
                        onClick={onClose}
                        className="hidden lg:block absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                        <p className="text-gray-500 text-sm font-medium">You can reach us anytime</p>
                    </div>

                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 rounded-full border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 rounded-full border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email ID"
                            className="w-full px-4 py-3 rounded-full border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                        />

                        <div className="flex w-full px-4 py-3 rounded-full border border-gray-200 text-gray-700 text-sm focus-within:border-gray-400 transition-colors bg-white items-center">
                            <span className="text-gray-500 mr-2 font-medium">+91</span>
                            <div className="w-px h-4 bg-gray-300 mx-2"></div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="flex-1 outline-none bg-transparent"
                            />
                        </div>

                        <textarea
                            rows="4"
                            placeholder="How can we help?"
                            className="w-full px-4 py-4 rounded-[20px] border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#2B3431] text-white font-bold text-sm py-3.5 rounded-full hover:bg-black transition-transform active:scale-[0.99]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
