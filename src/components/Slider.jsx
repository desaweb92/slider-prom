import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slide from "./Slide";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGroup, setShowGroup] = useState(false);
  const [currentType, setCurrentType] = useState("normal");
  const [showCategoryTitle, setShowCategoryTitle] = useState(false);

  // Componente para animar cada letra
  const AnimatedLetter = ({ children }) => {
    return (
      <motion.span
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 600,
            damping: 4,
          },
        }}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    );
  };

  // Efecto para mostrar el título al cambiar de categoría
  useEffect(() => {
    setShowCategoryTitle(true);
    const timer = setTimeout(() => setShowCategoryTitle(false), 3000);
    return () => clearTimeout(timer);
  }, [currentType]);

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
      showGroup ? 20000 : 5000
    );
    return () => clearInterval(interval);
  }, [slides, currentIndex, showGroup, currentType]);

  const currentSlide = slides[currentIndex];
  const groupSlides = slides.filter((slide) => slide.type === currentType);

  // Estilos para los letreros
  const categoryTitles = {
    normal: "NORMALES",
    special: "ESPECIALES",
    superSpecial: "SUPER ESPECIALES",
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
      <AnimatePresence>
        {showCategoryTitle && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              currentType === "normal"
                ? "bg-fuchsia"
                : currentType === "special"
                ? "bg-green"
                : "bg-yellow-200"
            } bg-opacity-90`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className={`text-6xl md:text-8xl text-center font-timotheos font-semibold ${
                currentType === "normal"
                  ? "text-white"
                  : currentType === "special"
                  ? "text-fuchsia"
                  : "text-purple-900"
              }`}
            >
              {categoryTitles[currentType].split("").map((letter, index) => (
                <AnimatedLetter key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </AnimatedLetter>
              ))}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      {!showGroup && (
        <>
          {currentSlide.type === "normal" && (
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              Normales
            </h1>
          )}
          {currentSlide.type === "special" && (
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              Especiales
            </h1>
          )}
          {currentSlide.type === "superSpecial" && (
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              Super Especiales
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
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              normales
            </h1>
          )}
          {currentType === "special" && (
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              especiales
            </h1>
          )}
          {currentType === "superSpecial" && (
            <h1 className="font-timotheos font-semibold text-3xl mb-4 text-green p-2 rounded-xl shadow-md shadow-black">
              super especiales
            </h1>
          )}
          <div className="w-[90%] y-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2">
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
          <div className="my-4 flex items-center justify-center overflow-hidden font-timotheos font-semibold">
            <motion.p
              className="m-2 text-center text-[25px]  text-green px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 1 }}
            >
              Al detal <br />{" "}
              <span className="text-[25px] text-fuchsia">
                {groupSlides[0].price}
              </span>
            </motion.p>
            <p className="text-fuchsia text-[30px] mx-2 font-bold"> - </p>
            <motion.p
              className="m-2 text-center text-[25px]  text-green px-2 py-1 rounded-lg shadow-lg shadow-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 1 }}
            >
              Al por mayor{" "}
              <span className="text-[18px] text-fuchsia">
                (A partir de 15 unidades)
              </span>{" "}
              <br />
              <span className="text-[25px] text-fuchsia">
                {" "}
                {groupSlides[0].wholesalePrice}
              </span>
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
