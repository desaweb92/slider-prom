import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Slide";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGroup, setShowGroup] = useState(false);
  const [currentType, setCurrentType] = useState("normal");

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (showGroup) {
          setShowGroup(false);
          if (currentType === "normal") {
            setCurrentType("special");
            setCurrentIndex(
              slides.findIndex((slide) => slide.type === "special")
            );
          } else if (currentType === "special") {
            setCurrentType("superSpecial");
            setCurrentIndex(
              slides.findIndex((slide) => slide.type === "superSpecial")
            );
          } else {
            setCurrentIndex(0);
            setCurrentType("normal");
          }
        } else {
          setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (
              nextIndex >= slides.length ||
              slides[nextIndex].type !== currentType
            ) {
              setShowGroup(true);
              return prevIndex;
            }
            return nextIndex;
          });
        }
      },
      showGroup ? 30000 : 5000
    ); // 30 segundos para grupos, 5 segundos para individuales

    return () => clearInterval(interval);
  }, [slides, currentIndex, showGroup, currentType]);

  const currentSlide = slides[currentIndex];
  const groupSlides = slides.filter((slide) => slide.type === currentType);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      {!showGroup && (
        <>
          {currentSlide.type === "normal" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados Normales
            </h1>
          )}
          {currentSlide.type === "special" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados Especiales
            </h1>
          )}
          {currentSlide.type === "superSpecial" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados Super Especiales
            </h1>
          )}
          <AnimatePresence initial={false} custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0 }}
            >
              <Slide {...slides[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </>
      )}
      {showGroup && (
        <>
          {currentType === "normal" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados normales
            </h1>
          )}
          {currentType === "special" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados especiales
            </h1>
          )}
          {currentType === "superSpecial" && (
            <h1 className="text-3xl font-bold mb-4 text-green p-2 rounded-xl shadow-md shadow-black bg-[#f7efefdc]">
              Helados super especiales
            </h1>
          )}
          <div className="w-[80%] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
            {groupSlides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Slide {...slide} showPrice={false} groupView={true} />
              </motion.div>
            ))}
          </div>
          <div className="my-4 flex items-center justify-center overflow-hidden">
            <motion.p
              className="m-2 text-center text-xl bg-fuchsia text-white px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 1 }}
            >
              Al detal <br /> {groupSlides[0].price}
            </motion.p>
            <p className="text-fuchsia text-[30px] mx-2 font-bold"> - </p>
            <motion.p
              className="m-2 text-center text-xl bg-fuchsia text-white px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 1 }}
            >
              Al por mayor{" "}
              <span className="text-[15px]">(A partir de 15 unidades)</span>{" "}
              <br />
              {groupSlides[0].wholesalePrice}
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
