import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ showExerciseDescription, handleCloseModal }) {
    const { name, description } = showExerciseDescription || {}

    return createPortal(
        <AnimatePresence>
            {showExerciseDescription && (
                <motion.div className='modal-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.button 
                        className='modal-underlay' 
                        onClick={handleCloseModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.div 
                        className='modal-content'
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <h6>Name</h6>
                            <h2 className='skill-name'>{name.replaceAll('-', ' ')}</h2>
                        </div>
                        <div>
                            <h6>Description</h6>
                            <p>{description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.getElementById('portal')
    )
}
