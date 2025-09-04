import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
  exit: (i) => ({
    opacity: 0,
    x: 10, 
    transition: {
      delay: i * 0.06, 
      duration: 0.4,
      ease: "easeInOut",
    },
  }),
};


const LetterAnimation = ({ text }) => {
  return (
    <span style={{ display: "inline-block" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default LetterAnimation;



