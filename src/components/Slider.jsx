import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from './Slide';

const Slider = ({ slides, normalCount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Cambia el tiempo según tus necesidades
    return () => clearInterval(interval);
  }, [slides.length]);

  const isSpecialSlide = currentIndex >= normalCount;

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        {isSpecialSlide ? 'Helados Especiales' : 'Helados Normales'}
      </h1>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: { opacity: 0, x: 100 },
            center: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
        >
          <Slide {...slides[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
