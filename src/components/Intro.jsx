import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "./Slider";
import pagina1 from "../assets/images/pagina-compl.png";
import pagina2 from "../assets/images/pagina-principal.png";
import logo from "../assets/images/logo.png";

const Intro = ({ slides }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const videoRef = useRef(null);

  // URL del video (usa i.imgur.com para mejor compatibilidad)
  const videoUrl = "https://i.imgur.com/vOjoSMc.mp4";

  // Efecto para manejar la reproducción continua del video
  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      if (video && video.paused) {
        video.play().catch(error => {
          console.warn("Auto-play prevenido:", error);
        });
      }
    };

    // Configuración inicial
    if (video) {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      handlePlay();
    }

    // Event listeners
    const events = [
      'play',
      'pause',
      'ended',
      'visibilitychange'
    ];

    const forcePlay = () => {
      if (document.visibilityState === 'visible') {
        handlePlay();
      }
    };

    events.forEach(event => {
      if (event === 'visibilitychange') {
        document.addEventListener(event, forcePlay);
      } else {
        video?.addEventListener(event, handlePlay);
      }
    });

    // Intervalo de seguridad
    const interval = setInterval(handlePlay, 3000);

    return () => {
      clearInterval(interval);
      events.forEach(event => {
        if (event === 'visibilitychange') {
          document.removeEventListener(event, forcePlay);
        } else {
          video?.removeEventListener(event, handlePlay);
        }
      });
    };
  }, []);

  // Efecto para las transiciones de imágenes
  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setShowSecondImage(true);
    }, 3000);

    const secondTimer = setTimeout(() => {
      setShowSlider(true);
    }, 6000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-white font-concert-one-regular">
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        onPause={(e) => e.target.play()}
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </motion.video>

      {/* Primera imagen (transición inicial) */}
      <AnimatePresence>
        {!showSecondImage && (
          <motion.img
            key="intro"
            src={pagina1}
            alt="Intro"
            className="absolute inset-0 w-full h-full object-cover z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Segunda imagen (transición intermedia) */}
      <AnimatePresence>
        {showSecondImage && !showSlider && (
          <motion.img
            key="secondImage"
            src={pagina2}
            alt="Second Image"
            className="absolute inset-0 w-full h-full object-contain z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Slider (contenido final) */}
      <AnimatePresence>
        {showSlider && (
          <motion.div
            key="slider"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-20"
          >
            <Slider slides={slides} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo (aparece con el slider) */}
      {showSlider && (
        <motion.img
          src={logo}
          alt="Logo"
          className="absolute bottom-4 right-4 w-36 h-36 object-contain z-30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default Intro;