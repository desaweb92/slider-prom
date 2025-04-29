import React from "react";
import { motion } from "framer-motion";

const Slide = ({ imageSrc, title, price, wholesalePrice, showPrice = true, groupView = false }) => {
  return (
    <div className="w-full flex-shrink-0 flex flex-col items-center justify-center">
      <motion.img
        src={imageSrc}
        alt={title}
        className={` ${groupView ? 'h-40 w-40 bg-[#fafafabe]' : 'h-[36vw] w-[36vw]'} p-2 object-contain my-2 shadow-xl shadow-black rounded-full`} // Ajustar el tamaño de la imagen
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="p-2 text-black w-full text-center flex flex-col items-center justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className={`text-${groupView ? 'xl' : '3xl'} font-timotheos font-semibold text-fuchsia p-2 rounded-xl shadow-md shadow-black mb-2`}
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
              Al detal <br /> <span className="text-[30px] text-fuchsia">{price}</span>
            </motion.p>
            <p className="text-fuchsia text-[30px] mx-2 font-bold"> - </p>
            <motion.p
              className="m-2 text-center text-[25px] text-green px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Al por mayor <span className="text-[20px] text-fuchsia ">(A partir de 15 unidades)</span> <br /><span className="text-[30px] text-fuchsia">{wholesalePrice}</span>
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Slide;
