import { motion } from 'framer-motion';

// Reveal Component: Wraps children with a slide-in animation
const Reveal = ({ children, direction = "left", duration = 0.8, delay = 0, className = "" }) => {
    const xHidden = direction === "left" ? -100 : 100;

    return (
        <motion.div
            className={className}
            initial={{ x: xHidden, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
