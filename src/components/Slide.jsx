import React from "react";
import { motion } from "framer-motion";

const Slide = ({ imageSrc, title, price, wholesalePrice, showPrice = true, groupView = false, isTransitionImage = false }) => {
  // Animaciones de entrada posibles
  const entranceAnimations = [
    { y: -100, x: 0 },    // Desde arriba
    { y: 100, x: 0 },     // Desde abajo
    { y: 0, x: -100 },    // Desde izquierda
    { y: 0, x: 100 },     // Desde derecha
    { y: -100, x: -100 }, // Diagonal superior izquierda
    { y: -100, x: 100 },  // Diagonal superior derecha
    { y: 100, x: -100 },  // Diagonal inferior izquierda
    { y: 100, x: 100 }    // Diagonal inferior derecha
  ];

  // Selecciona una animación aleatoria
  const randomAnimation = entranceAnimations[
    Math.floor(Math.random() * entranceAnimations.length)
  ];

  // Si es la imagen de transición
  if (isTransitionImage) {
    return (
      <div className="w-full flex-shrink-0 flex items-center justify-center">
        <motion.img
          src="https://i.imgur.com/7TBmkAB.jpg"
          alt="Transición"
          className="h-full w-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            }
          }}
        />
      </div>
    );
  }
  return (
    <div className="w-full flex-shrink-0 flex flex-col items-center justify-center">
      <motion.img
        src={imageSrc}
        alt={title}
        className={`${groupView ? 'h-52 w-52' : 'h-[36vw] w-[36vw]'} p-2 object-contain mb-2 shadow-xl shadow-black rounded-full`}
        initial={{ 
          ...randomAnimation,
          opacity: 0,
          scale: 0.8
        }}
        animate={{ 
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { 
            duration: 0.8,
            type: "spring",
            stiffness: 300,
            damping: 12,
          }
        }}
      />
      <motion.div
        className="p-2 text-black w-full text-center flex flex-col items-center justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className={`text-${groupView ? '[25px] absolute z-30 bottom-[-5] mb-20 bg-[rgba(255,255,255,0.8)]' : '3xl'}  font-timotheos font-semibold text-fuchsia p-1 rounded-xl shadow-md shadow-black mb-2`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        {showPrice && (
          <div className="flex items-center justify-center font-timotheos font-semibold">
            <motion.p
              className="m-2 text-center text-[25px] text-green px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Al detal <br /> <span className="text-[40px] text-fuchsia">{price}</span>
            </motion.p>
            <p className="text-fuchsia text-[25px] mx-2 font-bold"> - </p>
            <motion.p
              className="m-2 text-center text-[25px] text-green px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Al por mayor <span className="text-[25px] text-fuchsia ">(A partir de 15 unidades)</span> <br /><span className="text-[40px] text-fuchsia">{wholesalePrice}</span>
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Slide;