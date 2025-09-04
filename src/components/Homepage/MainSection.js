import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LetterAnimation from './LetterAnimation';
import './mainsection.css';

const MainSection = () => {
  const words = [
    "RELIGIOUS",
    "SPIRITUAL",
    "STUDENT SUPPORT",
    "CAREER SUPPORT",
    "NETWORKING",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className="main">
      <div className="floating-elements">
        <div className="floating-om">ॐ</div>
        <div className="floating-om">ॐ</div>
        <div className="floating-om">ॐ</div>
        <div className="floating-om">ॐ</div>

        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
        <div className="sparkle">✦</div>
        <div className="sparkle">✧</div>
      </div>

      <div className="main-content">
        <div className="text-container">
          <motion.img
            src="/sss_images/logo.png"
            alt="Sanatan Students' Society Logo"
            className="main-logo"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="welcome-title">
              <span className="welcome-line">Welcome to</span>
              <span className="society-name">Sanatan Students' Society</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <h2>We are not just a</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <h2>
              <i id="i">
                <AnimatePresence mode="wait">
                  <LetterAnimation key={words[index]} text={words[index]} />
                </AnimatePresence>
              </i>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <h2>Club</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            <h2 className="highlight-text">We are all of the above</h2>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;