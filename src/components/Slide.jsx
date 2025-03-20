import React from "react";
import { motion } from "framer-motion";

const Slide = ({ imageSrc, title, price, wholesalePrice }) => {
  return (
    <div className="w-full flex-shrink-0 flex flex-col items-center justify-center">
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full h-[60vh] object-cover my-4 shadow-xl shadow-black rounded-xl"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="p-2 text-black w-full text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-bold text-fuchsia p-2 rounded-xl shadow-md shadow-black mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        <div className="flex items-center justify-center">
          {" "}
          <motion.p
            className="text-xl bg-fuchsia text-white px-2 py-1 rounded-lg shadow-lg shadow-black"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Precio por unidad: {price}
          </motion.p>
          <p className="text-fuchsia text-[30px] mx-2 font-bold" > / </p>
          <motion.p
            className="text-xl bg-fuchsia text-white px-2 py-1 rounded-lg shadow-lg shadow-black"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Precio al por mayor: {wholesalePrice}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Slide;
