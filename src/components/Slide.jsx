import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ imageSrc, title, price, wholesalePrice }) => {
  return (
    <div className="w-full flex-shrink-0 flex flex-col items-center justify-center font-concert-one-regular">
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full h-[60vh] object-cover my-4"
        initial={{ scale: 1.1 }} // Ajuste para una ligera animación de escala
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="p-4 bg-green text-white w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Al detal: {price}
        </motion.p>
        <motion.p
          className="text-xl"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Al por mayor: {wholesalePrice}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Slide;
