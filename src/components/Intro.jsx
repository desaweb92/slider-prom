import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from './Slider';
import pagina1 from "../assets/images/pagina-compl.png";
import pagina2 from "../assets/images/pagina-principal.png";

const Intro = ({ slides, normalCount }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowSecondImage(true);
    }, 3000); // Tiempo para la primera transición

    const secondTimer = setTimeout(() => {
      setShowSlider(true);
    }, 6000); // Tiempo total antes de mostrar el slider

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-fuchsia flex flex-col items-center justify-center text-white font-concert-one-regular">
      <AnimatePresence>
        {!showSecondImage && (
          <motion.img
            key="intro"
            src={pagina1}
            alt="Intro"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSecondImage && !showSlider && (
          <motion.img
            key="secondImage"
            src={pagina2}
            alt="Second Image"
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSlider && (
          <motion.div
            key="slider"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          >
            <Slider slides={slides} normalCount={normalCount}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Intro;
