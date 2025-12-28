import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialWidget = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        let timer;
        if (isExpanded) {
            timer = setTimeout(() => {
                setIsExpanded(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [isExpanded]);

    const handleClick = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
            onClick={handleClick}
        >
            <motion.div
                className="bg-[#555555] rounded-full shadow-xl overflow-hidden cursor-pointer relative"
                initial={false}
                animate={{
                    height: isExpanded ? 130 : 60,
                    width: 60,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <AnimatePresence mode="wait">
                    {isExpanded ? (
                        <motion.div
                            key="expanded"
                            className="flex flex-col items-center justify-center h-full w-full gap-4 py-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Phone Button */}
                            <a
                                href="tel:+919895631515"
                                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.49-5.15-3.8-6.64-6.64l1.97-1.57c.26-.26.35-.62.24-1.01-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3.28 3 3.93 3 4.74c0 10.66 8.64 19.3 19.3 19.3.81 0 1.46-.65 1.46-1.19v-6.48c0-.54-.45-.99-.99-.99z" />
                                </svg>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/966553447136"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white/20 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="collapsed"
                            className="flex items-center justify-center w-full h-full text-white"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default SocialWidget;
