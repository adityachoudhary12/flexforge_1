import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <motion.section 
            className="hero-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1 
                className="text-gradient center-text"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Welcome to the Brogram 🏋️‍♂️
            </motion.h1>

            <motion.p 
                className="subheading center-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                A 30-day training plan designed to make you <strong>fit</strong>, <strong>strong</strong>, and <strong>shredded</strong>.
            </motion.p>

            <motion.div 
                className="benefits"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.6, staggerChildren: 0.2 } }
                }}
            >
                <h3>Why Follow This?</h3>
                <ul className="benefits-list">
                    <motion.li>✅ Follow a simple program with guaranteed results</motion.li>
                    <motion.li>🔥 Get fit, healthy, strong and shredded</motion.li>
                    <motion.li>📚 Learn proper gym techniques and form</motion.li>
                    <motion.li>💪 Become a lifetime gym bro</motion.li>
                </ul>
            </motion.div>

            <motion.div 
                className="split-preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <h3>The Bro Split</h3>
                <p><strong><i>Push → Pull → Legs → Repeat</i></strong></p>
                <p>Repeat this rotation for 30 days. Track progress, improve, and dominate.</p>
            
            </motion.div>
        </motion.section>
    )
}
